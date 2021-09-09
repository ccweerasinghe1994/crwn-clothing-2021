import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA1bYS3YvcHgwotpkdg3H50fKjkZVvnicE",
  authDomain: "crown-db-6a909.firebaseapp.com",
  projectId: "crown-db-6a909",
  storageBucket: "crown-db-6a909.appspot.com",
  messagingSenderId: "231320329074",
  appId: "1:231320329074:web:c7e6a677f939d6ecb19beb",
  measurementId: "G-TJC71CTRCG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log("error creating a new user", e.message);
    }
  }
  return userRef;
};

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectToAdd
) => {
  //   this will create a collection ref
  const collectionRef = firestore.collection(collectionKey);
  //   let's make our app consistent with use of a batch
  const batch = firestore.batch();

  // let's create a document refs

  objectToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();
    console.log(newDocRef);
    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

export const convertCollectionSnapShotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collectionItem) => {
    accumulator[collectionItem.title.toLowerCase()] = collectionItem;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
export default firebase;
