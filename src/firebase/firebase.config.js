// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl0_IAJwPhOTlFCC8jlQtjDhVOh4w9cE0",
  authDomain: "job-track-site.firebaseapp.com",
  projectId: "job-track-site",
  storageBucket: "job-track-site.firebasestorage.app",
  messagingSenderId: "217331342246",
  appId: "1:217331342246:web:d665da02f7446277ae8d67"
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;