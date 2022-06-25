import { useRef, useState } from "react"
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faCircleCheck , faRotate, faStar , faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Xayaysiis from "../Saponsered_Ads";
import { Link } from "react-router-dom";


function AsideJob({jobmudo ,qiimojob ,Jobxadiga,job,user}){
    const inputt = useRef()
    const qiimaha =  qiimojob
    const [q_sax ,setqimosaxa] = useState(qiimaha)
    const Mudada = jobmudo
    const [mudayn , setmudayn] = useState(Mudada)
    const xadiga = Jobxadiga
    const [xadi2 , setxadiga] = useState(xadiga)
    const qiyaas = useRef()
    const count_place = useRef()
    const kalmad_place  = useRef()
    const [qi_toin, setqitoin] = useState(null)
    const [xa_toin, setxatoin] = useState(null)
    function xisaabiye(){
        const xadiga_hore = qiimaha / xadiga
        const xadiga_inputka = parseInt(inputt.current.value);
        const last_qii = xadiga_hore * xadiga_inputka

        const mudadiiHore = Mudada / xadiga
        const lastmuddo = mudadiiHore * xadiga_inputka
        // sax waxii noqda
        setxadiga(xadiga_inputka)
        setqimosaxa(last_qii.toFixed(2))
        setmudayn(Math.floor(lastmuddo))
        xadi2 == NaN ? setxadiga(1) : console.log('wuu buuxaa');
    }

    function oninput(){
        count_place.current.textContent = qiyaas.current.value.length;
        let Array_word = qiyaas.current.value.split(" ");
        kalmad_place.current.textContent = Array_word.length;
        if(qiyaas.current.value.length >= 1){
            count_place.current.classList.add('active')
        }else{
            count_place.current.classList.remove('active')
            kalmad_place.current.classList.remove('active')
            Array_word = [];
        }

        if(Array_word.length >= 1){
            kalmad_place.current.classList.add('active')
        };
    }
    return(
        <div className="qayb_ macluumo">
            <div className="top_mac">
                <h2>Macluumadka shaqada</h2>
            </div>
            <div className="basic_info">
                <h2>USD $<span id="qiimaha">{q_sax}</span></h2> 
                <p>
                    Qiimahan waa Qiimaha bilowga ah
                </p>
                <div className="more_info">
                    <ul>
                        {mudayn < 1 ?
                        <li> <FontAwesomeIcon icon={faCircleCheck} className="i" /> Mudada : <span className="mudada">12</span> Saacadood</li> 
                        :
                        <li> <FontAwesomeIcon icon={faCircleCheck} className="i" /> Mudada : <span className="mudada">{mudayn}</span> Maalin</li>  
                        }
                        <li> <FontAwesomeIcon icon={faCircleCheck} className="i" /> Xadiga : <span className="xadiga_adeeg">{xadi2}</span> {job.Nooca}</li>
                        <li> <FontAwesomeIcon icon={faCircleCheck} className="i" /> {job.qodob1aad} </li>
                        <li> <FontAwesomeIcon icon={faCircleCheck} className="i" /> {job.qodob2aad} </li>
                    </ul>
                    <form action="" method="GET">
                        <input type="hidden" value={mudayn}  name="Mudada"/>
                        <input type="hidden" value={xadi2}  name="xadiga"/>
                        <input type="hidden" value={q_sax}  name="qiimaha"/>
                        <label><FontAwesomeIcon  icon={faRotate}/> Xadiga : </label>
                        <input ref={inputt} onChange={xisaabiye} className="xadiga_user" type="number" value={xadi2} name="xadiga" />
                        <label> {job.Nooca} </label>
                        {
                        q_sax <= 0 || q_sax == NaN ? <p>dalab ma noqonayo wax ka yar 1 </p> :<Link to={`/Order/${job.id}`}>
                            <button>Gudbi Dalabka(<span className="qiimaha_lastiga">{q_sax}</span>$)</button>
                            </Link>
                        }
                    </form>
                </div>
                                {/* <!-------if shaqo type == turjumid qorid iwm--> */}
                                {job.Nooca == "Kalmad(word)" || job.Nooca == "Xaraf(letter)"?
                <div>
                <textarea onInput={oninput} ref={qiyaas} className="qiyaas" placeholder="Halkan Ku Paste-Garee Qoraalkaaga(Paste Here Your Content)"></textarea>
                <div className="aria">
                    <div className="xaraf count">
                        <p>Xaraf</p>
                        <span ref={count_place} className="count_place xaraf_01">00</span>
                    </div>
                    <div className="kalmad_01 count">
                        <p>Kalmad</p>
                        <span ref={kalmad_place} className="count_place kalmad">00</span>
                    </div>
                </div>
                </div>:''}

                {/* <!-------if shaqo type == turjumid qorid iwm--> */}
                <div className="iibiye_info">
                    <img id="la_xaqiijiyay" src="/images/tawsiiq.svg" alt="tawqsiiq" title="Waa La Xaqiijiyay" />
                    <div className="sir">
                        <img src={user? user.image :"/images/avatar.jpg"} />
                    </div>
                    <div className="info_seller">
                        {user ?  <Link to={`/Acount/${user.Name}/${user.id}`}>
                            <h2> {user? user.Name :"unknown user"}</h2>
                        </Link> : ""}
                        
                        <p>  {user ? user.Job :  "unknown Description"}</p>
                        <p className="qiimayn">
                            <FontAwesomeIcon className="i" icon={faStar} />
                            <FontAwesomeIcon className="i" icon={faStar} />
                            <FontAwesomeIcon className="i" icon={faStar} />
                            <FontAwesomeIcon className="i" icon={faStar} />
                            <FontAwesomeIcon className="i" icon={faStar} />
                            (<span>23</span>) qof
                        </p>
                        {user ? <Link to={`/Acount/Online/chat/${user.id}`}>
                            <button><FontAwesomeIcon icon={faEnvelope} /> ila soo xidhiidh</button>
                        </Link> :"/"}

                    </div>

                </div>

                <Xayaysiis />

            </div>
        </div>
    )
}


export default AsideJob