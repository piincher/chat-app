// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebase = () => {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxx",
    databaseURL: "xxxxx",
    projectId: "xxxp",
    storageBucket: "xxxx",
    messagingSenderId: "xxx",
    appId: "xxxxx",
    measurementId: "xxxxxxxx",
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};
