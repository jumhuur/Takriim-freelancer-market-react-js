import  NavHolder from "../NavHolder";
import  Footer from "../Footer";
import AsideUser from "./Aside_Profile"
import  SklatonAll from '../skaltons/Jobskalaton';
import { Link } from "react-router-dom"
import {useRef, useState } from "react"
import {faFileCircleCheck,faTrashCan,faCloudArrowUp ,faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Add_servece(){
    const [order, setorder] = useState(null)
    const [filename , setfilename] = useState(null)
    const [filezise , setfilezise] = useState(null)

    const image01 = useRef();
    const spn_img1 = useRef();
    const progress = useRef();
    const file_icon = useRef()
    const file_icon2 = useRef()

    //spn_img1.current.addEventListener('click', image01_click)
    function image01_click(e){
        image01.current.click()
    }

    function xidh(){
        progress.current.classList.remove('progress');
        //progress.current.innerHTML = "";
        file_icon.current.classList.add('active')
        file_icon2.current.classList.add('active')
        setfilename(null)
        setfilezise(null)
    }

    function onchange({target}){
        let file = target.files[0];
        if(file){
            let file_name = file.name.substring(0,30);
            let file_zise = file.size / 1024 / 1024
            setfilename(file_name.substring(0,30))
            setfilezise(`${file_zise.toFixed(2)} MB`)
            uploadFile(file_name)
            progress.current.classList.add('progress')
            //progress.current.innerHTM
            file_icon.current.classList.remove('active')
            file_icon2.current.classList.remove('active')
        }
    }

    function uploadFile(name){
        let codsi = new XMLHttpRequest();
        codsi.open('POST' , "php/upload.php")
        codsi.upload.addEventListener('progress', (e) =>{
            console.log(e)
        })
    }
    return(
        <div>
        <NavHolder />
        <section className="orders invocs">
        <div className="xajiye kala_qayb">
            {/* aside is here */}
            <AsideUser />
            {/* <!---------------biloga foomka labixida -------------------> */}
            <div className="tranding_haye">
                <div className="rasiid_tamplate">
                    <div className="rasiid">
                        <form method="get" action="">
                            <label htmlFor="name">Ciwaanka adegaaga</label>
                            <input className="la_bax" type="text" name="ciwaan_adeeg" placeholder="ciwaanka adeegaaga" minLength={20} required maxLength={38} />
                            <label htmlFor="qaab">Qaybta Uu Ka Mid Yahay</label>
                            <select className="la_bax" name="qaybta_1aad">
                                <option value="muuqaal">Muuqaal</option>
                                <option value="nashqadayn">nashqadayn</option>
                                <option value="Turjumaad">Turjumaad</option>
                                <option value="Qorid">Qorid</option>
                                <option value="cod">cod</option>
                                <option value="Tifatir">Tifatir</option>
                                <option value="Devalopment">Devalopment</option>
                                <option value="waxkale">wax kale</option>
                            </select>
                            <label htmlFor="qaab">Sawirka 1aad</label>
                            <div className="sawir">
                                <span ref={spn_img1} onClick={image01_click} className="span_image1"><FontAwesomeIcon icon={faCloudArrowUp} /></span>
                                <input ref={image01} onChange={onchange} className="img_01" type="file" name="sawir1aad" style={{visibility:"hidden"}} />
                                {/* <!----------upload file and image --> */}
                                <div ref={progress} className="upload">
                                    <div ref={file_icon} className="file_icon active">
                                        <FontAwesomeIcon icon={faFileCircleCheck} />
                                    </div>
                                    <div className="file_name_and_zise">
                                        <div className="macluumaad">
                                            <h2>{filename}  {filezise}</h2>
                                        </div>
                                        <div className="progerss_two">
                                            <div className="line" style={{width: '85%'}}>

                                            </div>
                                        </div>
                                    </div>
                                    <div ref={file_icon2} className="file_icon delete active" onClick={xidh}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                    </div>
                                </div>
                                {/* <!----------upload file and image --> */}
                            </div>
                            <label htmlFor="qaab">Faahfaahinta Adeega</label>
                            <textarea name="faahfaahin" className="add_serv" placeholder="faahfaahin adeegaga" minLength={50} required maxLength={1000}></textarea>
                            <label htmlFor="qaab">Qiimaha Adeega</label>
                            <select className="la_bax" name="qiimaha">
                                <option value="5">5$</option>
                                <option value="6">6$</option>
                                <option value="8$">8$</option>
                                <option value="10">10$</option>
                                <option value="15">15$</option>
                                <option value="20">20$</option>
                                <option value="25">25$</option>
                                <option value="30">30$</option>
                                <option value="35">35$</option>
                                <option value="40">40$</option>
                                <option value="45">45$</option>
                                <option value="50">50$</option>
                                <option value="55">55$</option>
                                <option value="60">60$</option>
                                <option value="65">65$</option>
                                <option value="70">70$</option>
                                <option value="75">75$</option>
                                <option value="80">80$</option>
                                <option value="85">85$</option>
                                <option value="90">90$</option>
                                <option value="95">95$</option>
                                <option value="100">100$</option>
                                <option value="150">150$</option>
                                <option value="200">200$</option>
                                <option value="250">250$</option>
                            </select>
                            <label htmlFor="qaab">Xadiga adeega & Nooca</label>
                            <div id="xadiga_nooca">
                                <input type="number" className="xadiga" required />
                                <select className="la_bax xadiga" name="qiimaha">
                                    <option value="Bog(page)">Bog(page)</option>
                                    <option value="Daqiiqad(minute)">Daqiiqad(minute)</option>
                                    <option value="ilbidhiqsi(seconds)">ilbidhiqsi(seconds)</option>
                                    <option value="Xaraf(lettar)">Xaraf(lettar)</option>
                                    <option value="nashqad(design)">nashqad(design)</option>
                                    <option value="kalmad(word)">kalmad(word)</option>
                                    <option value="20$">Saacad(Hour)</option>
                                    <option value="Saacad(Hour)">Saacad(Hour)</option>
                                    <option value="sawir(picture)">sawir(picture)</option>
                                    <option value="Buug(Book)">Buug(Book)</option>
                                    <option value="muuqaal(video)">muuqaal(video)</option>
                                    <option value="muuqaal(video)">cod(voice)</option>
                                </select>
                            </div>
                            <label htmlFor="qaab">Mudada adeegan aad ku qabanyso</label>
                            <select className="la_bax" name="mudada">
                                <option value="0.25">6 Saacadood</option>
                                <option value="0.50">12 Saacadood</option>
                                <option value="1">Maalin</option>
                                <option value="2">laba Maalmood</option>
                                <option value="3">sadex maalmood</option>
                                <option value="4">afar maalmood</option>
                                <option value="5">shan maalmood</option>
                                <option value="6">lix maalmood</option>
                                <option value="7">Hal Wiig</option>
                                <option value="14">laba wiig</option>
                                <option value="21">sadex wiig</option>
                                <option value="30">Hal Bil</option>
                                <option value="60">laba Bilood</option>
                                <option value="90">sadex Bilood</option>
                            </select>
                            <label htmlFor="qaab">Maxaad Uga Baahantahay Iibsadaha</label>
                            <textarea name="faahfaahin" className="add_serv" placeholder="Maxaad Ugu Baahantahay Iibsadaha" required minLength={30}></textarea>
                            <label htmlFor="name">Maxaa Kamida Waxyaabah aad y qabanayso iibsadaha</label>
                            <input className="la_bax" type="text" name="adeeg_dheeraad1" placeholder="waxaan kuu..."  maxLength={35}/>                            
                            <input className="la_bax" type="text" name="adeeg_dheeraad2" placeholder="waxaan kuu ..." maxLength={35}/>
                            <button className="la_bax" type="submit"><FontAwesomeIcon icon={faSquarePlus}></FontAwesomeIcon>  Ku Dar Adeega</button>
                            <p className="la_bax"><i className="fa-solid fa-bell"></i> lama Ardkay Waxaad Ugu Baahantahay Iibsadaha markuu dalbado mooyaane</p>
                        </form> 
                    </div>
                </div>
            </div>
            {/* <!---------------dhamaadka  foomka labixida -------------------> */}
        </div>
        </section>
        <Footer />
        </div>
    )
}

export default Add_servece