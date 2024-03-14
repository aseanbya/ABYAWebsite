// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgXpYnsAav6F_qhSYkuK4BP6k8vL4aAFY",
  authDomain: "abyawebsite-277a2.firebaseapp.com",
  projectId: "abyawebsite-277a2",
  storageBucket: "abyawebsite-277a2.appspot.com",
  messagingSenderId: "281324164256",
  appId: "1:281324164256:web:eda5663aa24ad401b7e5c5",
  measurementId: "G-3QSXB65LJN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
