import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSYZv6U5hmiRmf-mzQq9XV6G-zrtykgco",
  authDomain: "tweeter-b0270.firebaseapp.com",
  projectId: "tweeter-b0270",
  storageBucket: "tweeter-b0270.appspot.com",
  messagingSenderId: "577856122401",
  appId: "1:577856122401:web:b105d5c505035a32213d60",
};

firebase.initializeApp(firebaseConfig);
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = userAuth;

    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
