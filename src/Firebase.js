
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0mbhdgRKK4w22Ipdw2vNcN9VCU34boR0",
  authDomain: "takriim-4cf5c.firebaseapp.com",
  databaseURL: "https://takriim-4cf5c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "takriim-4cf5c",
  storageBucket: "takriim-4cf5c.appspot.com",
  messagingSenderId: "453498834436",
  appId: "1:453498834436:web:aa1ef30ea8c966b8ea6f51"
};

// Initialize Firebase
const app  = initializeApp(firebaseConfig);
const myauth = getAuth()
export const Auth = myauth
export const Storage = getStorage(app)



