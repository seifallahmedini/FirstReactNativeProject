import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

// this timestamp in snapshots true is deparcated
const settings = {};

const config = {
  apiKey: "AIzaSyAeqD2RTVWO3qTeV3pVUAEwZBcwpA0P-vg",
  authDomain: "crudapp-3ca43.firebaseapp.com",
  databaseURL: "https://crudapp-3ca43.firebaseio.com",
  projectId: "crudapp-3ca43",
  storageBucket: "crudapp-3ca43.appspot.com",
  messagingSenderId: "1074697301229"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;