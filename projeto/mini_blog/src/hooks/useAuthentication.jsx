// import firebase
import { db } from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
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
        setError(null)

        try {
            
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false)

            return user
        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage
            if(error.message.includes("Password")) {
                systemErrorMessage = 'A senha deve ter pelo menos 6 caracteres'
            } else if(error.message.includes("email-already")) {
                systemErrorMessage = 'E-mail ja cadastrado'
            } else {
            systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde'
        }

        setError(systemErrorMessage)
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