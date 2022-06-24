import {faBriefcase ,faUserTie , faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TiroKoob(){
    return(
        <div className="pro_tirakoob">
        <div className="adeegyo tr">
            <div className="icon">
                <FontAwesomeIcon className="i" icon={faBriefcase} />
            </div>
            <div className="qoraal">
                <h2>02</h2>
                <p>Adeeg</p>
            </div>
        </div>
        <div className="Macaamiil tr">
            <div className="icon">
                <FontAwesomeIcon className="i" icon={faUserTie} />
            </div>
            <div className="qoraal">
                <h2>136</h2>
                <p>Macmiil</p>
            </div>
        </div>
        <div className="Qiimayn tr">
            <div className="icon">
               <FontAwesomeIcon className="i" icon={faStar} />
            </div>
            <div className="qoraal">
                <h2>548</h2>
                <p>Qiimayn</p>
            </div>
        </div>
    </div>
    )
}


export default TiroKoob