import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
  let config = {
    apiKey: "AIzaSyDbmR6O_1MceeJy6wJFpL9DHB4PBIZKVC0",
    authDomain: "chatchat-1157e.firebaseapp.com",
    databaseURL: "https://chatchat-1157e.firebaseio.com",
    projectId: "chatchat-1157e",
    storageBucket: "chatchat-1157e.appspot.com",
    messagingSenderId: "785715213089"
  };

  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()
