import { useEffect, useState } from "react";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {Link, useHistory} from 'react-router-dom';
import {faBell,faMoneyBillTransfer, faBars,faUserPlus, faNetworkWired, faToolbox , faChartSimple , faFileInvoiceDollar ,faSackDollar ,faPenToSquare ,faRightFromBracket, faCirclePlus, faAngleDown, faFileLines, faEnvelope, faUserTie} from "@fortawesome/free-solid-svg-icons";
import { collection,getFirestore, query, onSnapshot, limit, orderBy, getDoc, doc, updateDoc } from "firebase/firestore";
import { UseAuth } from "./context/authcontext";

function NavMobile({nav_mb,Ogaysiis}){
    const {Userinfo, crentuser,Logout} = UseAuth ()
    const uid = Userinfo && Userinfo.uid
    const [datnav , setdatnav] = useState(null)
    const [user,setuser] = useState()
    const [Akoon, setAkoon] = useState("false")
    const Active = Akoon
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

        // // get income
        // const Userfer = doc(db, "Users", (crentuser.uid))
        // //const q = query(colref)
        // function  get_user(){
        //     getDoc (Userfer)
        //     .then((doc) => {
        //         setuser({...doc.data(), id:doc.id})

        //     })
        // }

        // function update_user(){
        //     const userref =  doc(db, "Users", (crentuser.uid))
        //     updateDoc(userref, {
        //         Active:Active
        //     })
        // }

        useEffect(() => {
            get_Home_qaybo()
            //get_user()
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
                        <Link to={`/Cashout/${uid}`}>
                        <FontAwesomeIcon className="i" icon={faSackDollar} /> Lacag La Bax
                        </Link>
                    </li>

                    <li>
                        <Link to={`/rasiid/furo/${uid}`}>
                            <FontAwesomeIcon className="i" icon={faMoneyBillTransfer}/>   Furo Lacag
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
                        <Link to={`/Xeerarfreelancer`}>
                        <FontAwesomeIcon className="i" icon={faFileLines} /> Xeerarka Iibiyaha
                        </Link>
                    </li>
                    <li>
                        <Link to={`/XeerarCustomers`}>
                        <FontAwesomeIcon className="i" icon={faFileLines} /> Xeerarka Iibsadaha
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
                        <Link to={"/freelancers"}>
                        <FontAwesomeIcon className="i" icon={faUserTie} /> Freelancers
                        </Link>
                    </li>
                    <li>
                        <Link to={'/XeerarCustomers'}>
                        <FontAwesomeIcon className="i" icon={faFileLines} /> Xeerar
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
                    }
                </ul>
            </div>
            <li>
                <a href="#">
                <FontAwesomeIcon className="i" icon={faEnvelope} /> Fariimo <span>0</span>
                </a>
            </li>
            <li>
                <a href="#">
                <FontAwesomeIcon className="i" icon={faBell} /> Ogaysiis <span>{Ogaysiis}</span>
                </a>
            </li>
            <li>
                <Link to={'/Acount/orders'}>
                <FontAwesomeIcon className="i" icon={faToolbox} /> Dalabyo
                </Link>
            </li>
            {/* <li id="Dr">
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
            </li> */}

            <Link to={"/Acount/Login"}>
            <button className="nav_mobile_btn" onClick={logouthanle}><FontAwesomeIcon className="i" icon={faRightFromBracket} /> Xidho Akoon-ka</button>
            </Link>
            </>
            :
            <>
            <li className="qayb_mobile">
            <FontAwesomeIcon  className="i" icon={faBars}/> Qaybo Muhiima < FontAwesomeIcon icon={faAngleDown}/>
            </li>
            <div className="qaybo_mobile" style={{"display": "flex"}}>
                <ul>
                    <li>
                        <Link to={"/freelancers"}>
                        <FontAwesomeIcon className="i" icon={faUserTie} /> Freelancers
                        </Link>
                    </li>
                    <li>
                        <Link to={`/Xeerarfreelancer`}>
                        <FontAwesomeIcon className="i" icon={faFileLines} /> Xeerarka Iibiyaha
                        </Link>
                    </li>
                    <li>
                        <Link to={`/XeerarCustomers`}>
                        <FontAwesomeIcon className="i" icon={faFileLines} /> Xeerarka Iibsadaha
                        </Link>
                    </li>
                </ul>
            </div>
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