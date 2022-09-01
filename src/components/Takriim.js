import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShield, faStar} from "@fortawesome/free-solid-svg-icons";
function Takriim(){
    return (
        <div className="xayaysiis">
            <h2 id="Xayaysiis_title"><i className="fa-solid fa-lightbulb"></i></h2>
        <div className="xayaysiis">
            <div className="xa Takriim">
                <div className="contenet">
                    <h2>Damaanad 100%</h2>
                    <p className="icon_rating_damaanad">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </p>
                </div>
                <div className="icon_takriim">
                    <p>
                        <FontAwesomeIcon icon={faShield} />
                    </p>

                </div>
            </div>

        </div>
        </div>
        
    )
}


export default Takriim