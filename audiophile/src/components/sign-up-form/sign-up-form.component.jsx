import { useState } from "react";

import { createAuthUserFromEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        try {
            const { user } = await createAuthUserFromEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use.');
            } else {
                console.log('User creation encountered an error.', error);
            }
        }

    }

    const handleChange = (event) => {
        // name and event are passed from form input through the event.target
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Display Name"
                    type="text"
                    className="form-input"
                    onChange={handleChange}
                    required
                    name="displayName"
                    value={displayName}
                />


                <FormInput
                    label="Email"
                    type="text"
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


                <FormInput
                    label="Confirm Password"
                    type="password"
                    className="form-input"
                    onChange={handleChange}
                    required
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <div className="button-container">
                    <Button type='submit' label="Sign Up" />
                </div>
            </form>

        </>
    );
}

export default SignUpForm;