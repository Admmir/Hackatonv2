import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSVg8jWfun-r-jpFAg2Dc1vyQeIeR9Ujo",
  authDomain: "hakaton2-bdb11.firebaseapp.com",
  databaseURL: "https://hakaton2-bdb11-default-rtdb.firebaseio.com",
  projectId: "hakaton2-bdb11",
  storageBucket: "hakaton2-bdb11.appspot.com",
  messagingSenderId: "289346259567",
  appId: "1:289346259567:web:167aec99dbce57f51f5b9a",
  measurementId: "G-GQVLTPSLN8",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
