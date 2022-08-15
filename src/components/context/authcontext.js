import React ,{ useContext, useEffect, useState} from "react"
import { Auth} from "../../Firebase"
import { 
    getFirestore,
    doc,
    setDoc,
} from "firebase/firestore";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut} from "firebase/auth";
const AuthContext = React.createContext()


export function UseAuth() {
    return useContext(AuthContext)
}

export function AuthProvader({children}){
    const [crentuser , setcrentuser] = useState(null)
    const [user_data , setuser_data] = useState(null)
    const [active , setactive] = useState("")
    const useruid = crentuser && crentuser.uid
    // data user 

    const db = getFirestore()
    function Add_job(title, body , image , Qiimaha , Qiimayn, Xadiga, Nooca ,Qaybid, Mudada,iibsade,xaalad,qodob1aad,qodob2aad,  UserId){
        return setDoc(doc(db, "Jobs", UserId), {
            title,
             body , 
             Qiimaha ,
             Qiimayn ,
             Xadiga ,
             Nooca,
             Mudada , 
             Qaybid, 
             image,
             iibsade,
             xaalad,
             qodob1aad,
             qodob2aad,  
        })
    }


    function Add_userdata(Name, Nooc , Image , Heerka , Magaalada, info, r_Total ,r_Xidhan, r_Furan,  user_id){
        return setDoc(doc(db, "Users", user_id), {
            Name,
            Image,
            Nooc,
            Heerka,
            Magaalada,
            info,
            r_Total,
            r_Xidhan,
            r_Furan,
        })
    }


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
        active,
        Add_userdata,
        user_data,
        setuser_data,
        Add_job
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}