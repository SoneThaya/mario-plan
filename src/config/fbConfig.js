import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCKYvkPOqKhbdpD9h5ErXxdsFehnfjhrbg",
  authDomain: "marioplan-6ce13.firebaseapp.com",
  databaseURL: "https://marioplan-6ce13.firebaseio.com",
  projectId: "marioplan-6ce13",
  storageBucket: "marioplan-6ce13.appspot.com",
  messagingSenderId: "387873607477",
  appId: "1:387873607477:web:ddcd4faf95b2777cf5067c",
  measurementId: "G-HJQJR1D1SV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;