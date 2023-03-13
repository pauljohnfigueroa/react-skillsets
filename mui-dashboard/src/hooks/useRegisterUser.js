import { useState } from "react";
import { useAuthContext } from './useAuthContext'

export const useRegisterUser = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { user } = useAuthContext()

    const registerUser = async (email, name, password, phone, roles) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:4000/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
            },
            body: JSON.stringify({ email, name, password, phone, roles })
        })
        // {email, token}
        const json = await response.json()

        console.log(json)

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
            console.log('response Not OK')
        }

        if (response.ok) {
            // save the {email, token} in the localStorage
            localStorage.setItem('user', JSON.stringify(json))
            //dispatch({ type: 'LOGIN_USER', payload: json })
            setIsLoading(false)
            console.log('response OK')
        }
    }

    return { registerUser, isLoading, error }
}
