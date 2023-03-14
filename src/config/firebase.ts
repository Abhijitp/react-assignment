// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe2EveqNBmRDTpXnfstuOYS9gDndawzZk",
  authDomain: "reacr-assignment.firebaseapp.com",
  projectId: "reacr-assignment",
  storageBucket: "reacr-assignment.appspot.com",
  messagingSenderId: "640087949850",
  appId: "1:640087949850:web:e3d0d06dab81f4c42787a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);