import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyBfMRMI27R7v-dY9WqMF3jJChz-K69VM0Y",
        authDomain: "project-67-bed91.firebaseapp.com",
        projectId: "project-67-bed91",
        storageBucket: "project-67-bed91.appspot.com",
        messagingSenderId: "1072012226042",
        appId: "1:1072012226042:web:247e079423a621253d0843"
      

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();