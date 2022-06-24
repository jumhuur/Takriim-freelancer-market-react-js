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
import {faMoneyCheck, faPeopleGroup, faStar,} from "@fortawesome/free-solid-svg-icons";

function Profile(){
    const {id} = useParams()
    const [user , setuser] =useState(null)
    const [j_user , setj_user] =useState(null)
    useEffect(() =>{
        fetch(`http://localhost:800/User/${id}`)
        .then((response) =>{
            
            let crime = response.json()
            fetch('http://localhost:800/Jobs')
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
        <div>
        <NavHolder />
        <AllDatUser data={user}/>
        <section className="orders invocs"> 
                <div className="xajiye kala_qayb">
                    <Asideuser />
                    <div className="tranding_haye">
                    <Rasiid user_r={user}/>
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
                             <p>{listdata.body}...</p>
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