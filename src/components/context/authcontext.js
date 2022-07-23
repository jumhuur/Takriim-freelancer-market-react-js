import React ,{ useContext, useEffect, useState} from "react"
import { Auth} from "../../Firebase"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut} from "firebase/auth";
const AuthContext = React.createContext()


export function UseAuth() {
    return useContext(AuthContext)
}

export function AuthProvader({children}){
    const [crentuser , setcrentuser] = useState(null)
    const [thiuser , setthiuser] = useState(null)
    const [active , setactive] = useState("")

    function  sinup(email, password){
        setactive(true)
        return  createUserWithEmailAndPassword(Auth, email, password)
    }

    function  Login(email, password){
        setactive(true)
        return  signInWithEmailAndPassword(Auth, email, password)
    }


    function  Logout(){
        setactive(false)
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
        active
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}