import Aside from "../Aside";
import Holder from "../NavHolder";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faGears,faClockRotateLeft ,faCreditCard ,faClock, faCircleCheck ,faCircleXmark , faRotate} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Jobskl from "../skaltons/Jobskalaton";
import {format} from "timeago.js";
import {UseAuth} from "../context/authcontext"
import { collection,getFirestore, query, onSnapshot, limit, orderBy } from "firebase/firestore";
function OrderUsers(){
    const [order, setorder] = useState(null)
    const {crentuser } = UseAuth()

    //get data ordrer frelancer 
    const db = getFirestore()
    const colref = collection(db, "Orders")
    const q = query(colref,  orderBy('CreatedAt',"desc"))    
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
        <section className="orders">
        <div className="xajiye kala_qayb">
        <Aside />
            {/* <!---------------biloga shaqooyinka -------------------> */}
            <div className="tranding_haye">
                {order && crentuser  ? order.filter((or => or.Dalbade_id ==  crentuser.uid )).map(dat_order => (
                <div className="card_template" key={dat_order._id}>
                <div className="imges">
                    {dat_order.xaalad == "0" ? 
                    <img src="/images/o_u0.svg" alt="sawir_template" />
                    :dat_order.xaalad == "1" ?  
                    <img src="/images/o_u1.svg" alt="sawir_template" />
                    :dat_order.xaalad == "2" || dat_order.xaalad == "Done"? 
                    <img src="/images/o_u2.svg" alt="sawir_template" />
                    :
                    <img src="/images/o_u.svg" alt="sawir_template" />
                    }
                </div>
                <div className="macluumaad">
                    <div className="qoraalo">
                        <Link onClick={function(){
                            localStorage.setItem('I_qayb', dat_order.Qaybid)
                        }}  to={`/Acount/order/Info/${dat_order.id}/${dat_order.UserId}/${dat_order.Jobid}`} >
                            <h2>{dat_order.title}</h2>
                            <p>
                            Dalabkaaga waad gudbisay macmiil waxaanan rajaynaynaa inaad ku qancid doonta 
                            shaqada laguu qabtay marka laguu dhameeyo dalabkaag .
                            La soco Mar kasta  xaalada dalabkaagu marayo kolba Mahadsanid
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
                                Wuu socdaa 
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
                            <FontAwesomeIcon className="i" icon={faClock} /> <span>{format(dat_order.CreatedAt)}</span>
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
            {/* <!---------------dhamaadka shaqooyinka -------------------> */}
            </div>
        </section>
        </div>
    )
}

export default OrderUsers