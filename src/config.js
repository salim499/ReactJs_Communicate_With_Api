import firebase from 'firebase'
import 'firebase/firebase-database'

var firebaseConfig = {
    apiKey: "AIzaSyAcPcId7GiMModsYAkXVR5mUbHkrxyjfOc",
    authDomain: "comteur-project.firebaseapp.com",
    databaseURL: "https://comteur-project.firebaseio.com",
    projectId: "comteur-project",
    storageBucket: "comteur-project.appspot.com",
    messagingSenderId: "443537631977",
    appId: "1:443537631977:web:5c71f888f1298e7f3ede78",
    measurementId: "G-KTZQX2DL00"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase