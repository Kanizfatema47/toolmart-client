// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1TwttMSzi6t1f6mvdhOwh7n-by_xLg6Y",
  authDomain: "project-tools-971d9.firebaseapp.com",
  projectId: "project-tools-971d9",
  storageBucket: "project-tools-971d9.appspot.com",
  messagingSenderId: "878002322876",
  appId: "1:878002322876:web:69a60e8b7d72cbfbeb7fb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;