import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.styles.scss';

const Authentication = () => {

    // useEffect(() => { // run this when this component mounts

    //     async function fetchData() {
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     fetchData();

    // }, []);

    return (
        <div className='authentication-container'>
            <div>
                <SignInForm />
            </div>
            <div>
                <SignUpForm />
            </div>
        </div>
    );
}

export default Authentication;