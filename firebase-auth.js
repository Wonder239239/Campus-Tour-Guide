import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import {
  doc,
  getFirestore,
  runTransaction,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

function hasUsableFirebaseConfig(config) {
  if (!config) {
    return false;
  }

  return Object.values(config).every((value) => typeof value === "string" && value && !value.startsWith("YOUR_"));
}

const config = window.firebaseConfig;

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

if (!hasUsableFirebaseConfig(config)) {
  window.firebaseAuthState = {
    ready: false,
    message: "Firebase config is missing. Replace the placeholder values in firebase-config.js."
  };
} else {
  const app = initializeApp(config);
  const auth = getAuth(app);
  const db = getFirestore(app);

  window.firebaseAuthState = {
    ready: true,
    message: ""
  };

  window.firebaseRegister = async ({ name, password }) => {
    const email = usernameToEmail(name);
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    const usernameRef = doc(db, "usernames", normalizeUsername(name));

    try {
      await runTransaction(db, async (transaction) => {
        const existing = await transaction.get(usernameRef);
        if (existing.exists()) {
          throw Object.assign(new Error("Username already exists."), {
            code: "auth/username-already-in-use"
          });
        }

        transaction.set(usernameRef, {
          uid: credential.user.uid,
          username: name.trim(),
          normalizedUsername: normalizeUsername(name),
          createdAt: serverTimestamp()
        });
      });

      await updateProfile(credential.user, { displayName: name.trim() });
      return credential.user;
    } catch (error) {
      await deleteUser(credential.user);
      throw error;
    }
  };

  window.firebaseLogin = async ({ name, password }) => {
    const email = usernameToEmail(name);
    const credential = await signInWithEmailAndPassword(auth, email, password);
    return credential.user;
  };
}
