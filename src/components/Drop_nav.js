import { Link, useHistory } from "react-router-dom"
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faCirclePlus,faRightFromBracket,faToolbox , faUser,faSackDollar ,faFileInvoiceDollar,faGear} from "@fortawesome/free-solid-svg-icons";
import {UseAuth } from "../components/context/authcontext"
import { useState } from "react";

function Drop_nav({drop}){
    const {Logout , crentuser , user_data, Userinfo} =  UseAuth()
    const home = useHistory()
    const [Akoon,setAkoon] = useState(false)
    const [text,settext] = useState("On")


    const Handale_shaqo = () => {
        Akoon ? setAkoon(false) : setAkoon(true)
        Akoon ? settext("On") : settext("Off") 
        console.log(Akoon)
        console.log(text)
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
                    <Link to={"#online"} onClick={Handale_shaqo} className="gal_shaqo">
                     <div className="lin_shaqo">
                        <div className={Akoon ? "line off": "line"}>
                            {text}
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