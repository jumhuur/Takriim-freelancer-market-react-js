import SearchPar from "./searchpar"
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { collection,getFirestore, query, onSnapshot} from "firebase/firestore";
function Search({active, setactive}){
    const [serchAc, setserchAc] = useState(false)
    const [hellay,sethelly] = useState(null)
    const [myquary, setquery] = useState('')
    //get data user 
    const db = getFirestore ()
    const colref = collection(db, "Jobs")
    const q = query(colref)    
    //hellida docs 
    async function  getcolections(){
        onSnapshot (q, (snapshot) => {
            const Dhaq1aad = []
            snapshot.docs.forEach((doc) => {
                Dhaq1aad.push({...doc.data(), id:doc.id})
            })
            sethelly(Dhaq1aad)
        })
    }


    const onparessHandale = () => {
        setserchAc(true)
        getcolections()
    }

    const handalesetsearch =() => {
        active ? setactive(false) : setactive(true)
    }

    return(
        <>
        {active ?
            <div className="search top_search">
            <form>
                <input onChange={(e) => setquery(e.target.value.toLowerCase())} onKeyUp={onparessHandale} type="search" required placeholder="Raadi Tusaale 'Nashqadayn Logo' .." name="sawir_name" autoComplete="off" spellCheck="false" />
                <button onClick={handalesetsearch} type="submit"><FontAwesomeIcon icon={faCircleXmark} /></button>
            </form>
            <SearchPar active={serchAc} colectionJobs={hellay && hellay} valeu_q={myquary && myquary}/>
        </div>
        : <></>
        }
        </>
    )
}


export default Search