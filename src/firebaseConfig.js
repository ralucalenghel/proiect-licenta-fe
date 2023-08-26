// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZaCX5pVhj7YCtuMnBLDbjUw7_BidBKj8",
  authDomain: "newproject-ab7f6.firebaseapp.com",
  projectId: "newproject-ab7f6",
  storageBucket: "newproject-ab7f6.appspot.com",
  messagingSenderId: "116354464292",
  appId: "1:116354464292:web:69960231750574f4b2f6b1",
  measurementId: "G-13KT7X8TQ4"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(firebaseApp);
