import NavHolder  from './components/NavHolder';
import Asideuser from './components/Profile/Aside_Profile';
import AllDatUser from './components/Profile/UserData';
import Rasiid from './components/Profile/Rasiid';
import TiroKoob from './components/Profile/couters';
import  Footer  from "./components/Footer";
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Jobskl from './components/skaltons/Jobskalaton';
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faMoneyCheck, faPeopleGroup, faStar,faWallet ,faChartLine ,faSackXmark} from "@fortawesome/free-solid-svg-icons";
import {UseAuth} from "./components/context/authcontext"
import { collection, onSnapshot , query, getFirestore , where, limit, orderBy} from 'firebase/firestore';

function Profile(){
    const {id} = useParams()
    const [user , setuser] =useState(null)
    const [j_user , setj_user] =useState(null)
    const {setuser_data , crentuser , user_data} = UseAuth()
    const id_user = crentuser && crentuser.uid


    // get data user 
    const db = getFirestore()
    const colref = collection (db, "Users")
    const q = query(colref, where('uid', "==" , id_user))    
    //hellida docs 
    function getdaata_user(){
        onSnapshot (q, (snapshot) => {
            const Dhaq1aad = []
            snapshot.docs.forEach((doc) => {
                    Dhaq1aad.push({...doc.data(), id:doc.id})
            })
            setuser_data(Dhaq1aad)
        })
    }

        //get data user 
        const colref_jobs = collection(db, "Jobs")
        const jobsq = query(colref_jobs , where('UserId' , "==" ,id_user ),orderBy('CreatedAt', "desc"))    
        //hellida docs 
        async function get_jobs(){
            onSnapshot (jobsq, (snapshot) => {
                const Dhaq1aad = []
                snapshot.docs.forEach((doc) => {
                    Dhaq1aad.push({...doc.data(), id:doc.id})
                })
                setj_user(Dhaq1aad)
            })
        }
    useEffect(() =>{
        getdaata_user()
        get_jobs()
    },[crentuser])
    return(
        <div>
        <NavHolder />
        <AllDatUser/>
            <section className="orders invocs"> 
            <div className="xajiye kala_qayb">
                <Asideuser />
                <div className="tranding_haye">
                {user_data && user_data.map((data) =>
                <div className="pro_rasiid">
                <div className="total">
                    <h2>{data.r_Total} $</h2>
                    <p><FontAwesomeIcon className="i" icon={faChartLine} /> Totalkaaga</p>
                </div>
                <div className="pannding">
                    <h2>{data.r_Xidhan} $</h2>
                    <p><FontAwesomeIcon className="i" icon={faSackXmark} /> Lacagta Kaa Xidhan</p>
                </div>
                <div className="avalible">
                    <h2>{data.r_Furan} $</h2>
                    <p> <FontAwesomeIcon className="i" icon={faWallet} /> Lacagta kuu furan</p>
                </div>
                </div>
                )}
                <TiroKoob />
            {j_user?  j_user.filter((data => data.UserId == id)).map(listdata => (
             <div className="card_template" key={listdata.id}>
             <div className="imges">
                 <img src={listdata.image} alt="sawir_template" />
             </div>
             <div className="macluumaad">
                 <div className="qoraalo">
                     <Link to={`/jobs/${listdata.id}/User/${listdata.UserId}`}>
                         <h2>{listdata.title}</h2>
                         <p>{listdata.body.substr(1,170)}...</p>
                     </Link>
                 </div>
                 <div className="tirakoob">
                     <ul>
                         <li>
                             <FontAwesomeIcon className="i" icon={faPeopleGroup}/>  <span>{listdata.iibsade}</span> iibsade
                         </li>
                         <li>
                         <FontAwesomeIcon className="i" icon={faStar}/>  <span>{listdata.Qiimayn}</span>Qiimayn
                         </li>
                     </ul>
                     <div className="btn_shaqo">
                         <button><FontAwesomeIcon className="i" icon={faMoneyCheck}/>   Qiimaha: <span> {listdata.Qiimaha}$ </span> </button>
                     </div>
                 </div>
             </div>
            </div>
            )) : <Jobskl />}
                </div>
            </div>
    </section>    
        <Footer />
        </div>
    )
}

export default Profile