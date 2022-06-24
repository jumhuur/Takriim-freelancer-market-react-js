import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import { faWallet ,faChartLine ,faSackXmark} from "@fortawesome/free-solid-svg-icons";

function Rasiid({user_r}){
    return(
        <div className="pro_rasiid">
        <div className="total">
            <h2>{user_r && user_r.m_total}$</h2>
            <p><FontAwesomeIcon className="i" icon={faChartLine} /> Totalkaaga</p>
        </div>
        <div className="pannding">
            <h2>{user_r && user_r.m_pandding}$</h2>
            <p><FontAwesomeIcon className="i" icon={faSackXmark} /> Lacagta Kaa Xidhan</p>
        </div>
        <div className="avalible">
            <h2>{user_r && user_r.m_avalible}$</h2>
            <p> <FontAwesomeIcon className="i" icon={faWallet} /> Lacagta kuu furan</p>
        </div>
    </div>
    )
}

export default Rasiid