// import { createContext, useState, useEffect, useReducer } from "react";
import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

import { createAction } from "../utils/reducer/reducer.utils";


export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const INITIAL_STATE = {
    currentUser: null,
}

const userReducer = (state, action) => {
    console.log('dispatched');
    console.log(action);

    const { type, payload } = action;


    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            };
        default:
            throw new Error(`Unhandled type ${type} in userReducer.`);
    }
}



// a provider is the actual component
// every context, there is a Provider
export const UserProvider = ({ children }) => {

    // const [currentUser, setCurrentUser] = useState(null);

    // const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
    // const { currentUser } = state;
    // or you can destructure the currentUser from state
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
    console.log(currentUser);

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
            // { type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user }
        )
    }

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