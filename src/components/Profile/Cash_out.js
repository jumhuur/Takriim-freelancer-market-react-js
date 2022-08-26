import  NavHolder from "../NavHolder";
import  Footer from "../Footer";
import AsideUser from "./Aside_Profile"
import {useEffect, useRef, useState } from "react"
import {faSackDollar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UseAuth } from "../context/authcontext";
import {getFirestore,getDoc, doc, updateDoc } from "firebase/firestore";
import { useHistory, useParams } from "react-router-dom";
import Jobskl from "../skaltons/Jobskalaton";
import Loading from "../loading";
function Lacag_La_bixid(){
    const {id} = useParams()
    const {Userinfo, Add_Rasiid, cashOut} = UseAuth()
    const [c_user, setc_user] = useState()
    const [x_labixid, setx_labixid] = useState(true)
    const Hadhaa_c_user = c_user &&  Number(c_user.r_Furan)
    const input_lacag = useRef()

    // loading
    const [load, setload] = useState(false)
    const loading_handale = () => {
        load ? setload(false) : setload(true)
        console.log(load)
    }

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

    const Hadhaa = () => {
        if(input_lacag.current.value > Number(Hadhaa_c_user)){
            setx_labixid(false)
        } else {
            setx_labixid(true)
        }

        console.log(x_labixid)
        console.log(Hadhaa_c_user)

    }


    useEffect(() => {
        get_user_cren()
    },[])



    return(
    <>
    <Loading loading={load}/>
    <div>
        <NavHolder />
        <section className="orders invocs">
        <div className="xajiye kala_qayb">
            <AsideUser />
            {/* <!---------------biloga foomka labixida -------------------> */}
            <div className="tranding_haye">
                <div className="rasiid_tamplate">
                    {c_user ?
                    <div className="rasiid">
                        <form onSubmit={submit_cashout}>
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
                            <input  ref={input_lacag} input onInput={Hadhaa} className="la_bax" type="lacag" required name="lacag" placeholder="Tusaale 20" value={Lacag} 
                            onChange={(e) => setLacag(e.target.value)}
                            />
                            {c_user && c_user.r_Furan > 0 ?
                            <>
                            {x_labixid ?
                            <>
                            <button onClick={loading_handale} className="la_bax" type="submit">< FontAwesomeIcon icon={faSackDollar}/>  Hada Dalbo {Lacag} $</button>
                            <p className="la_bax"><i className="fa-solid fa-bell"></i> Ogow Lacagta Kuu Furan  waa {c_user && c_user.r_Furan} $</p>
                            </>
                            :
                            <p className="la_bax out"><i className="fa-solid fa-bell"></i> Naga Raali Noqo Hadhaaga Kuu Furan Waa {c_user && c_user.r_Furan} $ </p>
                            }
                            </>
                            :
                            <>
                            <p className="la_bax out"><i className="fa-solid fa-bell"></i> Naga Raali Noqo Hadhaaga Kuu Furan Waa {c_user && c_user.r_Furan} $ </p>
                            </>
                            }

                        </form>
                    </div>
                    :
                    <Jobskl />
                    }
                </div>
            </div>
            {/* <!---------------dhamaadka  foomka labixida -------------------> */}
        </div>
    </section>
    <Footer />
    </div>
    </>
    )
}

export default Lacag_La_bixid