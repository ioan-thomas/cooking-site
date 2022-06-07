import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAPCViTO5lg89v2T2UBSsGKTuOlAsCMOLY",
    authDomain: "a-recipe-for-disaster-site.firebaseapp.com",
    projectId: "a-recipe-for-disaster-site",
    storageBucket: "a-recipe-for-disaster-site.appspot.com",
    messagingSenderId: "1097025381424",
    appId: "1:1097025381424:web:7da32251e460c6f310b9f5"
  };

//   initalise firebase 

firebase.initializeApp(firebaseConfig)

// init services 

const projectFirestore = firebase.firestore()

export {projectFirestore}
