import { Link } from "react-router-dom";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faCarSide, faIdCard, faMoneyCheck, faPeopleGroup, faStar,} from "@fortawesome/free-solid-svg-icons";
function Jobs({Jobsset}){
    return(
        <div className="tranding_haye main">
            {Jobsset && Jobsset.map(listdata => (
                 <div className="card_template" key={listdata.id}>
                {listdata.image == "/images/asalahaan.png"  ?
                <div className="imges">
                <video controls>
                <source src={listdata.Video} type="video/mp4"></source>
                </video>
                </div>
                : 
                <div className="imges">
                <img src={listdata.image ? listdata.image : "/images/asalahaan.png"} alt="sawir_template" />
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
            ))}
        </div>
    )
};



export default Jobs