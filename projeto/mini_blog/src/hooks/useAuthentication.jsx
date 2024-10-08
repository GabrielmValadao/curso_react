import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    sigOut
} from 'firebase/auth';

import {useState, useEffect} from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // CLEANUP
    // deal with memory leak
    const [canceled, setCanceled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (canceled) {
            return
        }
    }

    // REGISTER
    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)

        try {
            
            const {user} = createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            return user
        } catch (error) {
            console.log(error)
            console.log(typeof error.message)
        }

        setLoading(false)
    }


    useEffect(() => {
        return () => setCanceled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading
    }
}