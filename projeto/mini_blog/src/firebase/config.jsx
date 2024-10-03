import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7E8AOKP05L_vE2kvHmzcPnJ7Muf7kIQk",
  authDomain: "miniblog-03do10.firebaseapp.com",
  projectId: "miniblog-03do10",
  storageBucket: "miniblog-03do10.appspot.com",
  messagingSenderId: "604171607788",
  appId: "1:604171607788:web:581459ea1696fe26578fc9",
  measurementId: "G-FQLTP2XRRZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };