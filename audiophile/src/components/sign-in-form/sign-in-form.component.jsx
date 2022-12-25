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
import Button from "../button/button.component";

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
        console.log({ ...formValues, [name]: value }); // ...formValues are the previous values, 
    }

    const resetFormValues = () => {
        setFormvalues(defaultFormValues);
    }

    return (
        <>
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
                        <Button type="submit" buttonType="inverted" label="Sign In" />
                    </div>
                    <div className="button-container">
                        <Button type="submit" onClick={logGoogleUser} buttonType="google" label="Sign In with Google" />
                    </div>
                    <div className="button-container">
                        <Button type="submit" onClick={signInWithGoogleRedirect} buttonType="google" label="Sign In with Google Redirect" />
                    </div>
                </div>
            </form>

        </>
    );
}
export default SignInForm;