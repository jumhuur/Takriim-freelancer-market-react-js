import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./components/Footer";
import Holder from "./components/NavHolder";
import Qaybcontent from "./components/qayb/qaybcontent";
import QaybUbuc from "./components/qayb/qaybUbuc";
import Qaybdetailsskl from "./components/skaltons/Qaybubuxskl";

function Qaybdetails(){
    const {id} = useParams()
    const [Qaybdetails ,setQaybdetails] = useState()

    useEffect(function(){
        fetch(`http://localhost:800/Qayb/${id}`)
        .then((res) =>{
            if(res.ok){
                return res.json()
            }
        })
        .then((data) => {
            setQaybdetails(data)
        })

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