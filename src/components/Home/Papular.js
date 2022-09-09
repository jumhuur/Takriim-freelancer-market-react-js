import { Link } from "react-router-dom";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faCrown} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useState } from "react";
import { collection,getFirestore, query, onSnapshot, limit, orderBy, getDocs } from "firebase/firestore";

function Papular(){
    const [papular, setpapular] = useState(null)

    //get data user 
    const db = getFirestore()
    const colref = collection(db, "Qaybo")
    const q = query(colref, limit(3), orderBy("CreatedAt"))    
    //hellida docs 
    async function  get_papular(){
        // onSnapshot (q, (snapshot) => {
        //     const Dhaq1aad = []
        //     snapshot.docs.forEach((doc) => {
        //         Dhaq1aad.push({...doc.data(), id:doc.id})
        //     })
        //     setpapular(Dhaq1aad)
        // })


        getDocs(q)
        .then((snapshot) => {
            const Dhaq1aad = []
            snapshot.docs.forEach((doc) => {
                Dhaq1aad.push({...doc.data(), id:doc.id})
            })
            setpapular(Dhaq1aad)
        })
    }

    useEffect(() => {
        get_papular()
    }, [])
    return (
        <div className="papular">
                <ul>
                    <li className="title">
                        <FontAwesomeIcon className="i" icon={faCrown}/>
                        <p> Ugu Badan :</p>
                    </li>
                    {papular && papular.map((data) => (
                        <li className="papular_items" key={data.id}>
                            <Link to={`/Qayb/${data.id}`}>
                                {data.Name} (0)
                            </Link>
                        </li>
                    ))}
                </ul>
        </div>
)
}


export default Papular