import { useEffect, useState } from "react";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {Link, useHistory} from 'react-router-dom';
import {faBarsStaggered, faBars,faUserPlus, faNetworkWired, faToolbox , faChartSimple , faFileInvoiceDollar ,faSackDollar ,faPenToSquare ,faRightFromBracket, faCirclePlus, faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { collection,getFirestore, query, onSnapshot, limit, orderBy } from "firebase/firestore";
import { UseAuth } from "./context/authcontext";

function NavMobile({nav_mb}){
    const {Userinfo, crentuser,Logout} = UseAuth ()
    const uid = Userinfo && Userinfo.uid
    const [datnav , setdatnav] = useState(null)
    const home = useHistory()
        //get data user 
        const db = getFirestore()
        const colref = collection(db, "Qaybo")
        const q = query(colref, limit(8), orderBy("CreatedAt"))    
        //hellida docs 
        async function  get_Home_qaybo(){
            onSnapshot (q, (snapshot) => {
                const Dhaq1aad = []
                snapshot.docs.forEach((doc) => {
                    Dhaq1aad.push({...doc.data(), id:doc.id})
                })
                setdatnav(Dhaq1aad)
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
    
        useEffect(() => {
            get_Home_qaybo()
        }, [])
    return(
        <div id="nav_mobile" className={nav_mb ? "active":""}>
        <ul>
            <li className="qayb_mobile">
                <FontAwesomeIcon  className="i" icon={faBars}/> Qaybaha Shaqoyinka < FontAwesomeIcon icon={faAngleDown}/>
            </li>
            <div className="qaybo_mobile">
                <ul>
                    {datnav ? datnav.map((data) =>(
                        <li key={data._id}>
                        <Link to={`/Qayb/${data.id}`}>
                            <FontAwesomeIcon  className="i" icon={faNetworkWired}/> {data.Name}
                        </Link>
                        </li>
                    )) : <li>Loading data</li>}
                </ul>
            </div>
            {crentuser ?
            <>
            <li className="qayb_mobile">
            <FontAwesomeIcon  className="i" icon={faBars}/> Qaybaha Akoonkaga < FontAwesomeIcon icon={faAngleDown}/>
            </li>
            <div className="qaybo_mobile" style={{"display": "flex"}}>
                <ul>
                    { Userinfo  && Userinfo.Nooc === "frelancer" ?
                    <>
                    <li>
                        <Link to={'/Acount/Myorder'}>
                            <FontAwesomeIcon className="i" icon={faToolbox} /> dalabyada
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Acount/Rasiid/'}>
                        <FontAwesomeIcon className="i" icon={faFileInvoiceDollar} /> Rasiika Lacagta
                        </Link>
                    </li>
                    <li>
                        <Link to={"/Acount/Cashout"}>
                        <FontAwesomeIcon className="i" icon={faSackDollar} /> Lacag La Bax
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Acount/Add_Job'}>
                        <FontAwesomeIcon className="i" icon={faCirclePlus} /> Gali Adeeg
                        </Link>
                    </li>
                    <li>
                        <Link to={`/Profile/update/${uid}`}>
                        <FontAwesomeIcon className="i" icon={faPenToSquare} /> update profile
                        </Link>
                    </li>

                    <li>
                        <a href="">
                        <FontAwesomeIcon className="i" icon={faRightFromBracket} /> Xidho Akoonka
                        </a>
                    </li>
                    </>
                    :
                    <>
                    <li>
                        <Link to={`/Profile/update/${uid}`}>
                        <FontAwesomeIcon className="i" icon={faPenToSquare} /> update profile
                        </Link>
                    </li>

                    <li>
                        <a href="">
                        <FontAwesomeIcon className="i" icon={faRightFromBracket} /> Xidho Akoonka
                        </a>
                    </li>
                    </>
                    }
                </ul>
            </div>
            <li>
                <a href="#">
                    <i className="fa-solid fa-message"></i> Fariimo <span>0</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa-solid fa-bell"></i> Ogaysiis <span>0</span>
                </a>
            </li>
            <li>
                <Link to={'/Acount/orders'}>
                    <i className="fa-solid fa-toolbox"></i> Dalabyo
                </Link>
            </li>
            <Link to={"/Acount/Login"}>
            <button className="nav_mobile_btn" onClick={logouthanle}><FontAwesomeIcon className="i" icon={faRightFromBracket} /> Xidho Akoon-ka</button>
            </Link>
            </>
            :
            <>
            <Link to={"/Acount/Login"}>
                <button className="nav_mobile_btn"><FontAwesomeIcon className="i" icon={faRightFromBracket} /> Gal Akoon</button>
            </Link>
            <Link to={"/Acount/Singup"}>
                <button className="nav_mobile_btn"><FontAwesomeIcon className="i" icon={faUserPlus} /> Samayso Akoon</button>
            </Link>
            </>
            }

            
        </ul>
    </div>
    )
}


export default NavMobile