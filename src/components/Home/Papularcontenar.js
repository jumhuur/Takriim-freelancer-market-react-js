import Papular from "./Papular"
import SearchPar from "../searchpar"
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { collection,getFirestore, query, onSnapshot, limit, orderBy, getDocs} from "firebase/firestore";
import { useEffect } from "react";

function PapularContenar(){
    const [hellay,sethelly] = useState(null)
    //get data user 
    const db = getFirestore ()
    const colref = collection(db, "Users")
    const q = query(colref, limit(10), orderBy("Macmiil", "desc"))    
    //hellida docs 
    async function  getcolections(){
        // onSnapshot (q, (snapshot) => {
        //     const Dhaq1aad = []
        //     snapshot.docs.forEach((doc) => {
        //         Dhaq1aad.push({...doc.data(), id:doc.id})
        //     })
        //     sethelly(Dhaq1aad)
        // })

        getDocs(q)
        .then((snapshot) => {
            const Dhaq1aad = []
            snapshot.docs.forEach((doc) => {
                Dhaq1aad.push({...doc.data(), id:doc.id})
            })
            sethelly(Dhaq1aad)
        })
    }

    useEffect(() => {
        getcolections()
    },[])

    return(
        <div className="search">
            <div className="tobsellers">
                {hellay && hellay ?
                <div className="cover_images">
                    {hellay.map(data_top => (
                    <div className="image_user_top_seller" key={data_top.uid}>
                        <img src={data_top.Image ? data_top.Image: "/images/avatar.png"} alt="user_seller"  title={`${data_top.Name} : ${data_top.Macmiil} Iib`}/>
                    </div>
                    ))}
                </div>
                :
                <div className="cover_images" id="sklaton_top">
                    <div className="image_user_top_seller">
                        {/* <img src="/user.png" alt="user_seller"  title="top seller"/> */}
                    </div>
                    <div className="image_user_top_seller">
                        {/* <img src="/user.png" alt="user_seller"  title="top seller"/> */}
                    </div>
                    <div className="image_user_top_seller">
                        {/* <img src="/user.png" alt="user_seller"  title="top seller"/> */}
                    </div>
                    <div className="image_user_top_seller">
                        {/* <img src="/user.png" alt="user_seller"  title="top seller"/> */}
                    </div>
                    <div className="image_user_top_seller">
                        {/* <img src="/user.png" alt="user_seller"  title="top seller"/> */}
                    </div>
                    <div className="image_user_top_seller">
                        {/* <img src="/user.png" alt="user_seller"  title="top seller"/> */}
                    </div>
                    <div className="image_user_top_seller">
                        {/* <img src="/user.png" alt="user_seller"  title="top seller"/> */}
                    </div>
                    <div className="image_user_top_seller">
                        {/* <img src="/user.png" alt="user_seller"  title="top seller"/> */}
                    </div>
                    <div className="image_user_top_seller">
                        {/* <img src="/user.png" alt="user_seller"  title="top seller"/> */}
                    </div>
                    <div className="image_user_top_seller">
                        {/* <img src="/user.png" alt="user_seller"  title="top seller"/> */}
                    </div>
                </div>
            }
            </div>
            <Papular />
        </div>
    )
}


export default PapularContenar