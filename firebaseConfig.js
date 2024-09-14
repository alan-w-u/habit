// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "",
  // authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "habit-master-3be66",
  // storageBucket: "habit-master-3be66.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:1095462808435:ios:70d540139d009742313306",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);

// export default firebaseApp;

export { app, auth, firestore, database };