import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Nativactions from "./Nativactions";
import Massages from "./Massages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faAngleDown,
  faBars,
  faBell,
  faEarthAfrica,
  faEnvelope,
  faRightToBracket,
  faSearch,
  faToolbox,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import NavMobile from "./NavMobile";
import Drop_nav from "./Drop_nav";
import { FaAngleDown, FaGlobeAfrica, FaUserTie } from "react-icons/fa";
import { UseAuth } from "./context/authcontext";
import Search from "./serchFrom";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
function Nav() {
  const [isactive, setisactive] = useState(false);
  const [search, setsearch] = useState(false);
  const [massage, setmagessa] = useState(false);
  const [drop, setdrop] = useState(false);
  const [Navmobile, setnavMobile] = useState(false);
  const { crentuser, Userinfo } = UseAuth();
  const [alert, setalert] = useState("0");
  const [fariin, setfariin] = useState(0);
  const [aler_xadidi, setalert_xadid] = useState(1);

  const handalesearch = () => {
    search ? setsearch(false) : setsearch(true);
    setmagessa(false);
    setdrop(false);
    setisactive(false);
  };
  function HandelOgaysiis() {
    isactive ? setisactive(false) : setisactive(true);
    setmagessa(false);
    setdrop(false);
    setalert(0);
    setalert_xadid(0);
    update_aler();
  }

  function HandelMassage() {
    massage ? setmagessa(false) : setmagessa(true);
    setisactive(false);
    setdrop(false);
  }

  function handelDrop() {
    drop ? setdrop(false) : setdrop(true);
    setisactive(false);
    setmagessa(false);
  }

  function HandelNavMobile() {
    Navmobile ? setnavMobile(false) : setnavMobile(true);
  }

  // nativations
  const [Ogaysiis, setOgaysiis] = useState(null);
  const [user, setuser] = useState();
  const u_id = crentuser && crentuser.uid;
  const count = user && user.aler_count;
  const cod = useRef();

  //get data user
  const db = getFirestore();
  const colref = collection(db, "user_natications");
  const q = query(
    colref,
    where("UserId", "==", u_id),
    orderBy("CreatedAt", "desc")
  );
  //hellida docs
  async function Get_nativications() {
    getDocs(q).then((snapshot) => {
      const Dhaq1aad = [];
      snapshot.docs.forEach((doc) => {
        Dhaq1aad.push({ ...doc.data(), id: doc.id });
      });
      setOgaysiis(Dhaq1aad);
    });
  }

  function update_aler() {
    const alert_ref = doc(db, "Users", u_id);
    updateDoc(alert_ref, {
      aler_count: 0,
    });
  }

  // daarida codka

  useEffect(() => {
    if (alert > 0 && aler_xadidi > 0) {
      cod.current.play();
      setalert_xadid(0);
    }
  }, [Ogaysiis]);

  useEffect(
    function () {
      Get_nativications();
      // const q = query(colref)
      const get_user_cren = () => {
        const Userref_r = doc(db, "Users", crentuser.uid);
        getDoc(Userref_r).then((doc) => {
          setuser({ ...doc.data(), id: doc.id });
        });
        setalert(count);
      };
      crentuser && get_user_cren();
    },
    [user, crentuser]
  );

  return (
    <div>
      <div className="xajiye">
        <audio ref={cod} src="/Media/alert.mp3"></audio>
        <div className="header hoos">
          <div className="logo">
            <Link to="/">
              <img src="/images/Logo_Takriim-06.png" alt="logo" />
            </Link>
          </div>
          {crentuser ? (
            <div className="nav_links user">
              <Search active={search} setactive={setsearch} />
              {!search ? (
                <>
                  {Userinfo && Userinfo.Nooc === "customer" ? (
                    <ul>
                      <li>
                        <Link to={"/XeerarCustomers"}>
                          <FontAwesomeIcon className="i" icon={faFileLines} />{" "}
                          Xeerar
                        </Link>
                      </li>
                      <li onClick={HandelMassage}>
                        <a href="#Massage">
                          <FontAwesomeIcon className="i" icon={faEnvelope} />{" "}
                          Fariimo
                          {fariin > 0 ? <span>0</span> : <></>}
                        </a>
                      </li>
                      <Massages massageHold={massage} />
                      <li onClick={HandelOgaysiis}>
                        <a href="#Ogaysiis">
                          <FontAwesomeIcon className="i" icon={faBell} />{" "}
                          Ogaysiis
                          {alert > 0 ? <span>{alert}</span> : <></>}
                        </a>
                      </li>
                      <li>
                        <Link to={"#search"} onClick={handalesearch}>
                          <FontAwesomeIcon className="i" icon={faSearch} />
                        </Link>
                      </li>
                      <Nativactions isactive={isactive} Ogaysiis={Ogaysiis} />
                      <li className="user_nav">
                        <a href="#Drop" onClick={handelDrop}>
                          <div className="user_">
                            <img src={Userinfo && Userinfo.Image} />
                          </div>
                        </a>
                      </li>
                      <Drop_nav drop={drop} />
                    </ul>
                  ) : (
                    <ul>
                      <li>
                        <Link to={"/Acount/orders"}>
                          <FontAwesomeIcon className="i" icon={faToolbox} />{" "}
                          Dalabyo
                        </Link>
                      </li>
                      <li onClick={HandelMassage}>
                        <a href="#Massage">
                          <FontAwesomeIcon className="i" icon={faEnvelope} />{" "}
                          Fariimo
                          {fariin > 0 ? <span>0</span> : <></>}
                        </a>
                      </li>
                      <Massages massageHold={massage} />
                      <li onClick={HandelOgaysiis}>
                        <a href="#Ogaysiis">
                          <FontAwesomeIcon className="i" icon={faBell} />{" "}
                          Ogaysiis
                          {alert > 0 ? <span>{alert}</span> : <></>}
                        </a>
                      </li>
                      <li>
                        <Link to={"#search"} onClick={handalesearch}>
                          <FontAwesomeIcon className="i" icon={faSearch} />
                        </Link>
                      </li>
                      <Nativactions isactive={isactive} Ogaysiis={Ogaysiis} />
                      <li className="user_nav">
                        <a href="#Drop" onClick={handelDrop}>
                          <div className="user_">
                            <img src={Userinfo && Userinfo.Image} />
                          </div>
                        </a>
                      </li>
                      <Drop_nav drop={drop} />
                    </ul>
                  )}
                </>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <div className="nav_links normal">
              <Search active={search} setactive={setsearch} />
              {!search ? (
                <ul className="ul_nav">
                  <li>
                    <a href="#">
                      <FontAwesomeIcon className="i" icon={faEarthAfrica} /> So{" "}
                      <FaAngleDown />
                    </a>
                  </li>
                  <li>
                    <Link to={"/freelancers"}>
                      <FontAwesomeIcon className="i" icon={faUserTie} />{" "}
                      Freelancers
                    </Link>
                  </li>
                  <li>
                    <a href="https://e-sako.web.app/">E-sako Web</a>
                  </li>
                  <li>
                    <Link to={"#search"} onClick={handalesearch}>
                      <FontAwesomeIcon className="i" icon={faSearch} />
                    </Link>
                  </li>
                  <li className="btn">
                    <Link to={"/Acount/Login"}>
                      <FontAwesomeIcon className="i" icon={faRightToBracket} />{" "}
                      Gal Akoon
                    </Link>
                  </li>
                </ul>
              ) : (
                <></>
              )}
            </div>
          )}
          {/* <!---------nav normal-----------------------------> */}
          {/* <!--------- end nav normal-----------------------------> */}
          {/* <!--------- nav mobile-----------------------------> */}
          <div className="nav_links mobile">
            <ul>
              <li onClick={HandelNavMobile}>
                <a href="#mobile">
                  <FontAwesomeIcon className="barmobile i" icon={faBars} />
                </a>
              </li>
              {crentuser ? (
                <li className="user_nav">
                  <Link to={`/Acount/user/${crentuser && crentuser.uid}`}>
                    <div className="user_">
                      <img src={Userinfo && Userinfo.Image} />
                    </div>
                  </Link>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
          {/* <!--------- end nav mobile-----------------------------> */}
        </div>
      </div>
      <NavMobile nav_mb={Navmobile} Ogaysiis={alert} />
    </div>
  );
}

export default Nav;
