import React ,{ useContext, useEffect, useState} from "react"
import { Auth} from "../../Firebase"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut} from "firebase/auth";
const AuthContext = React.createContext()


export function UseAuth() {
    return useContext(AuthContext)
}

export function AuthProvader({children}){
    const [crentuser , setcrentuser] = useState(null)
    const [active , setactive] = useState(false)

    function  sinup(email, password){
        return  createUserWithEmailAndPassword(Auth, email, password)
    }

    function  Login(email, password){
        return  signInWithEmailAndPassword(Auth, email, password)
    }


    function  Logout(){
        return  signOut(Auth)
    }


    useEffect(() =>{
        const unsubs =  Auth.onAuthStateChanged(user => {
            setcrentuser(user)
        })
        return unsubs

    },[])
    const value = {
        crentuser,
        sinup,
        Login,
        Logout,
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}