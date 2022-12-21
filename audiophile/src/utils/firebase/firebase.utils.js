import { initializeApp } from "firebase/app";

// for authenticating process
import {
    getAuth,        // returns the Auth instance
    //signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

// for database access and management processes
// Firestore is a document database
import {
    getFirestore,   // get the firestore instance
    doc,            // document reference instance
    getDoc,         // read the document
    setDoc,         // writes to the document
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD75KuiXoOrAE3DuvQEQp4yBrP-fV9prsc",
    authDomain: "audiophile-db.firebaseapp.com",
    projectId: "audiophile-db",
    storageBucket: "audiophile-db.appspot.com",
    messagingSenderId: "363081340953",
    appId: "1:363081340953:web:6aa0964a640d1e3edeb288"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// AUTHENTICATION SECTION
// you can have different providers
const provider = new GoogleAuthProvider();

// configuration for google 
provider.setCustomParameters({
    prompt: 'select_account',
})

export const auth = getAuth(); // returns the Auth instance

// imported in sign-in component
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider); // returns the authentication object
// END AUTHENTICATION SECTION

// DATABASE OPERATIONS
export const db = getFirestore(); // this directly points to our database in the firebase console.

// an sync function that receives an authenticated user's object
// where userAuth is what we get from the Google authentication service above, (signInWithGooglePopUp).
// A function that takes data from the google authentication service 
// and then store it in our firestore database
// imported in sign-in component
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDecRef = doc(db, "users", userAuth.uid);
    console.log(userDecRef);

    // in this object, we can use methods like .exists() 
    // to check if the data is already in the database
    const userSnapshot = await getDoc(userDecRef); // user data
    console.log(userSnapshot.exists());

    // Create user

    // if the record does not exists, create it
    if (!userSnapshot.exists()) {
        // get the name and email
        const { displayName, email } = userAuth;
        // add a date
        const createdAt = new Date();

        try {
            await setDoc(userDecRef, {
                displayName,
                email,
                createdAt
            });
        }
        catch (error) {
            console.log('Error creating the user.', error.message);
        }

    }

    // if the record does exists
    return userDecRef
}

// https://firebase.google.com/docs/firestore/data-model