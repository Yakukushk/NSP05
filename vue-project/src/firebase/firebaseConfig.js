// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeAppCheck, ReCaptchaV3Provider} from "firebase/app-check";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyCKW8o_MOH8gtXykS8RRnzcdKObECXpEpw",
    authDomain: "olenashidanenko.firebaseapp.com",
    databaseURL: "https://olenashidanenko-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "olenashidanenko",
    storageBucket: "olenashidanenko.appspot.com",
    messagingSenderId: "717325904313",
    appId: "1:717325904313:web:d7ab0685bb99a83d24ee68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('test'),
    // Настройте параметры Firebase App Check, если необходимо
});