import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {format} from "timeago.js";
function Nativactions({isactive, Ogaysiis}){
    return (
        <div id="ogaysiis_nav" className={isactive ? "active":''}>
        <div className="footer_msg top">
            <a href="">
            </a>
        </div>
        <div className="all_massage">
            {Ogaysiis && Ogaysiis.map(data => (
            <>
            {data.nooca_nat == 0 ?
                <Link to={`/Acount/Myorder`} key={data.UserId}>
                <div className="msg">
                    <h2>Waxaa lagaa soo dalbaday <span>{data.title}</span> .</h2>
                    <p><FontAwesomeIcon icon={faClock} />  <span>{format(data.CreatedAt)}  </span>     <span className="Xaalad"><i className="fa-solid fa-bell"></i></span></p>
                </div>
                </Link>
            :data.nooca_nat == 1 ?
            <Link to={`/Acount/Myorder`} key={data.UserId}>
            <div className="msg">
                <h2>Waa Laga Labtay <span>{data.title}</span> .</h2>
                <p><FontAwesomeIcon icon={faClock} />  <span>{format(data.CreatedAt)}  </span>     <span className="Xaalad"><i className="fa-solid fa-bell"></i></span></p>
            </div>
            </Link>
            :data.nooca_nat == 2 ?
            <Link to={`/Acount/Rasiid`} key={data.UserId}>
            <div className="msg">
                <h2>Waa La Gudoomay Dalabkan <span>{data.title}</span> .</h2>
                <p><FontAwesomeIcon icon={faClock} />   <span>{format(data.CreatedAt)}  </span>     <span className="Xaalad"><i className="fa-solid fa-bell"></i></span></p>
            </div>
            </Link>
            :data.nooca_nat == 6 ?
            <Link to={`/Acount/orders`} key={data.UserId}>
            <div className="msg">
                <h2>Waa La  Aqbalay Dalabkan <span>{data.title}</span> .</h2>
                <p><FontAwesomeIcon icon={faClock} />   <span>{format(data.CreatedAt)}  </span>     <span className="Xaalad"><i className="fa-solid fa-bell"></i></span></p>
            </div>
            </Link>
            :data.nooca_nat == 7 ?
            <Link to={`/Acount/orders`} key={data.UserId}>
            <div className="msg">
                <h2>Hanbalyo ! Waa Lagu Dhameeyay Dalabkan<span>{data.title}</span> .</h2>
                <p><FontAwesomeIcon icon={faClock} />   <span>{format(data.CreatedAt)}  </span>     <span className="Xaalad"><i className="fa-solid fa-bell"></i></span></p>
            </div>
            </Link>
            :<></>
            }   
            </>
            ))}

        </div>
        <div className="footer_msg">
            <a href="">
                <i className="fa-solid fa-bell"></i> dhamaan Ogaysiisyadaada
            </a>
        </div>
    </div>
    )
}


export default Nativactions