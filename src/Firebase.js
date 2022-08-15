import  {initializeApp} from "firebase/app"
import {getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDruChhiTK-mmUNLQ0WyfOPNeiF2iYhYhs",
    authDomain: "market-43c38.firebaseapp.com",
    projectId: "market-43c38",
    storageBucket: "market-43c38.appspot.com",
    messagingSenderId: "114083982671",
    appId: "1:114083982671:web:de10ab4f9662b31916693a"
  };

// Initialize Firebase
initializeApp(firebaseConfig);
const myauth = getAuth()
export const Auth = myauth

