import SklQayb from "../skaltons/qayboskl"
import {faBriefcase , faLocationDot ,faMedal} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UseAuth } from "../context/authcontext";



function AllDatUser(){
    const {user_data} = UseAuth()
    return(
        <section className="qayb_name">
        {user_data && 
        <div className="xajiye kala_qaybiye">
            <div className="qayb_name_page profile">
                <div className="prof sawir_user">
                    <div>
                        <img src={user_data.Image} />
                    </div>
                </div>
                <div className="prof macluumo_user">
                    <h2 className="name">{user_data.Name} 
                    {/* <img id="la_xaqiijiyay" src="/images/tawsiiq.svg" alt="tawqsiiq" title="Waa La Xaqiijiyay" /> <span className="coun_shaqo"></span> */}
                    </h2>
                    <p><FontAwesomeIcon icon={faBriefcase} /> {user_data.info} </p>
                    <ul>
                        <li>
                            <p>
                                <FontAwesomeIcon icon={faLocationDot} /> <span>{user_data.Magaalada}</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <FontAwesomeIcon icon={faMedal} /> Heerka <span>{user_data.Heerka}</span>aad
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sawir">
                <img src="/images/profile.svg" />
            </div>
        </div>
        }

        </section>
    )
}


export default AllDatUser