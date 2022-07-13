import Aside from "../Aside";
import Holder from "../NavHolder";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faGears,faClockRotateLeft ,faCreditCard ,faClock, faCircleCheck ,faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Jobskl from "../skaltons/Jobskalaton";
import {format} from "timeago.js";
import {UseAuth} from "../context/authcontext"
function OrderUsers(){
    const [order, setorder] = useState(null)
    const {crentuser } = UseAuth()
    useEffect((function(){
        fetch('/orders')
        .then((response) =>{
            if(response){
                return response.json()
            }
        })
        .then((data) =>{
            setorder(data)
        })

    }), [])
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
                    {dat_order.xaalad == 0 ? 
                    <img src="/images/o_u0.svg" alt="sawir_template" />
                    :dat_order.xaalad == 1 ?  
                    <img src="/images/o_u1.svg" alt="sawir_template" />
                    : dat_order.xaalad == 2 ? 
                    <img src="/images/o_u2.svg" alt="sawir_template" />
                    :
                    <img src="/images/o_u.svg" alt="sawir_template" />
                    }
                </div>
                <div className="macluumaad">
                    <div className="qoraalo">
                        <Link to={`/Acount/order/Info/${dat_order._id}/${dat_order.UserId}`}>
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
                                socdaa 
                                </li>
                            : dat_order.xaalad == 2 ? 
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
                            <FontAwesomeIcon className="i" icon={faClock} /> <span>{format(dat_order.createdAt)}</span>
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