import { createContext, useState } from "react";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

// a provider is the actual component
// every context, there is a Provider
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}