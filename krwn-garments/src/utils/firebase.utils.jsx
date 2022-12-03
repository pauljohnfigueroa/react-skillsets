import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDr_cnekSBoeDRPV-4ngnq4FoH2WjTyfPM",
    authDomain: "krwn-garments-db.firebaseapp.com",
    projectId: "krwn-garments-db",
    storageBucket: "krwn-garments-db.appspot.com",
    messagingSenderId: "240293346175",
    appId: "1:240293346175:web:ca5e2849da3c1d5587384a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Firebase/auth
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// Firebase/firestore
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    const userDocRef = doc(db, 'usersx', userAuth.uid);
    console.log(userDocRef);
    const userSnaphot = await getDoc(userDocRef);

    if (!userSnaphot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('Something went wrong in creating the user.', error.messasge);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    console.log('Firebase utils');

    return await createUserWithEmailAndPassword(auth, email, password);
}