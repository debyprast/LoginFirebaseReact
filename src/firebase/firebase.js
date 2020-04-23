import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default {
    apiKey: "AIzaSyAmo8hfv8DCpx6DBsb82ouNV5ZOsHrehas",
    authDomain: "reactjs-db713.firebaseapp.com",
    databaseURL: "https://reactjs-db713.firebaseio.com",
    projectId: "reactjs-db713",
    storageBucket: "reactjs-db713.appspot.com",
    messagingSenderId: "852413332907",
    appId: "1:852413332907:web:065e96eadbfc10c34166ee",
    measurementId: "G-D3WXB77TST"  
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;