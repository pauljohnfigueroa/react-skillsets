import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div>
            <h2>I already have an account</h2>
            <p>Sign up with your email and password</p>
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
                <Button buttonType="inverted" type="submit">Sign In</Button>
                <Button buttonType="goolge" type="submit">Sign In with Google</Button>
            </form>
        </div>
    );
}
export default SignInForm;