import { useEffect } from "react";
import {
    createContext, useState, useReducer
} from "react";

export const AuthContext = createContext()

export const usersReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return { user: action.payload }
        case 'LOGOUT_USER':
            return { user: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(usersReducer, {
        user: null
    })

    useEffect(() => {
        // keep the user logged in if we have data in the localStorage
        const user = JSON.parse(localStorage.getItem('user'))

        if (user) {
            dispatch({ type: 'LOGIN_USER', payload: user })
        }
    }, [])

    console.log('AuthContextProvider state:', state)

    const values = { ...state, dispatch }
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}