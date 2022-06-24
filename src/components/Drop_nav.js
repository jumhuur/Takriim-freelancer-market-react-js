import { Link } from "react-router-dom"
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faCirclePlus,faRightFromBracket,faToolbox , faUser,faSackDollar} from "@fortawesome/free-solid-svg-icons";

function Drop_nav({drop}){
    return(
        <div id="Drop_nav"  className={drop ? "active" : ""}>
           <div> 
            <ul id="Drop_items">
                <li id="Dr" data="dd">
                    <Link to={'/Acount/maxamad dayib/1'}>
                    <FontAwesomeIcon className="i" icon={faUser} /> Akoonkaaga
                    </Link>
                </li>
                <li id="Dr">
                    <Link to={"/Acount/Myorder"}>
                        <FontAwesomeIcon className="i" icon={faToolbox} />  Dalbyo
                    </Link>
                </li>
                <li id="Dr">
                    <Link to={'/Acount/Add_Job'}>
                        <FontAwesomeIcon className="i" icon={faCirclePlus} />  Ku Dar Adeeg
                    </Link>
                </li>
                <li id="Dr">
                    <Link to={'/Acount/Cashout'}>
                        <FontAwesomeIcon className="i" icon={faSackDollar} />  Lacag La Bax
                    </Link>
                </li>
                <li id="Dr">
                    <Link to={'*'}>
                    <FontAwesomeIcon className="i" icon={faRightFromBracket} /> Xidho
                    </Link>
                </li>
            </ul>
            </div>
        </div>
    )
}


export default Drop_nav