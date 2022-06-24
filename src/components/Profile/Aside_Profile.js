import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import { faWallet, faNetworkWired, faToolbox , faChartSimple , faFileInvoiceDollar ,faSackDollar ,faPenToSquare ,faRightFromBracket, faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import Xayaysiis from "../Saponsered_Ads";
import { Link } from "react-router-dom";
function AsideUser(){
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
                        <a href="">
                        <FontAwesomeIcon className="i" icon={faChartSimple}/> adeegyadaada
                        </a>
                    </li>
                    <li>
                        <a href="/rasiid.html">
                         <FontAwesomeIcon className="i" icon={faFileInvoiceDollar}/> Rasiika Lacagta
                        </a>
                    </li>
                    <li>
                        <a href="/cashout.html">
                        <FontAwesomeIcon className="i" icon={faSackDollar}/> Lacag La Bax
                        </a>
                    </li>
                    <li>
                        <a href="">
                        
                        <FontAwesomeIcon className="i" icon={faPenToSquare}/> update profile
                        </a>
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