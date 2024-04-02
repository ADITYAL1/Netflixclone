// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqPvJwobRW0d85uE3eANohZ-jtnQN72gg",
  authDomain: "netflixclone-fa37b.firebaseapp.com",
  projectId: "netflixclone-fa37b",
  storageBucket: "netflixclone-fa37b.appspot.com",
  messagingSenderId: "933214172277",
  appId: "1:933214172277:web:89dca1365620d8baaf343c",
  measurementId: "G-ZB12WVSFFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();