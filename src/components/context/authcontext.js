import React ,{ useContext, useEffect, useState} from "react"
import { Auth , createUser } from "../../Firebase"

const AuthContext = React.createContext()


export function UseAuth() {
    return useContext(AuthContext)
}

export function AuthProvader({childern}){
    const [crentuser , setcrentuser] = useState(null)

    function  sinup(email, password){
        return  createUser(Auth, email, password)
    }

    useEffect(() =>{
        const unsubs =  Auth.onAuthStateChanged(user => {
            setcrentuser(user)
        })
        return unsubs
    },[])
    const value = {
        crentuser,
        sinup
    }

    return(
        <AuthContext.Provider value={value}>
            {childern}
        </AuthContext.Provider>
    )
}