import NavHolder  from './components/NavHolder';
import Asideuser from './components/Profile/Aside_Profile';
import AllDatUser from './components/Profile/UserData';
import Rasiid from './components/Profile/Rasiid';
import TiroKoob from './components/Profile/couters';
import  Footer  from "./components/Footer";
import CompProfile from './components/Profile/Comp_profile';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Jobskl from './components/skaltons/Jobskalaton';
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faMoneyCheck, faPeopleGroup, faStar,faWallet ,faChartLine ,faSackXmark} from "@fortawesome/free-solid-svg-icons";
import {UseAuth} from "./components/context/authcontext"
import { collection, onSnapshot , query, getFirestore , where, limit, orderBy, getDoc, doc} from 'firebase/firestore';

function Profile(){
    const {id} = useParams()
    const [j_user , setj_user] =useState(null)
    const [j_cus , setj_cus] =useState(null)
    const [adeeg, setadeeg] = useState('');
    const {setuser_data , crentuser , user_data} = UseAuth()
    const id_user = crentuser && crentuser.uid
    const path_kale = useHistory()
    if(!crentuser){
        path_kale.push("/")
    }


    // get data user 
    const db = getFirestore()
    //const colref = collection (db, "Users")
    //const q = query(colref, where('uid', "==" , id_user))    
    //hellida docs 
    const docref = doc(db, "Users" , id)  
    function  getdaata_user(){
        getDoc (docref)
        .then((doc) => {
            setuser_data({...doc.data(), id:doc.id})
        })
    }


    // calculate reting 
    // const [rate5, setrate5] = useState()
    // const [rate4, setrate4] = useState()
    // const [rate3, setrate3] = useState()
    // const [rate2, setrate2] = useState()
    // const [rate1, setrate1] = useState()

    // const r_5col = collection(db, "Comments")
    // const r_5_q = query(r_5col, orderBy('CreatedAt', "desc"), where("UserId" , "==" ,id ))    
    // //hellida docs 
    // async function  get_rate(){
    //     onSnapshot (r_5_q, (snapshot) => {
    //         const Dhaq1aad = []
    //         snapshot.docs.forEach((doc) => {
    //             Dhaq1aad.push({...doc.data(), id:doc.id})
    //         })
    //         setrate5(Dhaq1aad.length)
            
    //     })
    // }





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
                setadeeg(Dhaq1aad.length)
                setj_user(Dhaq1aad)
            })
        }

        const jobs_cus = query(colref_jobs,orderBy('CreatedAt', "desc"))    
        //hellida docs 
        async function get_cus(){
            onSnapshot (jobs_cus, (snapshot) => {
                const Dhaq1aad = []
                snapshot.docs.forEach((doc) => {
                    Dhaq1aad.push({...doc.data(), id:doc.id})
                })
                setj_cus(Dhaq1aad)
            })
        }
    useEffect(() =>{
        getdaata_user()
        get_jobs()
        get_cus()
        //get_rate()
    },[])
    return(
        <div>
        <CompProfile data={user_data}/>
        <NavHolder />
        <AllDatUser/>
        {

        }
            <section className="orders invocs"> 
            <div className="xajiye kala_qayb">
                <Asideuser />
                <div className="tranding_haye">
                {user_data &&
                <>
                {user_data.Nooc === "frelancer" ?
                <>
                <div className="pro_rasiid">
                <div className="total">
                    <h2>{user_data.r_Total} $</h2>
                    <p><FontAwesomeIcon className="i" icon={faChartLine} /> Totalkaaga</p>
                </div>
                <div className="pannding">
                    <h2>{user_data.r_Xidhan} $</h2>
                    <p><FontAwesomeIcon className="i" icon={faSackXmark} /> Lacagta Kaa Xidhan</p>
                </div>
                <div className="avalible">
                    <h2>{user_data.r_Furan} $</h2>
                    <p> <FontAwesomeIcon className="i" icon={faWallet} /> Lacagta kuu furan</p>
                </div>
                </div>
                <TiroKoob adeeg={adeeg} Macmiil={user_data.Macmiil}Qimayn={user_data.Qiimayn_user}/>
                {j_user?  j_user.filter((data => data.UserId == id)).map(listdata => (
                <div className="card_template" key={listdata.id}>
                    {listdata.image == "/images/asalahaan.png"  ?
                    <div className="imges">
                    <video controls>
                    <source src={listdata.Video} type="video/mp4"></source>
                    </video>
                    </div>
                    :
                    <div className="imges">
                        <img src={listdata.image} alt="sawir_template" />
                    </div>
                    }

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
                </>
                :
                <>
                {j_cus?  j_cus.map(listdata => (
                    <div className="card_template" key={listdata.id}>
                    {listdata.image == "/images/asalahaan.png"  ?
                    <video controls>
                    <source src={listdata.Video} type="video/mp4"></source>
                    </video>
                    :
                    <div className="imges">
                        <img src={listdata.image} alt="sawir_template" />
                    </div>
                    }

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
                </>
                }
                </>
                }
                

                </div>
            </div>
    </section>    
        <Footer />
        </div>
    )
}

export default Profile