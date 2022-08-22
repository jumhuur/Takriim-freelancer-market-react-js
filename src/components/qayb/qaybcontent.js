import Aside from "../Aside";
import Empaty from "../empaty";
import Jobsskl from "../skaltons/Jobskalaton";
import { Link, useParams } from "react-router-dom";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faMoneyCheck, faPeopleGroup, faStar,} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { collection,getFirestore, query, onSnapshot, orderBy } from "firebase/firestore";

function Qaybcontent(){
    const {id} = useParams()
    const [jobqayb, setJobqayb] = useState(null)
    const main = useRef(null)
        //get data user 
        const db = getFirestore()
        const colref = collection(db, "Jobs")
        const q = query(colref, orderBy("CreatedAt"))    
        //hellida docs 
        async function  get_content(){
            onSnapshot (q, (snapshot) => {
                const Dhaq1aad = []
                snapshot.docs.forEach((doc) => {
                    Dhaq1aad.push({...doc.data(), id:doc.id})
                })
                setJobqayb(Dhaq1aad)
            })
        }
    useEffect(() => {
        get_content()
    }, [])
     
    return(
        <section className="sliding">
        <div className="xajiye kala_qayb">
            <Aside />
            {/* <!---------------biloga shaqooyinka -------------------> */}
            <div className="tranding_haye main" ref={main}>    
            {jobqayb ? jobqayb.filter((list => list.Qaybid == id)).map(listdata => (
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
            )) :<Jobsskl />}
            </div>
            {/* <!---------------dhamaadka shaqooyinka -------------------> */}
        </div>
        </section>
    )
}


export default Qaybcontent