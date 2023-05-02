// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwTjZLr50bIPG4WJ1IzON71AjV_9aig5E",
  authDomain: "cooking-with-care.firebaseapp.com",
  projectId: "cooking-with-care",
  storageBucket: "cooking-with-care.appspot.com",
  messagingSenderId: "410263328458",
  appId: "1:410263328458:web:aae0d640df994af64c0633"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;