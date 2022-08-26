import  NavHolder from "../NavHolder";
import  Footer from "../Footer";
import AsideUser from "./Aside_Profile"
import {useEffect, useState } from "react"
import {faSackDollar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UseAuth } from "../context/authcontext";
import {getFirestore,getDoc, doc, updateDoc } from "firebase/firestore";
import { useHistory, useParams } from "react-router-dom";
import Jobskl from "../skaltons/Jobskalaton";
import Empaty from "../empaty";
import Loading from "../loading";
function Furo(){
    const {id} = useParams()
    const {Userinfo, Add_Rasiid,crentuser ,Furasho} = UseAuth()
    const [c_user, setc_user] = useState()

    // state cashout
    const Lacag = c_user && c_user.r_Xidhan
    const Nooc = "@";
    const path = useHistory()
    const path2 = useHistory()

    // get order
    const db = getFirestore()
    // state rasiid

    if(Furasho && Furasho.Furasho === false){
        //path2.push(`/`)
    }
    const Furasho_submid = async (e) => {
        e.preventDefault()
        try{
            await Add_Rasiid (
                Lacag,
                id,
                Nooc,
            )

            update_rasiid()
            path.push(`/Acount/Rasiid`)


        } catch(err){
            console.log(err)
        }
    }

    const [load, setload] = useState(false)
    const loading_handale = () => {
        load ? setload(false) : setload(true)
        console.log(load)
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
        const Xidhan = parseFloat(c_user.r_Xidhan)   - parseFloat(Lacag) 
        const Furan = parseFloat(c_user.r_Furan)   + parseFloat(Lacag) 
        updateDoc(ordref, {
            r_Furan:Furan.toFixed(2),
            r_Xidhan:Xidhan.toFixed(2),
        })
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
                <>
                    {Furasho && Furasho.Furasho == true ?
                    <div className="rasiid">
                    <form onSubmit={Furasho_submid}>
                        <label htmlFor="lacag">Lacagta</label>
                        <input className="la_bax" type="lacag" required name="lacag" placeholder="Tusaale 20" value={Lacag}
                        readOnly
                        />
                        {c_user && c_user.r_Xidhan > 0 ?
                        <>
                        <button onClick={loading_handale} className="la_bax" type="submit">< FontAwesomeIcon icon={faSackDollar}/>  Hada Furo {Lacag} $</button>
                        <p className="la_bax"><i className="fa-solid fa-bell"></i> Ogow Lacagta Kuu Furan  waa {c_user && c_user.r_Xidhan} $</p>
                        </>
                        :
                        <>
                        <p className="la_bax out"><i className="fa-solid fa-bell"></i> Naga Raali Noqo Hadhaaga Kaa Xidhan Waa {Userinfo && Userinfo.r_Xidhan} $ </p>
                        </>
                        }

                    </form>
                    </div>
                    :
                    <>
                    <Empaty />                
                    </>
                    }
                </>
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

export default Furo