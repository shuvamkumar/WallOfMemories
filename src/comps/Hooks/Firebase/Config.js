import * as firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDk1EVW4x9WkDSlJctG3XjjGeky3G0KmT8",
    authDomain: "firegram-bcd50.firebaseapp.com",
    databaseURL: "https://firegram-bcd50.firebaseio.com",
    projectId: "firegram-bcd50",
    storageBucket: "firegram-bcd50.appspot.com",
    messagingSenderId: "561544788499",
    appId: "1:561544788499:web:b017ccb231bf7841e59de6"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);   

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectStorage,projectFirestore,timestamp};


