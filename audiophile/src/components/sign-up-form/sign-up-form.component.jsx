import { useState } from "react";
import { defaultMethod } from "react-router-dom/dist/dom";

import { createAuthUserFromEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

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
            <div className="sign-up-container">
                <h2 className="heading">Don't have an account?</h2>
                <p className="sub-heading">Sign Up with your email and password.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label htmlFor="displayName" className="form-label">Display Name</label>
                        <input type="text" className="form-input" onChange={handleChange} required name="displayName" value={displayName} />
                    </div>
                    <div className="form-row">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-input" onChange={handleChange} required name="email" value={email} />
                    </div>
                    <div className="form-row">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-input" onChange={handleChange} required name="password" value={password} />
                    </div>
                    <div className="form-row">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-input" onChange={handleChange} required name="confirmPassword" value={confirmPassword} />
                    </div>
                    <div className="button-container">
                        <button type="submit" className="form-button">Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SignUpForm;