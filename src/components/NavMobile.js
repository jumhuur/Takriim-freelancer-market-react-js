import { useEffect, useState } from "react";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import {faBarsStaggered, faBars,faUserPlus, faNetworkWired, faToolbox , faChartSimple , faFileInvoiceDollar ,faSackDollar ,faPenToSquare ,faRightFromBracket, faCirclePlus, faAngleDown} from "@fortawesome/free-solid-svg-icons";


function NavMobile({nav_mb}){
    const [datnav , setdatnav] = useState(null)
    useEffect(() => {
        fetch('http://localhost:800/Qayb')
        .then((Response) => {
            //Response ? console.log(Response) : "";
            if(Response.ok){
                const data = Response.json()
                return data
            }
        })
        .then((navdata) =>{
            setdatnav(navdata)
        })
    },[])
    return(
        <div id="nav_mobile" className={nav_mb ? "active":""}>
        <ul>
            <li className="qayb_mobile">
                <FontAwesomeIcon  className="i" icon={faBars}/> Qaybaha Shaqoyinka < FontAwesomeIcon icon={faAngleDown}/>
            </li>
            <div className="qaybo_mobile">
                <ul>
                    {datnav ? datnav.map((data) =>(
                        <li key={data.id}>
                        <Link to={`/Qayb/${data.id}`}>
                            <FontAwesomeIcon  className="i" icon={faNetworkWired}/> {data.Name}
                        </Link>
                        </li>
                    )) : <li>Loading data</li>}
                </ul>
            </div>
            <li className="qayb_mobile">
            <FontAwesomeIcon  className="i" icon={faBars}/> Qaybaha Shaqoyinka < FontAwesomeIcon icon={faAngleDown}/>
            </li>
            <div className="qaybo_mobile" style={{"display": "flex"}}>
                <ul>
                    <li>
                        <Link to={'/Acount/Myorder'}>
                            <FontAwesomeIcon className="i" icon={faToolbox} /> dalabyada
                        </Link>
                    </li>
                    <li>
                        <a href="/profile.html">
                        <FontAwesomeIcon className="i" icon={faChartSimple} /> adeegyadaada
                        </a>
                    </li>
                    <li>
                        <a href="/rasiid.html">
                        <FontAwesomeIcon className="i" icon={faFileInvoiceDollar} /> Rasiika Lacagta
                        </a>
                    </li>
                    <li>
                        <a href="/cashout.html">
                        <FontAwesomeIcon className="i" icon={faSackDollar} /> Lacag La Bax
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <FontAwesomeIcon className="i" icon={faPenToSquare} /> update profile
                        </a>
                    </li>
                    <li>
                        <Link to={'/Acount/Add_Job'}>
                        <FontAwesomeIcon className="i" icon={faCirclePlus} /> Gali Adeeg
                        </Link>
                    </li>
                    <li>
                        <a href="">
                        <FontAwesomeIcon className="i" icon={faRightFromBracket} /> Xidho Akoonka
                        </a>
                    </li>
                </ul>
            </div>
            <li>
                <a href="#">
                    <i className="fa-solid fa-message"></i> Fariimo <span>20</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa-solid fa-bell"></i> Ogaysiis <span>01</span>
                </a>
            </li>
            <li>
                <Link to={'/Acount/orders'}>
                    <i className="fa-solid fa-toolbox"></i> Dalabyo  <span>0</span>
                </Link>
            </li>
            <Link to={"/Acount/Login"}>
                <button className="nav_mobile_btn"><FontAwesomeIcon className="i" icon={faRightFromBracket} /> Gal Akoon</button>
            </Link>
            <Link to={"/Acount/Singup"}>
                <button className="nav_mobile_btn"><FontAwesomeIcon className="i" icon={faUserPlus} /> Samayso Akoon</button>
            </Link>
            
        </ul>
    </div>
    )
}


export default NavMobile