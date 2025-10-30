import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithCredential } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        return signInWithCredential(auth, email, password)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('current user in auth state change',currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe(); 
        }
    }, [])

    onAuthStateChanged(auth, (currentUser) =>{

        if(currentUser){
            console.log('inside observer: if', currentUser)
        }
        else{
            console.log('inside observer: if', currentUser)
        }
    })

    const authInfo = {
        user,
        createUser, 
        signInUser
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;