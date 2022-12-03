import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;



    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async (event) => {
        event.preventDefault();

        const { user } = await signInWithGooglePopup();
        //console.log(user);
        await createUserDocumentFromAuth(user);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch (error) {
            alert('Something went wrong. Check email or password.', error.message);
        }
    }

    return (
        <div>
            <h2>Already have an account?</h2>
            <p>Sign up with your email and password.</p>
            <form>
                <FormInput
                    label="Email"
                    type="email"
                    id=""
                    onChange={handleChange}
                    required
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    id=""
                    onChange={handleChange}
                    required
                    name="password"
                    value={password}
                />
                <div className="buttons-container">
                    <Button buttonType="inverted" type="submit" onClick={handleSubmit}>Sign In</Button>
                    <Button buttonType="google" onClick={signInWithGoogle}>Sign In with Google</Button>
                </div>
            </form>
        </div>
    );
}
export default SignInForm;