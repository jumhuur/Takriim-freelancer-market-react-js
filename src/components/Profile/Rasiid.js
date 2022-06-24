import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import { faWallet ,faChartLine ,faSackXmark} from "@fortawesome/free-solid-svg-icons";

function Rasiid({adeeg}){
    return(
        <div className="pro_rasiid">
        <div className="total">
            <h2>562.00$</h2>
            <p><FontAwesomeIcon className="i" icon={faChartLine} /> Totalkaaga</p>
        </div>
        <div className="pannding">
            <h2>70.56$</h2>
            <p><FontAwesomeIcon className="i" icon={faSackXmark} /> Lacagta Kaa Xidhan</p>
        </div>
        <div className="avalible">
            <h2>42.25$</h2>
            <p> <FontAwesomeIcon className="i" icon={faWallet} /> Lacagta kuu furan</p>
        </div>
    </div>
    )
}

export default Rasiid