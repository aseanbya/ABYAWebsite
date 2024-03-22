import { type AppType } from "next/app";
import { initializeApp } from "firebase/app";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const firebaseConfig = {
    apiKey: "AIzaSyDgXpYnsAav6F_qhSYkuK4BP6k8vL4aAFY",
    authDomain: "abyawebsite-277a2.firebaseapp.com",
    projectId: "abyawebsite-277a2",
    storageBucket: "abyawebsite-277a2.appspot.com",
    messagingSenderId: "281324164256",
    appId: "1:281324164256:web:eda5663aa24ad401b7e5c5",
    measurementId: "G-3QSXB65LJN",
  };

  try {
    initializeApp(firebaseConfig);
    console.log("Firebase initialized successfully");
  } catch (error) {
    console.error("Error initializing Firebase:", error);
  }

  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
