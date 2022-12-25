import { useEffect, useState } from "react";
import { getRedirectResult } from "firebase/auth";

import {
    auth,
    signInWithGooglePopUp,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../sign-up-form/sign-up-form.component";
import FormInput from "../form-input/form-input.component";

const defaultFormValues = {
    email: '',
    password: '',
};

const SignInForm = () => {

    const [formValues, setFormvalues] = useState(defaultFormValues);
    const { email, password } = formValues;

    useEffect(() => {
        // const response = await getRedirectResult(auth);
        async function fetchData() {
            const response = await getRedirectResult(auth);
            console.log(response);
            if (response) {
                const useDocRef = createUserDocumentFromAuth(response.user);
                return useDocRef;
            }
            return response;
        }
        fetchData();
    }, []);

    const logGoogleUser = async () => {
        // get the authenticate user
        //const response = await signInWithGooglePopUp();

        // the object returned (response) contains the auth_token 
        // and other credentials like the uid that we can use as a
        // unique key to store this user in firestore
        //console.log(response);

        const { user } = await signInWithGooglePopUp();
        const useDocRef = await createUserDocumentFromAuth(user);
        resetFormValues();
    }

    const handleChange = (event) => {
        //e.preventDefault();
        const { name, value } = event.target;
        setFormvalues({ ...formValues, [name]: value });
        console.log({ ...formValues, [name]: value });
    }

    const resetFormValues = () => {
        setFormvalues(defaultFormValues);
    }

    return (

        <>
            <section className="forms-container">
                <div className="sign-in-container">
                    <h2 className="heading">Already have an account?</h2>
                    <p className="sub-heading">Sign up with your email and password.</p>
                    <form>
                        <FormInput
                            label="Email"
                            type="email"
                            className="form-input"
                            onChange={handleChange}
                            required
                            name="email"
                            value={email}
                        />
                        <FormInput
                            label="Password"
                            type="password"
                            className="form-input"
                            onChange={handleChange}
                            required
                            name="password"
                            value={password}
                        />
                        <div className="buttons-outer-container">
                            <div className="button-container">
                                <button type="submit" className="form-button">Sign In</button>
                            </div>
                            <div className="button-container">
                                <button type="submit" onClick={logGoogleUser} className="form-button">Sign In with Google</button>
                            </div>
                            <div className="button-container">
                                <button type="submit" onClick={signInWithGoogleRedirect} className="form-button">Sign In with Google Redirect</button>
                            </div>
                        </div>
                    </form>
                </div>
                <SignUpForm />
            </section>
        </>
    );
}
export default SignInForm;