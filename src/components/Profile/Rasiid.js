import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import { faToolbox, faCircleDollarToSlot, faWallet ,faChartLine ,faSackXmark, faFileInvoice} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import Jobskl from '../skaltons/Jobskalaton';
import NavHolder  from '../NavHolder';
import Asideuser from '../Profile/Aside_Profile';
import { UseAuth } from "../context/authcontext";
import { collection,getFirestore, query, onSnapshot, limit, orderBy, where } from "firebase/firestore";
import {format} from "timeago.js";
//import { format } from "date-fns";
function Rasiid(){
    const [dh_rasiid, setdh_rasiid] = useState()
    const {Userinfo} = UseAuth()
    const u_id = Userinfo && Userinfo.uid
    //get data ordrer frelancer 
    const db = getFirestore()
    const colref = collection(db, "Rasiid")
    const q = query(colref,orderBy('CreatedAt',"desc"),where("g_id" , "==", u_id),limit(50))    
    //hellida docs 
    function get_dhaqaaq_rasiid(){
        onSnapshot (q, (snapshot) => {
            const Dhaq1aad = []
            snapshot.docs.forEach((doc) => {
                Dhaq1aad.push({...doc.data(), id:doc.id})
            })
            setdh_rasiid(Dhaq1aad)
        })
    }
    

    useEffect(() =>{
        get_dhaqaaq_rasiid()
    },[dh_rasiid,Userinfo])
    return(
        <>
        <NavHolder />
        <section className="orders invocs"> 
            <div className="xajiye kala_qayb">
                <Asideuser />
                {Userinfo ? 
                <div className="tranding_haye">
                    {Userinfo && 
                    <div className="pro_rasiid">
                    <div className="total">
                        <h2>{Userinfo.r_Total} $</h2>
                        <p><FontAwesomeIcon className="i" icon={faChartLine} /> Totalkaaga</p>
                    </div>
                    <div className="pannding">
                        <h2>{Userinfo.r_Xidhan} $</h2>
                        <p><FontAwesomeIcon className="i" icon={faSackXmark} /> Lacagta Kaa Xidhan</p>
                    </div>
                    <div className="avalible">
                        <h2>{Userinfo.r_Furan} $</h2>
                        <p> <FontAwesomeIcon className="i" icon={faWallet} /> Lacagta kuu furan</p>
                    </div>
                    </div>
                    }
                    {/* lacag la bixid cadan */}
                    {dh_rasiid && dh_rasiid.map((rasiid_tr) => 
                    <div className="pro_rasiid" id="hellay">
                    <div className="Taarikh_rasiid">
                        <p>{format(rasiid_tr.Date)}</p>

                    </div> 

                    {rasiid_tr.Nooc == "-" ?
                     <>
                    <div className="total" id="total">
                        <h2><span>{rasiid_tr.id.substr(6,6).toUpperCase()}</span></h2>
                        <p><FontAwesomeIcon className="i" icon={faFileInvoice} /> Rasiid Id</p>
                    </div>
                    <div className="avalible" id="avalible">
                    <h2 className="out"> - {rasiid_tr && rasiid_tr.Qiimaha} $</h2>
                    <p className="out"><FontAwesomeIcon className="i" icon={faSackXmark} /> Lacagta Aad La Baxday</p>
                    </div>
                    </>
                    :rasiid_tr.Nooc == "@" ?
                    <>
                    <div className="total" id="total">
                    <h2><span>{rasiid_tr.id.substr(6,6).toUpperCase()}</span></h2>
                    <p><FontAwesomeIcon className="i" icon={faCircleDollarToSlot} /> Furasho Id</p>
                    </div>
                    <div className="avalible" id="avalible">
                    <h2 className="out_in"> {rasiid_tr && rasiid_tr.Qiimaha} $</h2>
                    <p className="out_in"><FontAwesomeIcon className="i" icon={faSackXmark} /> Lacagataad Furatay</p>
                    </div>
                    </>
                    :
                    <>
                    <div className="total" id="total">
                    <h2><span>{rasiid_tr.id.substr(6,6).toUpperCase()}</span></h2>
                    <p><FontAwesomeIcon className="i" icon={faToolbox} /> Dalab Id</p>
                    </div>
                    <div className="avalible" id="avalible">
                    <h2> + {rasiid_tr &&  Number(rasiid_tr.Qiimaha).toFixed(2)} $</h2>
                    <p><FontAwesomeIcon className="i" icon={faChartLine} /> Lacagta Aad Heshay</p>
                    </div>
                    </>
                    }
                    </div>
                    )}

                </div>
                : <Jobskl />}
            </div>
        </section>
        </>
    )
}

export default Rasiid