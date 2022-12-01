import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log('handleSubmit');
        // const { email, password, confirmPassword } = event.target;

        if (password != confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        try {
            const response = await createAuthUserWithEmailAndPassword(email, password);
            console.log(response);
        } catch (error) {
            console.log('Something went wrong.', error.message);
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div>
            <h1>Sign Up Form</h1>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="">Display Name</label>
                <input
                    type="text"
                    id=""
                    onChange={handleChange}
                    required
                    name="displayName"
                    value={displayName}
                />

                <label htmlFor="">Email</label>
                <input
                    type="email"
                    id=""
                    onChange={handleChange}
                    required
                    name="email"
                    value={email}
                />

                <label htmlFor="">Password</label>
                <input
                    type="password"
                    id=""
                    onChange={handleChange}
                    required
                    name="password"
                    value={password}
                />

                <label htmlFor="">Confirm Password</label>
                <input
                    type="password"
                    id=""
                    onChange={handleChange}
                    required
                    name="confirmPassword"
                    value={confirmPassword} />

                <button type="submit">Sign Up</button>

            </form>
        </div>
    );
}
export default SignUpForm;