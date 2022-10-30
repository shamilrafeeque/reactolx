import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCGVFJ3wBAgwjJaX38t9EpqFVYo-cxPDWs",
    authDomain: "fir-98585.firebaseapp.com",
    projectId: "fir-98585",
    storageBucket: "fir-98585.appspot.com",
    messagingSenderId: "116108492296",
    appId: "1:116108492296:web:ab91682e6f4de49b135bbd",
    measurementId: "G-FE69M3M7ZZ"
  };

export default firebase.initializeApp(firebaseConfig)
