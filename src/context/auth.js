import React,{createContext, useState, useEffect, useContext} from 'react'
import * as auth from '../data/auth'
import api from '../data/api'

const AuthContext = createContext({})

export const AuthProvider =({children})=>{
    const [user, setUser] =useState(null);
    const [loading, setLoading] =useState(true);

    useEffect(()=>{
        const storegedUser = localStorage.getItem('@RNAuth:user');
        const storegedToken = localStorage.getItem('@RNAuth:token');

        if(storegedUser && storegedToken){
            api.defaults.headers['Authorization'] = `Bearer ${storegedToken}`
            setUser(JSON.parse(storegedUser));
            setLoading(false)
        }

    },[]);    

    async function signIn(){
        const response = await auth.signIn();
        setUser(response.user)

        api.defaults.headers['Authorization'] = `Bearer ${response.token}`

        localStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
        localStorage.setItem('@RNAuth:token', response.token);
    }
        

    function signOut(){
        localStorage.clear();
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, signIn, signOut, loading}}> 
            {children}
        </AuthContext.Provider>  
    )
}

export function useAuth(){
    const context = useContext(AuthContext)
    return context
};