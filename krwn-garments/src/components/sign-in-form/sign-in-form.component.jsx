import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

import { UserContext } from '../../contexts/user.context';

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async (event) => {
        event.preventDefault();

        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);

            setCurrentUser(user);

            resetFormFields();

        } catch (error) {
            console.log(error.code);

            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Something is not right. Check your email or password.');
                    break;
                case 'auth/user-not-found':
                    alert('No user is associated with this account.');
                    break;
                default:
                    alert(error.code);
            }
        }
    }

    return (
        <div className="sign-in-container">
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
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Sign In with Google</Button>
                </div>
            </form>
        </div>
    );
}
export default SignInForm;