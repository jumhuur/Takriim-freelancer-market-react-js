import SklQayb from "../skaltons/qayboskl"
import {faBriefcase , faLocationDot ,faMedal} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function AllDatUser({data}){
    return(
        <section className="qayb_name">
        {data ? <div className="xajiye kala_qaybiye">
            <div className="qayb_name_page profile">
                <div className="prof sawir_user">
                    <div>
                        <img src={data.image} />
                    </div>
                </div>
                <div className="prof macluumo_user">
                    <h2 className="name">{data.Name}   <img id="la_xaqiijiyay" src="/images/tawsiiq.svg" alt="tawqsiiq" title="Waa La Xaqiijiyay" /> <span className="coun_shaqo"></span></h2>
                    <p><FontAwesomeIcon icon={faBriefcase} /> {data.Job} </p>
                    <ul>
                        <li>
                            <p>
                                <FontAwesomeIcon icon={faLocationDot} /> <span>Hargaisa</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <FontAwesomeIcon icon={faMedal} /> Heerka <span>1</span>aad
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sawir">
                <img src="/images/profile.svg" />
            </div>
        </div> : <SklQayb />}
        </section>
    )
}


export default AllDatUser