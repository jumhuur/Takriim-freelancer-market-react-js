import  NavHolder from "../NavHolder";
import  Footer from "../Footer";
import AsideUser from "./Aside_Profile"
import  SklatonAll from '../skaltons/Jobskalaton';
import Alert_wrong from "../Alert2";
import { Link, useHistory, useParams } from "react-router-dom"
import {useRef, useState } from "react"
import {faFileCircleCheck,faTrashCan,faCloudArrowUp ,faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import {UseAuth } from '../context/authcontext'

function Upadate_job(){
    const {id} = useParams()
    const [good, setgood] = useState()
    const [val , setval] = useState(null)
    const [filename , setfilename] = useState(null)
    const [filezise , setfilezise] = useState(null)
    const [list , setlist] = useState(null)
    const history = useHistory()
    const {crentuser } = UseAuth()

    if(!crentuser){
        history.push('/')
    }

    // states from 
    const [title , settitle] = useState("");
    const [Qiimaha , setQiimaha] = useState("");
    const [Qaybid , setQaybid] = useState("");
    const [Mudada , setMudada] = useState("");
    const [Xadiga , setXadiga] = useState("");
    const [Nooca , setNooca] = useState("");
    const [qodob1aad , setqodob1aad] = useState("");
    const [qodob2aad , setqodob2aad] = useState("");
    const [body , setbody] = useState("");
    const [image , setimage] = useState("");


    const [qalad, setqalad] = useState("");
    const [alertw , setalertw] = useState(false);

    const image01 = useRef();
    const spn_img1 = useRef();
    const progress = useRef();
    const file_icon = useRef()
    const file_icon2 = useRef()
    const btn_add = useRef()
    const foomka = useRef()

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
    const Adddata = async (e) =>{
        e.preventDefault()
        const jobs = {
            title,
             body , 
             Qiimaha ,
             Xadiga ,
             Nooca,
             Mudada , 
             Qaybid, 
             image,
             qodob1aad,
             qodob2aad,        
        }
        const response =  await fetch(`/jobs/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify(jobs),
            headers : {'Content-Type': 'application/json'}
        })
        const json = await response.json()
        if(!response.ok){
            setqalad(json.error)
            console.log(qalad)
            setgood('Waan Ka Xumahay Laguma Guulaysan hawshan')
            setalertw(true)
        }

        if(response.ok){
            setqalad(null)
            history.push('/')
        }

        setTimeout(() => {
            setalertw(false)
        } , 10000)
        
    }




    useEffect(() =>{
        const getlist_qayb = async () =>{
            const data_list = await fetch('/qaybo')
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
        <Alert_wrong alert={alertw} msg={good} />
            {/* aside is here */}
            <AsideUser />
            {/* <!---------------biloga foomka labixida -------------------> */}
            <div className="tranding_haye">
                <div className="rasiid_tamplate">
                    <div className="rasiid">
                        <form ref={foomka} method="put" onSubmit={Adddata} encType="multipart/form-data">
                            <label htmlFor="name">Ciwaanka adegaaga</label>
                            <input  className="la_bax" type="text" name="title" value={title} placeholder="ciwaanka adeegaaga" minLength={20} required maxLength={40} 
                            onChange={(e) => settitle(e.target.value)}
                            />
                            <label htmlFor="qaab">Qaybta Uu Ka Mid Yahay</label>
                            <select className="la_bax" name="Qaybid" 
                                onChange={(e) => setQaybid(e.target.value)}
                                value={Qaybid}
                            >
                               {list && list.map((listdata) =>(
                                    <option key={listdata._id} value={listdata._id}>{listdata.Name}</option>
                               ))}
                            </select>
                            <label htmlFor="qaab">Sawirka 1aad</label>
                            <div className="sawir">
                                <span name="image" ref={spn_img1} onClick={image01_click} className="span_image1"><FontAwesomeIcon icon={faCloudArrowUp} /></span>
                                <input ref={image01} onInput={onchange} className="img_01" type="file" name="image" style={{visibility:"hidden"}} 
                                onChange={(e) => setimage(`/images/${e.target.files[0].name}`)}
                                //value={image}
                                />
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
                            <textarea  name="body" className="add_serv" placeholder="faahfaahin adeegaga" minLength={50} required maxLength={1000}
                            onChange={(e) => setbody(e.target.value)}
                            value={body}
                            ></textarea>
                            <label htmlFor="qaab">Qiimaha Adeega</label>
                            <select className="la_bax" name="Qiimaha" 
                            onChange={(e) => setQiimaha(e.target.value)}
                            value={Qiimaha}
                            
                            >
                                <option value="5.00">5$</option>
                                <option value="6.00">6$</option>
                                <option value="8.00">8$</option>
                                <option value="10.00">10$</option>
                                <option value="15.00">15$</option>
                                <option value="20.00">20$</option>
                                <option value="25.00">25$</option>
                                <option value="30.00">30$</option>
                                <option value="35.00">35$</option>
                                <option value="40.00">40$</option>
                                <option value="45.00">45$</option>
                                <option value="50.00">50$</option>
                                <option value="55.00">55$</option>
                                <option value="60.00">60$</option>
                                <option value="65.00">65$</option>
                                <option value="70.00">70$</option>
                                <option value="75.00">75$</option>
                                <option value="80.00">80$</option>
                                <option value="85.00">85$</option>
                                <option value="90.00">90$</option>
                                <option value="95.00">95$</option>
                                <option value="100.00">100$</option>
                                <option value="150.00">150$</option>
                                <option value="200.00">200$</option>
                                <option value="250.00">250$</option>
                            </select>
                            <label htmlFor="qaab">Xadiga adeega & Nooca</label>
                            <div id="xadiga_nooca">
                                <input type="text" className="xadiga" required name="Xadiga"
                                onChange={(e) => setXadiga(e.target.value)}
                                value={Xadiga}
                                />
                                <select className="la_bax xadiga" name="Nooca"
                                onChange={(e) => setNooca(e.target.value)}
                                value={Nooca}
                                >
                                    <option value="Bog(page)">Bog(page)</option>
                                    <option value="Daqiiqad(minute)">Daqiiqad(minute)</option>
                                    <option value="ilbidhiqsi(seconds)">ilbidhiqsi(seconds)</option>
                                    <option value="Xaraf(lettar)">Xaraf(lettar)</option>
                                    <option value="nashqad(design)">nashqad(design)</option>
                                    <option value="kalmad(word)">kalmad(word)</option>
                                    <option value="Saacad(Saacad(Hour)">Saacad(Hour)</option>
                                    <option value="Saacad(Hour)">Saacad(Hour)</option>
                                    <option value="Sawir(picture)">sawir(picture)</option>
                                    <option value="Buug(Book)">Buug(Book)</option>
                                    <option value="muuqaal(video)">muuqaal(video)</option>
                                    <option value="muuqaal(video)">cod(voice)</option>
                                </select>
                            </div>
                            <label htmlFor="qaab">Mudada adeegan aad ku qabanyso</label>
                            <select className="la_bax" name="Mudada"
                                onChange={(e) => setMudada(e.target.value)}
                                value={Mudada}
                            
                            >
                                <option  value="0.25">6 Saacadood</option>
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
                            <input className="la_bax" type="text" name="qodob1aad" placeholder="waxaan kuu..."  maxLength={35} 
                             onChange={(e) => setqodob1aad(e.target.value)}
                             value={qodob1aad}
                            />                            
                            <input className="la_bax" type="text" name="qodob2aad" placeholder="waxaan kuu ..." maxLength={35}
                            
                            onChange={(e) => setqodob2aad(e.target.value)}
                            value={qodob2aad}
                            />
                            <button ref={btn_add} className="la_bax" type="submit"><FontAwesomeIcon icon={faSquarePlus}></FontAwesomeIcon>  Ku Dar Adeega</button>
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