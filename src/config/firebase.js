// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfAoe5JoUHwldh4MxfaO44ElxPwgTZlI4",
  authDomain: "vite-contact-de62c.firebaseapp.com",
  projectId: "vite-contact-de62c",
  storageBucket: "vite-contact-de62c.appspot.com",
  messagingSenderId: "343051141719",
  appId: "1:343051141719:web:650992d6b6221c26595912"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);