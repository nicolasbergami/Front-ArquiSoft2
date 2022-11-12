// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOp5otT-GyPvPiMRu_Y2kJn1Kg2HREkcE",
  authDomain: "react-coderhouse-99553.firebaseapp.com",
  projectId: "react-coderhouse-99553",
  storageBucket: "react-coderhouse-99553.appspot.com",
  messagingSenderId: "656094280526",
  appId: "1:656094280526:web:c20ce3ffea5b61608d7c1f",
  measurementId: "G-N267FW4QRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app)