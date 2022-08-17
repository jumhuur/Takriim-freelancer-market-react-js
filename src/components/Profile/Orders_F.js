import Holder from "../NavHolder";
import AsideUser from "./Aside_Profile";
import Footer from "../Footer";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faGears,faClockRotateLeft ,faCreditCard ,faClock, faCircleCheck ,faCircleXmark, faRotate} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Jobskl from "../skaltons/Jobskalaton";
import {format} from "timeago.js";
import {UseAuth} from "../context/authcontext"
import { collection,getFirestore, query, onSnapshot, limit, orderBy } from "firebase/firestore";
function Orders_Free(){
    const [order, setorder] = useState(null)
    const {crentuser} = UseAuth()

    //get data ordrer frelancer 
    const db = getFirestore()
    const colref = collection(db, "Orders")
    const q = query(colref, orderBy('CreatedAt' , "asc"))    
    //hellida docs 
    async function  getdaata_order(){
        onSnapshot (q, (snapshot) => {
            const Dhaq1aad = []
            snapshot.docs.forEach((doc) => {
                Dhaq1aad.push({...doc.data(), id:doc.id})
            })
            setorder(Dhaq1aad)
        })
    }

    useEffect((function(){
        getdaata_order()

    }), [order])
    return(
        <div>
            <Holder />
            <section className="orders invocs">
                <div className="xajiye kala_qayb">
                    <AsideUser />
            {/* <!---------------biloga shaqooyinka -------------------> */}
            <div className="tranding_haye">
                {order && crentuser ? order.filter((ord => ord.UserId ==  crentuser.uid)).map(dat_order => (
                <div className="card_template" key={dat_order._id}>
                <div className="imges">
                    <img src="/images/Order_free.svg" alt="sawir_template" />
                </div>
                <div className="macluumaad">
                    <div className="qoraalo">
                        <Link to={`/Acount/Myorder/info/${dat_order.id}`}>
                            <h2>{dat_order.title}</h2>
                            <p>
                                Dalabkan waxa uu kaaga yimid mid ka mida macaamiisha shabakada 
                                waxaana uu la socdaa xalaada dalabkan fadlan si aad shaqadaada horu mar uga 
                                gaadho shabakada aad sumcadeeda kor uqaado ugu adeeg degdesiimo ...
                            </p>
                        </Link>
                    </div>
                    <div className="tirakoob">
                        <ul>
                            {dat_order.xaalad == 0 ? 
                                <li>
                                <span> <FontAwesomeIcon className="i sugaya" icon={faGears} /> </span>
                                Lama Aqbalin 
                                </li>
                            :dat_order.xaalad == 1 ?  
                                <li>
                                <span> <FontAwesomeIcon className="i socda" icon={faClockRotateLeft} /> </span>
                                socdaa 
                                </li>
                            : dat_order.xaalad == 2 ? 
                            <li>
                            <span> <FontAwesomeIcon className="i dhamaday" icon={faRotate} /> </span>
                            La Diyaarinaya
                            </li>
                            :dat_order.xaalad == "Done" ? 
                            <li>
                            <span> <FontAwesomeIcon className="i dhamaday" icon={faCircleCheck} /> </span>
                            Dhamaaday
                            </li>
                            :
                                <li>
                                <span> <FontAwesomeIcon className="i laabtay" icon={faCircleXmark} /> </span>
                                Laga Laabtay 
                                </li>
                            }
                            <li>
                            <FontAwesomeIcon className="i" icon={faClock} /> <span>{ format(dat_order.CreatedAt , "zh-CN")} </span>
                            </li>
                        </ul>
                        <div className="btn_shaqo">
                            <button><FontAwesomeIcon className="i" icon={faCreditCard} />   Qiimaha:   <span> {dat_order.Qiimaha} </span> </button>
                        </div>
                    </div>
                </div>
                </div>
                )): <Jobskl />}
            </div>
                </div>
                    {/* <!---------------dhamaadka shaqooyinka -------------------> */}
            </section>
            <Footer />
    </div>
    )
}

export default Orders_Free