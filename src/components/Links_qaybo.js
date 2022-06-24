import { Link, useParams } from "react-router-dom"
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {useState , useEffect} from "react"
import SklQayb from ".//skaltons/qayboskl";
import {faBarsStaggered,faCirclePlay , faPenNib, faLanguage , faFilePen, faMicrophone , faBookReader , faCode , fangle, faArrowDown, faAngleDown} from "@fortawesome/free-solid-svg-icons";

function LinksQaybo({margin,qaybdtl}){
    const {id}  = useParams()
    const [Qayb, setQayb] = useState(null)
    useEffect((function(){
        fetch(`http://localhost:800/Qayb`)
        .then((res) =>{
            if(res.ok){
                return res.json()
            }
        })
        .then((data) => {
            setQayb(data)
        })
        //setDataJobs(listdata)
    }), [])
    return(
        <section className="links_noocyo">
            <div className="xajiye">
            <ul style={margin}>
                {Qayb ?  Qayb.map((Qaybo) =>(
                <li key={Qaybo.id}>
                    <Link to={`/Qayb/${Qaybo.id}`}>
                        <FontAwesomeIcon className='i' icon={faBarsStaggered} /> {Qaybo.Name}
                    </Link>
                </li>
                )): <SklQayb />}
                

            </ul>
        </div>
    
    </section>
    )
}


export default LinksQaybo