import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyCE1V_sW57Sb0WKK4sDWf2Rt4uykecDv3s",
    authDomain: "complaint-forum-d985e.firebaseapp.com",
    projectId: "complaint-forum-d985e",
    storageBucket: "complaint-forum-d985e.appspot.com",
    messagingSenderId: "592466396138",
    appId: "1:592466396138:web:f95ef5ea63fc470942a893"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

