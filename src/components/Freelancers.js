import Aside from "./Aside";
import Holder from "./NavHolder";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faCircleCheck, faCartShopping , faChartPie, faSackDollar} from "@fortawesome/free-solid-svg-icons";
import { collection, getDocs, getFirestore,orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
function Freelancers(){
    const [freelancers, setfreelancers] = useState (null)
    //get data user 
    const db = getFirestore()
    const colref = collection(db, "Users")
    const q = query(colref, where("Nooc", "==" ,"frelancer"))    
    //hellida docs 
    async function  getdaata_user(){
        getDocs(q)
        .then((snapshot) => {
            const Dhaq1aad = []
            snapshot.docs.forEach((doc) => {
                Dhaq1aad.push({...doc.data(), id:doc.id})
            })
            setfreelancers(Dhaq1aad)
        })
    }


    useEffect((function(){
        getdaata_user()
    }), [])
    return(
        <>
        <Holder />
        <section className="sliding">
        <div className="xajiye kala_qayb">
            <Aside />
            {/* <!---------------biloga shaqooyinka -------------------> */}
            <div className="tranding_haye main">
                <div className="freelancers">
                    {freelancers && freelancers.map(data => (
                    <div className="cards_freelancers" key={data.uid}>
                    <div className="lines_freelancer">
        
                    </div>
                    <div className="Image_box">
                        <img alt="free_sawir" src={data.Image} />
                    </div>
                    <div className="info_cards">
                            <h2>{data.Name}</h2>
                            <p>{data.info}</p>
                    </div>
                    <div className="data_cards">
                            <div className="data_in">
                                <h2><FontAwesomeIcon icon={faSackDollar}/> Total</h2>
                                <p>{data.r_Total} $</p>
                            </div>
                            <div className="data_in">
                            <h2><FontAwesomeIcon icon={faChartPie}/> Iibka</h2>
                                <p>{data.Macmiil} </p>
                            </div>
                    </div> 
                </div>
                ))}


                </div>
            </div>
            {/* <!---------------dhamaadka shaqooyinka -------------------> */}
        </div>
        </section>
        </>
    )
}


export default Freelancers