import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

function hasUsableFirebaseConfig(config) {
  if (!config) {
    return false;
  }

  return Object.values(config).every((value) => typeof value === "string" && value && !value.startsWith("YOUR_"));
}

const config = window.firebaseConfig;

if (!hasUsableFirebaseConfig(config)) {
  window.firebaseAuthState = {
    ready: false,
    message: "Firebase config is missing. Replace the placeholder values in firebase-config.js."
  };
} else {
  const app = initializeApp(config);
  const auth = getAuth(app);

  window.firebaseAuthState = {
    ready: true,
    message: ""
  };

  window.firebaseRegister = async ({ name, email, password }) => {
    const credential = await createUserWithEmailAndPassword(auth, email, password);

    if (name) {
      await updateProfile(credential.user, { displayName: name });
    }

    await sendEmailVerification(credential.user);
    return credential.user;
  };

  window.firebaseLogin = async ({ email, password }) => {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    return credential.user;
  };
}
