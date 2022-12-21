import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignInForm = () => {

    const logGoogleUser = async () => {
        // get the authenticate user
        //const response = await signInWithGooglePopUp();

        // the object returned (response) contains the auth_token 
        // and other credentials like the uid that we can use as a
        // unique key to store this user in firestore
        //console.log(response);

        const { user } = await signInWithGooglePopUp();
        const useDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <>
            <section className="forms-container">
                <div className="sign-in-container">
                    <h2 className="heading">Already have an account?</h2>
                    <p className="sub-heading">Sign up with your email and password.</p>
                    <form>
                        <div className="form-row">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-input" required name="email" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-input" required name="password" />
                        </div>
                        <div className="buttons-outer-container">
                            <div className="button-container">
                                <button type="submit" className="form-button">Sign In</button>
                            </div>
                            <div className="button-container">
                                <button type="submit" onClick={logGoogleUser} className="form-button">Sign In with Google</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="sign-up-container">
                    <h2 className="heading">Don't have an account?</h2>
                    <p className="sub-heading">Sign Up with your email and password.</p>
                    <form action="">
                        <div className="form-row">
                            <label htmlFor="displayName" className="form-label">Display Name</label>
                            <input type="text" className="form-input" required name="displayName" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-input" required name="email" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-input" required name="password" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-input" required name="confirmPassword" />
                        </div>
                        <div className="button-container">
                            <button type="submit" className="form-button">Sign Up</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
export default SignInForm;