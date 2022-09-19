import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Nativactions from "./Nativactions";
import Massages from "./Massages";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars, faBell, faEarthAfrica, faEnvelope, faRightToBracket ,faSearch,faToolbox} from "@fortawesome/free-solid-svg-icons";
import NavMobile from "./NavMobile";
import Drop_nav from "./Drop_nav";
import {FaAngleDown , FaGlobeAfrica} from "react-icons/fa"
import { UseAuth } from "./context/authcontext";
import Search from "./serchFrom";


function Nav(){
    const [isactive, setisactive] = useState(false)
    const [search,setsearch] = useState(false)
    const [massage, setmagessa] = useState(false)
    const [drop, setdrop] = useState(false)
    const [Navmobile, setnavMobile] = useState(false)
    const {crentuser, Userinfo} = UseAuth()

    const handalesearch = () => {
        search ? setsearch(false) : setsearch(true)
        setmagessa(false)
        setdrop(false)
        setisactive(false)

    }
    function HandelOgaysiis(){
        isactive ? setisactive(false): setisactive(true);
        setmagessa(false)
        setdrop(false)
    }

    function HandelMassage(){
        massage ? setmagessa(false): setmagessa(true);
        setisactive(false)
        setdrop(false)
    }

    function handelDrop(){
        drop ? setdrop(false): setdrop(true);
        setisactive(false)
        setmagessa(false)
    }

    function HandelNavMobile(){
        Navmobile ? setnavMobile(false): setnavMobile(true);
    }
      
    return (
    <div>
        <div className="xajiye">
        <div className='header hoos'>
        <div className="logo">
            <Link to='/'>
                <img src="/images/Logo_Takriim-06.png" alt="logo" />
            </Link>
        </div>
        {crentuser ?
        <div className="nav_links user">
            <Search active={search} setactive={setsearch}/>
            {!search ?
            <>
            <ul>
                <li>
                <Link to={'/Acount/orders'}>
                <FontAwesomeIcon className="i" icon={faToolbox}/> Dalabyo  
                </Link>
                </li>
                <li onClick={HandelMassage}>
                <a href="#Massage">
                <FontAwesomeIcon className="i" icon={faEnvelope}/> Fariimo <span>0</span>
                </a>
                </li>
                <Massages massageHold={massage}/>
                <li onClick={HandelOgaysiis}>
                    <a href="#Ogaysiis">
                    <FontAwesomeIcon className="i" icon={faBell}/> Ogaysiis <span>0</span>
                    </a>
                </li>
                <li>
                <Link to={'#search'} onClick={handalesearch}>
                <FontAwesomeIcon className="i" icon={faSearch}/>
                </Link>
                </li>
                <Nativactions isactive={isactive}/>
                <li className="user_nav">
                    <a href="#Drop" onClick={handelDrop}>
                        <div className="user_">
                            <img src={Userinfo && Userinfo.Image} />
                        </div>
                    </a>
                </li>
                <Drop_nav drop={drop}/>
            </ul>
            </>
            :
            <></>
            }
        </div>
        :<div className="nav_links normal">
        <Search active={search} setactive={setsearch}/>
        {!search ?
        <ul className="ul_nav">
            <li>
                <a href="#">
                <FontAwesomeIcon className="i" icon={faEarthAfrica} /> So  <FaAngleDown />
                </a>
            </li>
            <li>
                <a href="#">
                    more  <FaAngleDown />
                </a>
            </li>
            <li>
                <a href="https://e-sako.web.app/">
                    E-sako Web
                </a>
            </li>
            <li>
                <Link to={'#search'} onClick={handalesearch}>
                <FontAwesomeIcon className="i" icon={faSearch}/>
                </Link>
            </li>
            <li className="btn">
                <Link to={"/Acount/Login"}>
                <FontAwesomeIcon className="i" icon={faRightToBracket}/> Gal Akoon
                </Link>
            </li>
        </ul>
        :
        <></>
        }
        </div>
        }
        {/* <!---------nav normal-----------------------------> */}
        {/* <!--------- end nav normal-----------------------------> */}
        {/* <!--------- nav mobile-----------------------------> */}
        <div className="nav_links mobile">
            <ul>
                <li onClick={ HandelNavMobile}>
                    <a href="#mobile">
                    <FontAwesomeIcon className="barmobile i" icon={faBars}/>
                    </a>
                </li>
                {crentuser ?
                <li className="user_nav">
                <Link to={`/Acount/user/${crentuser && crentuser.uid}`}>
                    <div className="user_">
                        <img src={Userinfo && Userinfo.Image} />
                    </div>
                </Link>
                </li>
                :<></>
                }


            </ul>
        </div>
        {/* <!--------- end nav mobile-----------------------------> */}
        </div>
    </div>
    <NavMobile nav_mb={Navmobile}/>
    </div>
)
    
}


export default Nav