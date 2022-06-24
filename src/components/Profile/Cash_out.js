import  NavHolder from "../NavHolder";
import  Footer from "../Footer";
import AsideUser from "./Aside_Profile"
import {useEffect, useState } from "react"
import {faSackDollar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Lacag_La_bixid(){
    const [info , setinfo] = useState(null)

    useEffect(() =>{
        async function data(){
            await fetch("http://localhost:800/User/1")
            .then((response) =>{
                if(response.ok){
                    const data = response.json()
                    return data
                }
            })
            .then((my_data) =>{
                setinfo(my_data)
                console.log(info)
            })
        }
        data()
    },[])
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
                            <input className="la_bax" type="text" name="Magaca_dalbadaha_lacagta" readOnly value={info && info.Name} />
                            <label htmlFor="qaab">Qaabka - shirkada</label>
                            <select className="la_bax">
                                <option value="zaad">zaad service</option>
                                <option value="edahab">edahab service</option>
                            </select>
                            <label htmlFor="tel">Lanbarka - Lama Badali Karro</label>
                            <input className="la_bax" type="tel" required maxLength={10} name="lanbar" placeholder="Tusale 0634xxxxx" value={info && info.phone} />
                            <label htmlFor="lacag">Lacagta</label>
                            <input className="la_bax" type="lacag" required name="lacag" placeholder="Tusaale 20" value={info && info.m_avalible} />
                            <button className="la_bax" type="submit">< FontAwesomeIcon icon={faSackDollar}/>  Hada Dalbo</button>
                            <p className="la_bax"><i className="fa-solid fa-bell"></i> Ogow Lacagta Kuu Furan  waa {info && info.m_avalible} $</p>
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