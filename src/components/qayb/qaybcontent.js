import Aside from "../Aside";
import Empaty from "../empaty";
import Jobsskl from "../skaltons/Jobskalaton";
import { Link, useParams } from "react-router-dom";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faMoneyCheck, faPeopleGroup, faStar,} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

function Qaybcontent(){
    const {id} = useParams()
    const [jobqayb, setJobqayb] = useState(null)
    const main = useRef(null)
    useEffect(() => {
        fetch('http://localhost:800/Jobs')
        .then((res) =>{
            if(res.ok){
                return res.json()
            }
        })
        .then((data) => {
            setJobqayb(data)
        })
    }, [])
    // setTimeout(() =>{
    //     function Madhan(){
    //         if(main.current.childNodes.length === 0){
    //             console.log('Madan')
    //             main.current.innerHTML =  `
    //             <div className="Madhan">
    //                 <img id="empty_side" src="/images/empty.svg" />
    //                 <p>Qaybtan shaqo kuma jirto</p>
    //             </div>;
    //             `
    //         } else{
    //             main.current.innerHTML =  ``
    //         }
    //     }
    //     Madhan()
    // },2000)
     
    return(
        <section className="sliding">
        <div className="xajiye kala_qayb">
            <Aside />
            {/* <!---------------biloga shaqooyinka -------------------> */}
            <div className="tranding_haye main" ref={main}>    
            {jobqayb ? jobqayb.filter((list => list.Qaybid == id)).map(listdata => (
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
            )) : <Jobsskl />}
            </div>
            {/* <!---------------dhamaadka shaqooyinka -------------------> */}
        </div>
        </section>
    )
}


export default Qaybcontent