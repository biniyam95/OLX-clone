import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyC_BOnWxVB4xCj3LvKwmHlouc2rmkVbvO8",
  authDomain: "olx-clone-bf509.firebaseapp.com",
  projectId: "olx-clone-bf509",
  storageBucket: "olx-clone-bf509.appspot.com",
  messagingSenderId: "462418027814",
  appId: "1:462418027814:web:5a2b2efd46f1eb0d9c0de7",
  measurementId: "G-3VY9MKFNC3"
};



export default firebase.initializeApp(firebaseConfig)