import { Link } from "react-router-dom";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faCarSide, faIdCard, faMoneyCheck, faPeopleGroup, faSdCard, faStar,} from "@fortawesome/free-solid-svg-icons";
function Jobs({Jobsset}){
    return(
        <div className="tranding_haye main">
            {Jobsset.map(listdata => (
                 <div className="card_template" key={listdata._id}>
                 <div className="imges">
                     <img src={listdata.image} alt="sawir_template" />
                 </div>
                 <div className="macluumaad">
                     <div className="qoraalo">
                         <Link to={`/jobs/${listdata._id}/User/${listdata.UserId}`}>
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
            ))}
        </div>
    )
};



export default Jobs