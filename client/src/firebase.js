// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "genwebai-7da31.firebaseapp.com",
  projectId: "genwebai-7da31",
  storageBucket: "genwebai-7da31.firebasestorage.app",
  messagingSenderId: "423182808487",
  appId: "1:423182808487:web:77a7741f4532548bfff282"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider =new GoogleAuthProvider()

export {auth,provider}