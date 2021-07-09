import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA1bYS3YvcHgwotpkdg3H50fKjkZVvnicE",
    authDomain: "crown-db-6a909.firebaseapp.com",
    projectId: "crown-db-6a909",
    storageBucket: "crown-db-6a909.appspot.com",
    messagingSenderId: "231320329074",
    appId: "1:231320329074:web:c7e6a677f939d6ecb19beb",
    measurementId: "G-TJC71CTRCG"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log("error creating a new user", e.message)
        }

    }
    return userRef;
}

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;