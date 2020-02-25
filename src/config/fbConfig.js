import firebase from 'firebase/app'; //core functionality
import 'firebase/firestore'; //database
import 'firebase/auth'; //authentication

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC-pmcpj3IzAJl9XB0PtMKNHBYrqID4kFY",
    authDomain: "bugas-mario-plan.firebaseapp.com",
    databaseURL: "https://bugas-mario-plan.firebaseio.com",
    projectId: "bugas-mario-plan",
    storageBucket: "bugas-mario-plan.appspot.com",
    messagingSenderId: "37232524688",
    appId: "1:37232524688:web:21a7f3a2b8bf2d47cbc715",
    measurementId: "G-W482TRRJ39"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});
//firebase.analytics();

export default firebase;