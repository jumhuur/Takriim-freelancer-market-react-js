import { Link, useParams } from "react-router-dom"
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {useState , useEffect} from "react"
import SklQayb from ".//skaltons/qayboskl";
import {faBarsStaggered,faCirclePlay , faPenNib, faLanguage , faFilePen, faMicrophone , faBookReader , faCode , fangle, faArrowDown, faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { collection,getFirestore, query, onSnapshot, limit, orderBy } from "firebase/firestore";
function LinksQaybo({margin,qaybdtl}){
    const {id}  = useParams()
    const [Qayb, setQayb] = useState(null)
    //get data user 
    const db = getFirestore()
    const colref = collection(db, "Qaybo")
    const q = query(colref, limit(8), orderBy("CreatedAt"))    
    //hellida docs 
    async function  get_Home_qaybo(){
        onSnapshot (q, (snapshot) => {
            const Dhaq1aad = []
            snapshot.docs.forEach((doc) => {
                Dhaq1aad.push({...doc.data(), id:doc.id})
            })
            setQayb(Dhaq1aad)
        })
    }

    useEffect(() => {
        get_Home_qaybo()
    }, [])
    // useEffect((function(){
    //     fetch(`/qaybo`)
    //     .then((res) =>{
    //         if(res.ok){
    //             return res.json()
    //         }
    //     })
    //     .then((data) => {
    //         setQayb(data)
    //     })
    //     //setDataJobs(listdata)
    // }), [])
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