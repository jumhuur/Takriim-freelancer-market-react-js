import Papular from "./Papular"
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

function Search(){
    return(
        <div className="search">
            <form>
                <input type="search" required placeholder="Raadi Tusaale 'Logo Desin' .." name="sawir_name" />
                <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
            <Papular />
        </div>
    )
}


export default Search