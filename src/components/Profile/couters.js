import {faBriefcase ,faUserTie , faStar, faCircleDollarToSlot} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TiroKoob({adeeg,Macmiil,Qimayn}){
    return(
        <div className="pro_tirakoob">
        <div className="adeegyo tr">
            <div className="icon">
                <FontAwesomeIcon className="i" icon={faBriefcase} />
            </div>
            <div className="qoraal">
                <h2>{adeeg ? adeeg : "0"}</h2>
                <p>Shaqo</p>
            </div>
        </div>
        <div className="Macaamiil tr">
            <div className="icon">
                <FontAwesomeIcon className="i" icon={faCircleDollarToSlot} />
                
                
            </div>
            <div className="qoraal">
                <h2>{Macmiil ? Macmiil : 0}</h2>
                <p>Totalka Iibka</p>
            </div>
        </div>
        <div className="Qiimayn tr">
            <div className="icon">
               <FontAwesomeIcon className="i" icon={faStar} />
            </div>
            <div className="qoraal">
                <h2>{Qimayn ? Qimayn : 0}</h2>
                <p>Qiimayn</p>
            </div>
        </div>
    </div>
    )
}


export default TiroKoob