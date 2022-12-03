import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log('handleSubmit');
        // const { email, password, confirmPassword } = event.target;

        if (password != confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            console.log(user);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Something went wrong. This email address is already in use.');
            } else {
                console.log('Something went wrong.', error.message);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div>
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email and password.</span>
            <form onSubmit={handleSubmit} action="">
                <FormInput
                    label="Display Name"
                    type="text"
                    id=""
                    onChange={handleChange}
                    required
                    name="displayName"
                    value={displayName}
                />

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

                <FormInput
                    label="Confirm Password"
                    type="password"
                    id=""
                    onChange={handleChange}
                    required
                    name="confirmPassword"
                    value={confirmPassword} />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUpForm;