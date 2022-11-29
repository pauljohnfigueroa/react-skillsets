import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';



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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);