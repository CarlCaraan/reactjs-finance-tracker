import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoPAA5uz7nYGQrTNxipBNtn9SqwBF19pA",
  authDomain: "reactjs-finance-tracker.firebaseapp.com",
  projectId: "reactjs-finance-tracker",
  storageBucket: "reactjs-finance-tracker.appspot.com",
  messagingSenderId: "572525519534",
  appId: "1:572525519534:web:c125fa92170f1e31a8833f",
};

// Init Firebase
firebase.initializeApp(firebaseConfig);

// Init Service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// Timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
