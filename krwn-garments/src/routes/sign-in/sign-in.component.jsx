// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import {
    auth,
    signInWithGooglePopup,
    //signInWithGoogleRedirect,
    createUserDocumentFromAuth,
} from '../../utils/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';


const SignIn = () => {

    // useEffect(() => { // run this when this component mounts

    //     async function fetchData() {
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     fetchData();

    // }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        //console.log(user);
        const userDocRef = await createUserDocumentFromAuth();
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup.</button>
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect.</button> */}
            <div>
                <SignUpForm />
            </div>
        </div>
    );
}

export default SignIn;