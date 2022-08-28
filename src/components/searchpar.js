import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faPeopleGroup, faStar,faUser} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function SearchPar({active,valeu_q,colectionJobs}){
    return(
        <>
        {active ? 
        <div className="searchbar">
            <div className="match">
            {colectionJobs && colectionJobs.filter((colref => colref.title.match(valeu_q))).map(data => ( 
            <>
             {data ?
            <Link to={`/jobs/${data.id}/User/${data.UserId}`}>
            <div className="shaqo_hellay" id="hellay_serch">
                <div className="ciwaan_hellay">
                <h2>{data.title}</h2>
                </div>
                <div className="inf_hellay">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faPeopleGroup} /> Iiibsade ({data.iibsade})
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faStar} /> Qiimayn ({data.Qiimayn})
                        </li>
                    </ul>
                </div>
            </div>
            </Link>
            :
            <div className="match">
            <div className="not_foun_image">
                <img src="images/empty.svg" alt="not" />
                <p className="not_foud">Lama Helli Waxba ! </p>
            </div>
            </div>
            }
            </>   
            ))}
            </div>
        </div>
        :<></>
        }
        </>
    )
}

export default SearchPar