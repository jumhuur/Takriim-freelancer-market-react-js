import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./components/Footer";
import Holder from "./components/NavHolder";
import Qaybcontent from "./components/qayb/qaybcontent";
import QaybUbuc from "./components/qayb/qaybUbuc";
import Qaybdetailsskl from "./components/skaltons/Qaybubuxskl";
import {getFirestore,getDoc, doc } from "firebase/firestore";
function Qaybdetails(){
    const {id} = useParams()
    const [Qaybdetails ,setQaybdetails] = useState()

    // get data job 
    const db = getFirestore()
    const docref = doc(db, "Qaybo" , id)
    //const q = query(colref)    
    function  get_qaybo(){
        console.log("ss")
        getDoc(docref)
        .then((doc) => {
            setQaybdetails({...doc.data(), id:doc.id})
        })
    }
    useEffect(function(){
        get_qaybo()
    } ,[])
    return(
        <div>
            <Holder/>
            {Qaybdetails? <QaybUbuc data={Qaybdetails}/>: <Qaybdetailsskl />}
            <Qaybcontent />
            <Footer />
        </div>
        
    )
}


export default Qaybdetails