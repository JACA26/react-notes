import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCWtuZt8rfw7aCPlr4iQUCKzVG6gv8PUSw",
    authDomain: "react-courses-58505.firebaseapp.com",
    databaseURL: "https://react-courses-58505.firebaseio.com",
    projectId: "react-courses-58505",
    storageBucket: "react-courses-58505.appspot.com",
    messagingSenderId: "755657735139",
    appId: "1:755657735139:web:b02c959a8b89f5c839fed6",
    measurementId: "G-99Z20YDMM5"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}