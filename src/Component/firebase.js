import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDFZXK-HqjAcYwYuycyxVXVpm9ZvCch1XI",
    authDomain: "clone-7462c.firebaseapp.com",
    projectId: "clone-7462c",
    storageBucket: "clone-7462c.appspot.com",
    messagingSenderId: "553530434014",
    appId: "1:553530434014:web:8a17e65ccc60fd009abd4f",
    measurementId: "G-F67PLSCXGX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };