import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import { faWallet, faNetworkWired, faToolbox , faMoneyBillTransfer , faFileInvoiceDollar ,faSackDollar ,faPenToSquare ,faRightFromBracket, faCirclePlus, faFileLines, faUserTie} from "@fortawesome/free-solid-svg-icons";
import Xayaysiis from "../Saponsered_Ads";
import { Link } from "react-router-dom";
import { UseAuth } from "../context/authcontext";
function AsideUser(){
    const {Userinfo} = UseAuth()
    const uid = Userinfo && Userinfo.uid
    return(
        <div className="filters">
        <div className="noocyo">
                <h2 id="noocyo_title"><FontAwesomeIcon className="i" icon={faNetworkWired}/> Qaybaha Akoonkaag</h2>
                <ul>
                    {Userinfo && Userinfo.Nooc === "frelancer" ? 
                    <>
                    <li>
                        <Link to={"/Acount/Myorder"}>
                        <FontAwesomeIcon className="i" icon={faToolbox}/> dalabyada <span>01</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Acount/Rasiid/'}>
                         <FontAwesomeIcon className="i" icon={faFileInvoiceDollar}/> Rasiika Lacagta
                        </Link>
                    </li>
                    <li>
                        <Link to={`/rasiid/furo/${uid}`}>
                            <FontAwesomeIcon className="i" icon={faMoneyBillTransfer}/>   Furo Lacag
                        </Link>
                        
                    </li>
                    <li>
                        <Link to={`/Cashout/${uid}`}>
                        <FontAwesomeIcon className="i" icon={faSackDollar}/> Lacag La Bax
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Acount/Add_Job'}>
                        <FontAwesomeIcon className="i" icon={faCirclePlus}/> Gali Adeeg
                        </Link>
                    </li>
                    <li>
                        <Link to={`/Profile/update/${uid}`}>
                            <FontAwesomeIcon className="i" icon={faPenToSquare}/>   Marayn Akoon
                        </Link>
                    </li>
                    <li>
                        <Link to={`/freelancers`}>
                            <FontAwesomeIcon className="i" icon={faUserTie}/>   Freelancers
                        </Link>
                    </li>
                    <li>
                        <Link to={`/Xeerarfreelancer`}>
                            <FontAwesomeIcon className="i" icon={faFileLines}/>   Xeerarka Iibiyaha
                        </Link>
                    </li>
                    <li>
                        <Link to={`/XeerarCustomers`}>
                            <FontAwesomeIcon className="i" icon={faFileLines}/>   Xeerarka Iibsadaha
                        </Link>
                    </li>
                    <li>
                        <a href="">
                        <FontAwesomeIcon className="i" icon={faRightFromBracket}/> Xidho Akoonka
                        </a>
                    </li>
                    </>
                    :<>
                    <li>
                        <Link to={`/Profile/update/${uid}`}>
                            <FontAwesomeIcon className="i" icon={faPenToSquare}/> update profile
                        </Link>
                    </li>
                    <li>
                        <Link to={`/freelancers`}>
                            <FontAwesomeIcon className="i" icon={faUserTie}/>   Freelancers
                        </Link>
                    </li>
                    <li>
                        <Link to={`/Xeerarfreelancer`}>
                            <FontAwesomeIcon className="i" icon={faFileLines}/>   Xeerarka Iibiyaha
                        </Link>
                    </li>
                    <li>
                        <Link to={`/XeerarCustomers`}>
                            <FontAwesomeIcon className="i" icon={faFileLines}/>   Xeerarka Iibsadaha
                        </Link>
                    </li>
                    <li>
                        <a href="">
                        <FontAwesomeIcon className="i" icon={faRightFromBracket}/> Xidho Akoonka
                        </a>
                    </li>
                    </>
                }


                </ul>
        </div>
        {/* <!----- xayaysiiss------> */}
        <Xayaysiis />
    </div>
    )
}


export default AsideUser