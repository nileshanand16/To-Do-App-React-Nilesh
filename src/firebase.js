import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBK3BcNAOcTTwoWwetHXBd8n8J25yf13yw",
    authDomain: "to-doapp-nilesh.firebaseapp.com",
    databaseURL: "https://to-doapp-nilesh.firebaseio.com",
    projectId: "to-doapp-nilesh",
    storageBucket: "to-doapp-nilesh.appspot.com",
    messagingSenderId: "691504014157",
    appId: "1:691504014157:web:bc191e753b74b45b118d04",
    measurementId: "G-SKWZH7V4J2"
});

const db =firebaseApp.firestore();

export default db;