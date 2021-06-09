import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig=firebase.initializeApp({
    apiKey: "AIzaSyCCyqMfffcccRvhGeNvaj9OofOPL5i4y9s",
    authDomain: "test1-754c8.firebaseapp.com",
    databaseURL: "https://test1-754c8-default-rtdb.firebaseio.com",
    projectId: "test1-754c8",
    storageBucket: "test1-754c8.appspot.com",
    messagingSenderId: "671286810730",
    appId: "1:671286810730:web:b62f1b421d3f66d0545213"
});

export {firebaseConfig as firebase};

