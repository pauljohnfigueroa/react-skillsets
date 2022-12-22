import { useState } from "react";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields; // all typed charaters will be saved in formFields
    // console.log(formFields);
    // console.log('displayName -> ', displayName);
    // console.log('email -> ', email);
    // console.log('password -> ', password);
    // console.log('confirmPassword -> ', confirmPassword);

    const handleChange = (event) => {
        const { name, value } = event.target; // event.target will give us everything in the input, like name, value, etc.
        console.log(name);
        // formFields contains all the previously typed characters in input fields
        // [name]: value contains the last updated field
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <>
            <div className="sign-up-container">
                <h2 className="heading">Don't have an account?</h2>
                <p className="sub-heading">Sign Up with your email and password.</p>
                <form action="">
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