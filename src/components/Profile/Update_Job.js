import  NavHolder from "../NavHolder";
import  Footer from "../Footer";
import AsideUser from "./Aside_Profile"
import  SklatonAll from '../skaltons/Jobskalaton';
import { Link, useParams } from "react-router-dom"
import {useRef, useState } from "react"
import {faFileCircleCheck,faTrashCan,faCloudArrowUp ,faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

function Upadate_job(){
    const [filename , setfilename] = useState(null)
    const [filezise , setfilezise] = useState(null)
    const [list , setlist] = useState(null)
    const [val , setval] = useState(null)
    const [title , settitle] = useState(null)
    const {id} = useParams()

    const image01 = useRef();
    const spn_img1 = useRef();
    const progress = useRef();
    const file_icon = useRef()
    const file_icon2 = useRef()
    const btn_add =useRef()

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
            //console.log(e)
        })
    }

    useEffect(() =>{
        const getlist_qayb = async () =>{
            const data_list = await fetch(`/qaybo`)
            const respon = await data_list.json()
            if(data_list.ok){
                setlist(respon)
            }
        }
        getlist_qayb()

        const upadatevalu = async () =>{
            const data_list = await fetch(`/jobs/${id}`)
            const respon = await data_list.json()
            if(data_list.ok){
                setval(respon)
            }
            onchange()
            setfilename(val.image)
        }
        upadatevalu()
    },[])
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
                        <form method="POST">
                            <label htmlFor="name">Ciwaanka adegaaga</label>
                            <input  className="la_bax" type="text" name="title" value={val && val.title} placeholder="ciwaanka adeegaaga" minLength={20} required maxLength={38} />
                            <label htmlFor="qaab">Qaybta Uu Ka Mid Yahay</label>
                            <select  value={val && val.Qaybid} className="la_bax" name="Qaybid">
                               {list && list.map((listdata) =>(
                                    <option key={listdata._id} value={listdata._id}>{listdata.Name}</option>
                               ))}
                            </select>
                            <label htmlFor="qaab">Sawirka 1aad</label>
                            <div className="sawir">
                                <span name="image" ref={spn_img1} onClick={image01_click} className="span_image1"><FontAwesomeIcon icon={faCloudArrowUp} /></span>
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
                            <textarea name="body" className="add_serv" value={val && val.body} placeholder="faahfaahin adeegaga" minLength={50} required maxLength={1000}></textarea>
                            <label htmlFor="qaab">Qiimaha Adeega</label>
                            <select className="la_bax" value={val && val.Qiimaha} name="Qiimaha">
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
                                <input type="number" value={val && val.Xadiga} className="xadiga" required name="Xadiga"/>
                                <select className="la_bax xadiga" value={val && val.Nooca} name="Nooca">
                                    <option value="Bog">Bog(page)</option>
                                    <option value="Daqiiqad">Daqiiqad(minute)</option>
                                    <option value="ilbidhiqsi">ilbidhiqsi(seconds)</option>
                                    <option value="Xaraf">Xaraf(lettar)</option>
                                    <option value="Nashqad">nashqad(design)</option>
                                    <option value="Kalmad">kalmad(word)</option>
                                    <option value="Saacad">Saacad(Hour)</option>
                                    <option value="Sawir">sawir(picture)</option>
                                    <option value="Buug">Buug(Book)</option>
                                    <option value="Muuqaal">muuqaal(video)</option>
                                    <option value="Cod">cod(voice)</option>
                                </select>
                            </div>
                            <label htmlFor="qaab">Mudada adeegan aad ku qabanyso</label>
                            <select value={val && val.Mudada} className="la_bax" name="Mudada">
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
                            {/* <label htmlFor="qaab">Maxaad Uga Baahantahay Iibsadaha</label>
                            <textarea name="faahfaahin" className="add_serv" placeholder="Maxaad Ugu Baahantahay Iibsadaha" required minLength={30}></textarea> */}
                            <label htmlFor="name">Maxaa Kamida Waxyaabah aad y qabanayso iibsadaha</label>
                            <input className="la_bax" type="text" value={val && val.qodob1aad} name="qodob1aad" placeholder="waxaan kuu..."  maxLength={35}/>                            
                            <input className="la_bax" type="text" value={val && val.qodob2aad} name="qodob2aad" placeholder="waxaan kuu ..." maxLength={35}/>
                            <input type="text"  name="UserId" value="1" required  hidden/>
                            <input type="text"  name="Qiimayn" value="0" required  hidden/>
                            <input type="number"  name="xaalad" value="0" required  hidden/>
                            <input type="text"  name="iibsade" value="0" required  hidden/>
                            <button ref={btn_add} className="la_bax" type="submit">  Cusbonaysii</button>
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

export default Upadate_job