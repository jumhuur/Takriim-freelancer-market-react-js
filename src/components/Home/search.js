import Papular from "./Papular"
import SearchPar from "../searchpar"
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { collection,getFirestore, query, onSnapshot, where,  limit, orderBy } from "firebase/firestore";

function Search(){
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
        console.log(myquary)
    }

    return(
        <div className="search">
            <form>
                <input onChange={(e) => setquery(e.target.value.toLowerCase())} onKeyUp={onparessHandale} type="search" required placeholder="Raadi Tusaale 'Logo Desin' .." name="sawir_name" />
                <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
            <Papular />
            <SearchPar active={serchAc} colectionJobs={hellay && hellay} valeu_q={myquary && myquary}/>
        </div>
    )
}


export default Search