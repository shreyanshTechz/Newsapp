// Import the functions you need from the SDKs you need
// import * as firebase from 'firebase'
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJfDUmJB4cLV9c39ExXrM5fGVIQb-Ed4Y",
  authDomain: "new-p-b3c5d.firebaseapp.com",
  projectId: "new-p-b3c5d",
  storageBucket: "new-p-b3c5d.appspot.com",
  messagingSenderId: "606186765378",
  appId: "1:606186765378:web:2610612e186dfd2f2e01db",
  measurementId: "G-6QHSHXNFKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);