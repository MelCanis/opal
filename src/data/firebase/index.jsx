// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa83O_x6caJBoLUakepoV3IaqbOV5RprM",
  authDomain: "opal-b8fa5.firebaseapp.com",
  projectId: "opal-b8fa5",
  storageBucket: "opal-b8fa5.appspot.com",
  messagingSenderId: "1059499578314",
  appId: "1:1059499578314:web:389df6b6d8213cdb3bb533",
  measurementId: "G-H49P1XSF7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };