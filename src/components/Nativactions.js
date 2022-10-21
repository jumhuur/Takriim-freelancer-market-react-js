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
            <Link to={`/Acount/Myorder`} key={data.UserId}>
            <div className="msg">
                <h2>Waxaa lagaa soo dalbaday <span>{data.title}</span> .</h2>
                <p>Wakti : <span>{format(data.CreatedAt)}  </span>     <span className="Xaalad"><i className="fa-solid fa-bell"></i></span></p>
            </div>
            </Link>
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