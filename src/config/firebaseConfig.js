import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA9anmLM6MufPYyP3riJIHTiaJ2ENA1_dA",
    authDomain: "disciplinapidm.firebaseapp.com",
    projectId: "disciplinapidm",
    storageBucket: "disciplinapidm.appspot.com",
    messagingSenderId: "839885909435",
    appId: "1:839885909435:web:6eab59a5fe1077fea8689e",
    measurementId: "G-8C3EYMSC9X"
}

let Firebase = firebase.initializeApp(firebaseConfig);


export default Firebase.firestore();