import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC5vbxSneVWIWVXkGBOSpCDrZ5tPNL4gzY",
    authDomain: "realtor-clone-35d6c.firebaseapp.com",
    projectId: "realtor-clone-35d6c",
    storageBucket: "realtor-clone-35d6c.appspot.com",
    messagingSenderId: "208513067875",
    appId: "1:208513067875:web:e4b7af1e2ad0195e25c156"
};


initializeApp(firebaseConfig);
export const db = getFirestore()