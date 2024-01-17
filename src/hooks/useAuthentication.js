import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    // cleanup
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled(){
        if(cancelled){
            return
        }
    }

    const loginUser = async (data) => {
        checkIfIsCancelled()
        setLoading(true)
        setError(false)
        try {
            await signInWithEmailAndPassword(auth, data.email, data.pass)
            setLoading(false)
        } catch (error) {
            let msg
            if(error.message.includes('invalid-credential')){
                msg = 'Usuário ou senha inválido!'
            }else{
                msg = 'Ocorreu um erro! Tente novamente mais tarde.'
            }
            setLoading(false)
            setError(msg)
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled()
        setLoading(true)
        try {
            const {user} = await createUserWithEmailAndPassword(auth, data.email, data.pass)
            await updateProfile(user, {displayName: data.displayName})
            setLoading(false)
            return user
        } catch (error) {
            let msg
            if(error.message.includes('Password')){
                msg = 'A senha precisa ter pelo menos 6 caracteres'
            }else if(error.message.includes('email-already')){
                msg = 'E-mail já cadastrado'
            }else{
                msg = 'Ocorreu um erro'
            }
            
            setLoading(false)
            setError(msg)

        }

    }

    const logout = () => {
        checkIfIsCancelled()
        signOut(auth)
    }

    useEffect(()=>{
        return () => setCancelled(true)
    }, [])
    return {
        auth,
        createUser,
        logout,
        loginUser,
        error,
        loading
    }
}