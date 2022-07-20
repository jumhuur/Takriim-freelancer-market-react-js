import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import { faToolbox, faMoneyCheck, faPeopleGroup, faStar, faWallet ,faChartLine ,faSackXmark} from "@fortawesome/free-solid-svg-icons";
import  Footer  from "../Footer";
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Jobskl from '../skaltons/Jobskalaton';
import NavHolder  from '../NavHolder';
import Asideuser from '../Profile/Aside_Profile';
import AllDatUser from '../Profile/UserData';

function Rasiid({user_r}){
    const {id} = useParams()
    const [user , setuser] =useState(null)
    const [j_user , setj_user] =useState(null)
    useEffect(() =>{
        fetch(`http://localhost:800/User/${id}`)
        .then((response) =>{
            
            let crime = response.json()
            fetch('/jobs')
            .then((res) => {
                let db = res.json()
                return db
            })
            .then((data_db) =>{
                setj_user(data_db)
            })
            return crime
        })
        .then((data) => {
            setuser(data)
            
        })
    },[])


    return(
        <>
        <NavHolder />
        <section className="orders invocs"> 
            <div className="xajiye kala_qayb">
                <Asideuser />
                <div className="tranding_haye">
                <div className="pro_rasiid">
                <div className="total">
                    <h2>{user_r && user_r.m_total}$</h2>
                    <p><FontAwesomeIcon className="i" icon={faChartLine} /> Totalkaaga</p>
                </div>
                <div className="pannding">
                    <h2>{user_r && user_r.m_pandding}$</h2>
                    <p><FontAwesomeIcon className="i" icon={faSackXmark} /> Lacagta Kaa Xidhan</p>
                </div>
                <div className="avalible">
                    <h2>{user_r && user_r.m_avalible}$</h2>
                    <p> <FontAwesomeIcon className="i" icon={faWallet} /> Lacagta kuu furan</p>
                </div>
                </div>

                {/* lacag la bixid cadan */}
                <div className="pro_rasiid">
                <div className="total">
                    <h2><span>7845ED</span></h2>
                    <p><FontAwesomeIcon className="i" icon={faToolbox} /> Dalabka Id</p>
                </div>
                <div className="total">
                    <h2> + 42.75$</h2>
                    <p><FontAwesomeIcon className="i" icon={faChartLine} /> Lacagta Aad Heshay</p>
                </div>
                </div>

                {j_user?  j_user.filter((data => data.UserId == id)).map(listdata => (
                <div className="card_template" key={listdata._id}>
                <div className="imges">
                    <img src={listdata.image} alt="sawir_template" />
                </div>
                <div className="macluumaad">
                    <div className="qoraalo">
                        <Link to={`/jobs/${listdata._id}/User/${listdata.UserId}`}>
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
        </>
    )
}

export default Rasiid