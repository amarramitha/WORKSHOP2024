import { initializeApp, getApps } from "firebase/app";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBSrFSnldcEZ4ftdR-suXsmiQkIidb__cM",
  authDomain: "workshop2024-9794b.firebaseapp.com",
  projectId: "workshop2024-9794b",
};

function getFirebaseApp() {
  const apps = getApps();

  if (apps.length > 0) {
    return apps[0];
  }

  return initializeApp(FIREBASE_CONFIG);
}

export const firebaseApp = getFirebaseApp();