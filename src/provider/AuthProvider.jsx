import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.init';
import axios from 'axios';

export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user,setUser] =  useState(null)
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }


    // onAuthStateChange

    useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth,async currentUser=>{
                if(currentUser?.email){
                    setUser(currentUser)
                    try{
                        const {data} = await axios.post('https://history-artifacts-server.vercel.app/jwt',{email:currentUser.email},{withCredentials:true})
                    console.log(data)
                    }catch(err){
                        console.log(err)
                    }
                    setLoading(false)
                    console.log("Current User",currentUser)

                }else{
                    setUser(currentUser)
                    try{
                        const {data} = await axios.post('https://history-artifacts-server.vercel.app/logout',{withCredentials:true})
                        console.log(data)
                    }catch(err){
                        console.log(err.message)
                    }
                    setLoading(false)
                    console.log("current user",currentUser)
                }
            })

            return ()=>{
                 return  unsubscribe()
            }
    },[])


    const authInfo = {
        loading,
        setLoading,
        user,
        setUser,
        createUser,
        signIn,
        signInWithGoogle,
        logOut
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
