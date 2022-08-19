import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import { faWallet, faNetworkWired, faToolbox , faChartSimple , faFileInvoiceDollar ,faSackDollar ,faPenToSquare ,faRightFromBracket, faCirclePlus} from "@fortawesome/free-solid-svg-icons";
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
                        <Link to={'/Acount/Cashout'}>
                        <FontAwesomeIcon className="i" icon={faSackDollar}/> Lacag La Bax
                        </Link>
                    </li>
                    <li>
                        <Link to={`/Profile/update/${uid}`}>
                            <FontAwesomeIcon className="i" icon={faPenToSquare}/> update profile
                        </Link>
                    </li>
                    <li>
                        <a href="">
                        <FontAwesomeIcon className="i" icon={faRightFromBracket}/> Xidho Akoonka
                        </a>
                    </li>
                    <li>
                        <Link to={'/Acount/Add_Job'}>
                        <FontAwesomeIcon className="i" icon={faCirclePlus}/> Gali Adeeg
                        </Link>
                    </li>
                </ul>
        </div>
        {/* <!----- xayaysiiss------> */}
        <Xayaysiis />
    </div>
    )
}


export default AsideUser