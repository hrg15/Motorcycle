import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCHFnlGtMZK2u0rqhAHSGwyYlnjUkzj_c4",
  authDomain: "motorcycle-hrg.firebaseapp.com",
  databaseURL:
    "https://motorcycle-hrg-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "motorcycle-hrg",
  storageBucket: "motorcycle-hrg.appspot.com",
  messagingSenderId: "1088696004967",
  appId: "1:1088696004967:web:1d4372ecb0a732b5863fc2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
