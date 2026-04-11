import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

function hasUsableSupabaseConfig(config) {
  return Boolean(
    config &&
      typeof config.url === "string" &&
      typeof config.anonKey === "string" &&
      config.url &&
      config.anonKey &&
      !config.url.startsWith("YOUR_") &&
      !config.anonKey.startsWith("YOUR_")
  );
}

function normalizeUsername(username) {
  return username.trim().replace(/\s+/g, " ").toLowerCase();
}

function usernameToEmail(username) {
  const normalized = normalizeUsername(username);
  const encoded = btoa(unescape(encodeURIComponent(normalized)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
  return `user-${encoded}@xjtlu-guide.local`;
}

const config = window.supabaseConfig;

if (!hasUsableSupabaseConfig(config)) {
  window.authProviderState = {
    ready: false,
    provider: "supabase",
    message: "Supabase config is missing. Replace the placeholder values in supabase-config.js."
  };
} else {
  const supabase = createClient(config.url, config.anonKey);

  window.authProviderState = {
    ready: true,
    provider: "supabase",
    message: ""
  };

  window.authRegister = async ({ name, password }) => {
    const trimmedName = name.trim();
    const normalizedUsername = normalizeUsername(trimmedName);

    const { data: existingRows, error: existingError } = await supabase
      .from("usernames")
      .select("normalized_username")
      .eq("normalized_username", normalizedUsername)
      .limit(1);

    if (existingError) {
      throw existingError;
    }

    if (existingRows?.length) {
      throw Object.assign(new Error("Username already exists."), {
        code: "auth/username-already-in-use"
      });
    }

    const email = usernameToEmail(trimmedName);
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: trimmedName,
          normalized_username: normalizedUsername
        }
      }
    });

    if (signUpError) {
      throw signUpError;
    }

    const user = signUpData.user;
    if (!user) {
      throw new Error("Supabase did not return a user.");
    }

    const { error: insertError } = await supabase.from("usernames").insert({
      uid: user.id,
      username: trimmedName,
      normalized_username: normalizedUsername
    });

    if (insertError) {
      throw insertError;
    }

    return user;
  };

  window.authLogin = async ({ name, password }) => {
    const email = usernameToEmail(name);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      throw error;
    }

    return data.user;
  };
}
