import { useState } from "react";

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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div>
            <h1>Sign Up Form</h1>
            <form onSubmit={() => { }} action="">
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