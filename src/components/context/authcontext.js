import React ,{ useContext, useEffect, useState} from "react"
import { Auth} from "../../Firebase"
import { 
    getFirestore,
    doc,
    setDoc,
    serverTimestamp,
    getDoc,
} from "firebase/firestore";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut} from "firebase/auth";
const AuthContext = React.createContext()


export function UseAuth() {
    return useContext(AuthContext)
}

export function AuthProvader({children}){
    const [crentuser , setcrentuser] = useState(null)
    const [user_data , setuser_data] = useState(null)
    const [Userinfo, setUserinfo] = useState(null)
    const [active , setactive] = useState("")
    const useruid = crentuser && crentuser.uid
    
    // add job 
    const db = getFirestore()
    function Add_job(title, body , image , Qiimaha , Qiimayn, Xadiga, Nooca ,Qaybid, Mudada,iibsade,xaalad,qodob1aad,qodob2aad,  UserId,){
        return setDoc(doc(db, "Jobs", `job${Date.now()}`), {
            title,
             body ,
             image,
             Qiimaha ,
             Qiimayn ,
             Xadiga ,
             Nooca,
             Qaybid, 
             Mudada , 
             iibsade,
             xaalad,
             qodob1aad,
             qodob2aad, 
             UserId,
             CreatedAt: serverTimestamp()
        })
    }



    // add order

    function add_order(Loobahanyahay,lanbarka,image,gudoomay,title,Qiimaha,Dalbade_id,UserId,Jobid,Mudada,Xadiga,Nooca,xaalad,Qodobka1aad,Qodobka2aad){
        return setDoc(doc(db, 'Orders',`order${Date.now()}`), {
            Loobahanyahay,
            lanbarka,
            image,
            gudoomay,
            title,
            Qiimaha,
            Dalbade_id,
            UserId,
            Jobid,
            Mudada,
            Xadiga,
            Nooca,
            xaalad,
            Qodobka1aad,
            Qodobka2aad,
            CreatedAt: Date.now()
        })
    }




    //aad comment 
    function Add_Comments(Rate, Comment , Jobid , UserId , Username, Image){
        return setDoc(doc(db, "Comments", `order${Date.now()}`), {
            Rate,
            Comment,
            Jobid,
            UserId,
            Username,
            Image,
            CreatedAt:Date.now()
        })
    }

        //add comment 
        function Add_Rasiid(Qiimaha,g_id){
            return setDoc(doc(db, "Rasiid", `order${Date.now()}`), {
                Qiimaha,
                g_id,
                CreatedAt:serverTimestamp()
            })
        }


    //add user info
    function Add_userdata(Name, Nooc , Image , Heerka , Magaalada, info, r_Total ,r_Xidhan, r_Furan, uid,  user_id){
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
            uid
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
            const docref = doc(db, "Users" , user.uid)
            //const q = query(colref)    
            function  getsingaleorder(){
                getDoc (docref)
                .then((doc) => {
                    setUserinfo({...doc.data(), id:doc.id})
                })
            }
            getsingaleorder()
        })
        return unsubs
    },[])
    const value = {
        Userinfo,
        crentuser,
        sinup,
        Login,
        Logout,
        active,
        Add_userdata,
        user_data,
        setuser_data,
        Add_job,
        add_order,
        Add_Comments,
        Add_Rasiid
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}