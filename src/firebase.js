import firebase from 'firebase/compat/app';
import 'firebase/auth'; // for authentication
import 'firebase/storage'; // for storage
import 'firebase/database'; // for realtime database
import 'firebase/firestore'; // for cloud firestore

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