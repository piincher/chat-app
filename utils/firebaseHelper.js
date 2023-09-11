// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
 
  const firebaseConfig = {
    apiKey: "AIzaSyC5rFfJTJLB28hyrVe1Aje6-wU9EOlXA0w",
    authDomain: "whatsapp-clone-17f24.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-17f24-default-rtdb.firebaseio.com",
    projectId: "whatsapp-clone-17f24",
    storageBucket: "whatsapp-clone-17f24.appspot.com",
    messagingSenderId: "77295161582",
    appId: "1:77295161582:web:49c1b7a182de3354c7e3ff",
    measurementId: "G-LGT9RZ8ZXQ",
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};
