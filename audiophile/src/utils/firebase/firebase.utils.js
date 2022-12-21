import { initializeApp } from "firebase/app";
import {
    getAuth,
    //signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

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

// you can have different providers
const provider = new GoogleAuthProvider();

// configuration for google 
provider.setCustomParameters({
    prompt: 'select_account',
})

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);