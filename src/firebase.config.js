// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaCmoPGrvrbA5ebg3yt2JwrCvixaoYZ_A",
  authDomain: "yt-5346d.firebaseapp.com",
  projectId: "yt-5346d",
  storageBucket: "yt-5346d.appspot.com",
  messagingSenderId: "151340105902",
  appId: "1:151340105902:web:274f36b65178a62fd72d3f",
  measurementId: "G-C64296Q3W4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig