import { createContext, useReducer } from "react";

export const UserContext = createContext({})

export const usersReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return { users: action.payload }
        case 'CREATE_USER':
            return { users: [action.payload, ...state.users] }
        default:
            return state
    }

}

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(usersReducer, {
        users: null
    })

    const values = { ...state, dispatch }

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}