import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Init Firebase
var config = {
    apiKey: "AIzaSyAYRV8Z3GFrzZOBHzd2WOpdBgVxnBOPt-Q",
    authDomain: "geo-ninjas-6b515.firebaseapp.com",
    databaseURL: "https://geo-ninjas-6b515.firebaseio.com",
    projectId: "geo-ninjas-6b515",
    storageBucket: "geo-ninjas-6b515.appspot.com",
    messagingSenderId: "383067638222",
    appId: "1:383067638222:web:bd9624aabb898785cc839f"
  };
 

  const firebaseApp = firebase.initializeApp(config);

  export default firebaseApp.firestore()