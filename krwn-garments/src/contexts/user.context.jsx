import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

// a provider is the actual component
// every context, there is a Provider
export const UserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    // centralize all code for authentication in here 
    // as opposed to the previous that we have authentication code in
    // sign-in-form
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            setCurrentUser(user);
        });
        return unsubscribe;

    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}