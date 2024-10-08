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
}