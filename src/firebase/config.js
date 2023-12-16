// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCInFX2-LneiXScJgerjFS2K5CT1wQJqCM",
    authDomain: "react-curso-58a16.firebaseapp.com",
    projectId: "react-curso-58a16",
    storageBucket: "react-curso-58a16.appspot.com",
    messagingSenderId: "716517808957",
    appId: "1:716517808957:web:c3cda2334913a953250354"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);