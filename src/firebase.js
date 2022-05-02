import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // for authentication
//import { getAuth, onAuthStateChanged } from "firebase/auth";
import 'firebase/compat/storage'; // for storage
import 'firebase/compat/database'; // for realtime database
import 'firebase/compat/firestore'; // for cloud firestore
//const docRef = firebase.firestore().doc();
//getDoc(docRef);

const firebaseConfig = {
    apiKey: "AIzaSyCkKI2LZjXwa1pqLK8iH5GarrzwdIZiSlM",
    authDomain: "messaging-app-mern-c4abf.firebaseapp.com",
    projectId: "messaging-app-mern-c4abf",
    storageBucket: "messaging-app-mern-c4abf.appspot.com",
    messagingSenderId: "156195435803",
    appId: "1:156195435803:web:c76f6e9f86902ff9c48fbe",
    measurementId: "G-7JCZ44KC1M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db