import { getAuth } from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAmQeFWCe7oU7fE6aOYapuboCqk0a2aP6o",
  authDomain: "next-blogs-26d30.firebaseapp.com",
  projectId: "next-blogs-26d30",
  storageBucket: "next-blogs-26d30.appspot.com",
  messagingSenderId: "1082255264847",
  appId: "1:1082255264847:web:a4b95bba8e23dba2346e3a",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();
export const firestore = getFirestore();
export const storage = getStorage();
