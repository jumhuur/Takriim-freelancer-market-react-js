import { Link, useHistory } from "react-router-dom"
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faCirclePlus,faRightFromBracket,faToolbox , faUser,faSackDollar ,faFileInvoiceDollar,faGear} from "@fortawesome/free-solid-svg-icons";
import {UseAuth } from "../components/context/authcontext"
import { useState } from "react";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useRef } from "react";

function Drop_nav({drop}){
    const {Logout , crentuser , Userinfo} =  UseAuth()
    const home = useHistory()
    const [user,setuser] = useState()
    const [Akoon, setAkoon] = useState("false")
    const Active = Akoon
    // get order
    const db = getFirestore()
    // get income 
    const Userfer = doc(db, "Users", (crentuser.uid))
    //const q = query(colref)    
    function  get_user(){
        getDoc(Userfer)
        .then((doc) => {
            setuser({...doc.data(), id:doc.id})
           
        })
    }

    function update_user(){
        const userref =  doc(db, "Users", (crentuser.uid))
        updateDoc(userref, {
            Active:Active
        })
    }



    const logouthanle = async (e) => {
        e.preventDefault()
        try {
            await Logout()
            home.push('/')
        } catch(error){
            console.log(error)
        }
    }

    useEffect(()=> {
        get_user()
    },[user])
    return(
        <div id="Drop_nav"  className={drop ? "active" : ""}>
           <div> 
            {Userinfo && Userinfo.Nooc === "customer" ?
            <ul id="Drop_items">
                <li id="Dr" data="dd">
                    <Link to={`/Acount/user/${crentuser && crentuser.uid}`}>
                    <FontAwesomeIcon className="i" icon={faUser} /> Akoonkaaga
                    </Link>
                </li>
                <li id="Dr" data="dd">
                    <Link to={`/Acount/orders`}>
                    <FontAwesomeIcon className="i" icon={faToolbox} />  Dalbyo
                    </Link>
                </li>
                <li id="Dr">
                    <Link to={`/Profile/update/${crentuser && crentuser.uid}`}>
                        <FontAwesomeIcon className="i" icon={faGear} /> Maarayn
                    </Link>
                </li>
                <li id="Dr">
                    <Link onClick={logouthanle}>
                    <FontAwesomeIcon className="i" icon={faRightFromBracket} /> Xidho
                    </Link>
                </li>
            </ul>
            :
            <ul id="Drop_items">
                <li id="Dr" data="dd">
                    <Link to={`/Acount/user/${crentuser && crentuser.uid}`}>
                    <FontAwesomeIcon className="i" icon={faUser} /> Akoonkaaga
                    </Link>
                </li>
                <li id="Dr">
                    <Link to={"/Acount/Myorder"}>
                        <FontAwesomeIcon className="i" icon={faToolbox} />  Dalbyo
                    </Link>
                </li>
                {/* <li id="Dr">
                    <Link to={'/Acount/Add_Job'}>
                        <FontAwesomeIcon className="i" icon={faCirclePlus} />  Ku Dar Adeeg
                    </Link>
                </li> */}
                <li id="Dr">
                    <Link to={'/Acount/Rasiid'}>
                        <FontAwesomeIcon className="i" icon={faFileInvoiceDollar}/> Rasiid-kaaga
                    </Link>
                </li>
                <li id="Dr">
                    <Link to={`/Cashout/${crentuser && crentuser.uid}`}>
                        <FontAwesomeIcon className="i" icon={faSackDollar} />  Lacag La Bax
                    </Link>
                </li>
                {/* <li id="Dr">
                    <Link to={`/Profile/update/${crentuser && crentuser.uid}`}>
                        <FontAwesomeIcon className="i" icon={faGear} /> Marayn Akoon
                    </Link>
                </li> */}
                <li id="Dr">
                    <Link onClick={logouthanle}>
                    <FontAwesomeIcon className="i" icon={faRightFromBracket} /> Xidho
                    </Link>
                </li>
                <li id="Dr">
                    <Link to={"#online"} className="gal_shaqo">
                     <div className="lin_shaqo">
                        <select value={Akoon} id="line" onChange={(e) => {
                        setAkoon(e.target.value)
                        update_user()
                    }}>
                            <option value={"true"}>ON</option>
                            <option value={"false"}>OFF</option>
                        </select>
                        <div className={user && user.Active == "false" ? "Ishaaro ofline" : 'Ishaaro'}>

                        </div>
                     </div>
                    </Link>
                </li>
            </ul>
            }

            </div>
        </div>
    )
}


export default Drop_nav