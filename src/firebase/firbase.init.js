// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy22dOZ0TcIrv6x8Z68n_SdVMBdzbeV_I",
  authDomain: "user-email-pass-auth-1e0d4.firebaseapp.com",
  projectId: "user-email-pass-auth-1e0d4",
  storageBucket: "user-email-pass-auth-1e0d4.appspot.com",
  messagingSenderId: "411615489015",
  appId: "1:411615489015:web:c07621708025d49f995cf2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
