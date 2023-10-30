// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbEcPCbwWFRHgMBjHpup9Z-UDRa84JuCc",
  authDomain: "sma-lab-58dab.firebaseapp.com",
  projectId: "sma-lab-58dab",
  storageBucket: "sma-lab-58dab.appspot.com",
  messagingSenderId: "891151142335",
  appId: "1:891151142335:web:2534535b4fe6dc22ac250a",
  measurementId: "G-FD5HV1X0PN",
};
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
