import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAZ6K1MEYU-3_ZDCU1H2AOBwrf8_VtNUdA",
    authDomain: "crwn-db-f3ad8.firebaseapp.com",
    projectId: "crwn-db-f3ad8",
    storageBucket: "crwn-db-f3ad8.appspot.com",
    messagingSenderId: "822909070587",
    appId: "1:822909070587:web:7f0d3eea8bfceed7e9145e"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists) {
      const {displayName, email} = userAuth;
      const createdDate = new Date();
      
      try {
        await userRef.set({
          displayName,
          email,
          createdDate,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signINWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;