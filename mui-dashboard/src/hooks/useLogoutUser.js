import { useAuthContext } from "./useAuthContext"

export const useLogoutUser = () => {
    const { dispatch } = useAuthContext()

    const logoutUser = () => {
        localStorage.removeItem('user')
        dispatch({ type: 'LOGOUT_USER', payload: null })
    }

    return { logoutUser }
}