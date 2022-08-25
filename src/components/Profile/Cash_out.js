import  NavHolder from "../NavHolder";
import  Footer from "../Footer";
import AsideUser from "./Aside_Profile"
import {useEffect, useState } from "react"
import {faSackDollar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UseAuth } from "../context/authcontext";
import {getFirestore,getDoc, doc, updateDoc } from "firebase/firestore";
import { useHistory, useParams } from "react-router-dom";
function Lacag_La_bixid(){
    const {id} = useParams()
    const {Userinfo, Add_Rasiid, cashOut} = UseAuth()
    const [c_user, setc_user] = useState()

    // state cashout
    const Name = Userinfo && Userinfo.Name
    const Lanbar =  Userinfo && Userinfo.Talefan
    const [Lacag,setLacag] = useState()
    const Nooc = "-";
    const path = useHistory()

    // get order
    const db = getFirestore()
    // state rasiid

    const submit_cashout = async (e) => {
        e.preventDefault()
        try{
            await cashOut(
                Name,
                Lanbar,
                Lacag,
            )

            await Add_Rasiid (
                Lacag,
                id,
                Nooc,
            )

            update_rasiid()
            path.push(`/Acount/Cashoutsax`)


        } catch(err){
            console.log(err)
        }
    }

    const Userref_r = doc(db, "Users" , id)
    //const q = query(colref)    
    function  get_user_cren(){
        getDoc(Userref_r)
        .then((doc) => {
            setc_user({...doc.data(), id:doc.id})
        })
    }

    function update_rasiid(){
        const ordref =  doc(db, "Users", id)
        const Furan = parseFloat(c_user.r_Furan)   - parseFloat(Lacag) 
        updateDoc(ordref, {
            r_Furan:Furan.toFixed(2),
        })
    }


    useEffect(() => {
        get_user_cren()
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
                        <form >
                            <label htmlFor="name">Magacaaga - Lama Badali Karro</label>
                            <input className="la_bax" type="text" name="Magaca_dalbadaha_lacagta" readOnly value={Userinfo && Userinfo.Name} />
                            <label htmlFor="qaab">Qaabka - shirkada</label>
                            <select className="la_bax">
                                <option value="zaad">zaad service</option>
                                <option value="edahab">edahab service</option>
                            </select>
                            <label htmlFor="tel">Lanbarka - Lama Badali Karro</label>
                            <input className="la_bax" type="tel" required maxLength={10} name="lanbar" placeholder="Tusale 0634xxxxx" value={Userinfo && Userinfo.Talefan}  readOnly/>
                            <label htmlFor="lacag">Lacagta</label>
                            <input className="la_bax" type="lacag" required name="lacag" placeholder="Tusaale 20" value={Lacag} 
                            onChange={(e) => setLacag(e.target.value)}
                            />
                            {Userinfo && Userinfo.r_Furan > 0 ?
                            <>
                            <button onClick={submit_cashout} className="la_bax" type="submit">< FontAwesomeIcon icon={faSackDollar}/>  Hada Dalbo {Lacag} $</button>
                            <p className="la_bax"><i className="fa-solid fa-bell"></i> Ogow Lacagta Kuu Furan  waa {Userinfo && Userinfo.r_Furan} $</p>
                            </>
                            :
                            <>
                            <p className="la_bax out"><i className="fa-solid fa-bell"></i> Naga Raali Noqo Hadhaaga Kuu Furan Waa {Userinfo && Userinfo.r_Furan} $ </p>
                            </>
                            }

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