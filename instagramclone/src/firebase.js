import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import firebase from "./firebase/compat/app";
import "firebase/auth";
// import "firebase/storage";
// import "firebase/firestore";
// import firebase from "firebase/app";

// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPy-jKCQN-o_AZieuAv4ern4p85TnFCTA",
  authDomain: "insta-clone-fa920.firebaseapp.com",
  projectId: "insta-clone-fa920",
  storageBucket: "insta-clone-fa920.appspot.com",
  messagingSenderId: "566333578809",
  appId: "1:566333578809:web:0d9032fc4ec535485b37e8",
  measurementId: "G-ME0F64DKKL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, auth, db, storage };
