import { initializeApp } from "@firebase/app";
import "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const config = {
  apiKey: "AIzaSyDT2SVqIdeXY_2yeaHprTZU7TFSQ4DA3kc",
  authDomain: "netflix-26ec4.firebaseapp.com",
  projectId: "netflix-26ec4",
  storageBucket: "netflix-26ec4.appspot.com",
  messagingSenderId: "628201822885",
  appId: "1:628201822885:web:458f2f537bc3ac7cf8cb4c",
  measurementId: "G-08JERDD7WJ",
};

const firebase = initializeApp(config);
//seeddatabase(firebase) it is used to imort all seed dala to config
export const app = getAuth(firebase);
export const db = getFirestore(firebase);
