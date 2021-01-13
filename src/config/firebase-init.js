import firebase from 'firebase/app';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBq3p5NQYS6xrHaDQxBt0GxmyaSygSiL2g",
    authDomain: "pemira-6d681.firebaseapp.com",
    projectId: "pemira-6d681",
    storageBucket: "pemira-6d681.appspot.com",
    messagingSenderId: "841123848782",
    appId: "1:841123848782:web:8dd51ea5f86a7bfb47991f",
    measurementId: "G-2FXFWSKWZT"
};

firebase.initializeApp(firebaseConfig);

// firebase.analytics();

export default firebase
