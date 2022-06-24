import { Link } from "react-router-dom";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faCrown} from "@fortawesome/free-solid-svg-icons";

function Papular(){
    return (
        <div className="papular">
                <ul>
                    <li className="title">
                        <FontAwesomeIcon className="i" icon={faCrown}/>
                        <p> Ugu Badan :</p>
                    </li>
                    <li className="papular_items">
                        <Link to='/404'>
                            Nashqadayn (125)
                        </Link>
                    </li>
                    <li className="papular_items">
                        <a href="/qayb.html">
                            cod (89)
                        </a>
                    </li>
                    <li className="papular_items">
                        <a href="/qayb.html">
                            tifatir (73)
                        </a>
                    </li>
                </ul>
        </div>
)
}


export default Papular