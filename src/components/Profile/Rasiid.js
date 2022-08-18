import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import { faToolbox, faMoneyCheck, faPeopleGroup, faStar, faWallet ,faChartLine ,faSackXmark} from "@fortawesome/free-solid-svg-icons";
import  Footer  from "../Footer";
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Jobskl from '../skaltons/Jobskalaton';
import NavHolder  from '../NavHolder';
import Asideuser from '../Profile/Aside_Profile';
import AllDatUser from '../Profile/UserData';
import { UseAuth } from "../context/authcontext";
import { collection,getFirestore, query, onSnapshot, limit, orderBy, where } from "firebase/firestore";
function Rasiid(){
    const [dh_rasiid, setdh_rasiid] = useState()
    const {Userinfo} = UseAuth()
    const u_id = Userinfo && Userinfo.uid

    //get data ordrer frelancer 
    const db = getFirestore()
    const colref = collection(db, "Rasiid")
    const q = query(colref,orderBy('CreatedAt',"desc"),where("g_id" , "==", u_id))    
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
    },[dh_rasiid])
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
                    <div className="pro_rasiid hellay">
                    <div className="total">
                        <h2><span>{rasiid_tr.id.substr(6,6).toUpperCase()}</span></h2>
                        <p><FontAwesomeIcon className="i" icon={faToolbox} /> Dalabka Id</p>
                    </div>
                    <div className="avalible">
                        <h2> + {rasiid_tr && rasiid_tr.Qiimaha}$</h2>
                        <p><FontAwesomeIcon className="i" icon={faChartLine} /> Lacagta Aad Heshay</p>
                    </div>
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