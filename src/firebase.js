import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDJLPWH-1lhzT1IszyYel5svC7H2giLzaI",
    authDomain: "twitter-clone-e9c73.firebaseapp.com",
    projectId: "twitter-clone-e9c73",
    storageBucket: "twitter-clone-e9c73.appspot.com",
    messagingSenderId: "978711563826",
    appId: "1:978711563826:web:a5a44e9fb54e84e781362b"
};

const firebaseApp= firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db;