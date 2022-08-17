import  NavHolder from "../NavHolder";
import  Footer from "../Footer";
import AsideUser from "./Aside_Profile"
import {useEffect, useState } from "react"
import {faSackDollar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UseAuth } from "../context/authcontext";
function Lacag_La_bixid(){
    const {Userinfo} = UseAuth()
    return(
    <div>
        <NavHolder />
        <section className="orders invocs">
        <div className="xajiye kala_qayb">
            <AsideUser />
            {/* <!---------------biloga foomka labixida -------------------> */}
            <div className="tranding_haye">
                <div className="rasiid_tamplate">
                    <div className="rasiid">
                        <form method="GET" action="">
                            <label htmlFor="name">Magacaaga - Lama Badali Karro</label>
                            <input className="la_bax" type="text" name="Magaca_dalbadaha_lacagta" readOnly value={Userinfo && Userinfo.Name} />
                            <label htmlFor="qaab">Qaabka - shirkada</label>
                            <select className="la_bax">
                                <option value="zaad">zaad service</option>
                                <option value="edahab">edahab service</option>
                            </select>
                            <label htmlFor="tel">Lanbarka - Lama Badali Karro</label>
                            <input className="la_bax" type="tel" required maxLength={10} name="lanbar" placeholder="Tusale 0634xxxxx" value={Userinfo && Userinfo.Name} />
                            <label htmlFor="lacag">Lacagta</label>
                            <input className="la_bax" type="lacag" required name="lacag" placeholder="Tusaale 20" value={Userinfo && Userinfo.r_Furan} />
                            <button className="la_bax" type="submit">< FontAwesomeIcon icon={faSackDollar}/>  Hada Dalbo</button>
                            <p className="la_bax"><i className="fa-solid fa-bell"></i> Ogow Lacagta Kuu Furan  waa {Userinfo && Userinfo.r_Furan} $</p>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!---------------dhamaadka  foomka labixida -------------------> */}
        </div>
    </section>
    <Footer />
    </div>
    )
}

export default Lacag_La_bixid