import  NavHolder from "../NavHolder";
import  Footer from "../Footer";
import AsideUser from "./Aside_Profile"
import  SklatonAll from '../skaltons/Jobskalaton';
import Alert_wrong from "../Alert2";
import { Link, useHistory } from "react-router-dom"
import {useRef, useState } from "react"
import {faFileCircleCheck,faTrashCan,faCloudArrowUp ,faSquarePlus , faFilm, faImage} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import {UseAuth } from '../context/authcontext'
import { collection,getFirestore, query, onSnapshot, limit, orderBy } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {Storage} from "../../Firebase";
import { FaFontAwesome } from "react-icons/fa";

function Add_servece(){
    const [good, setgood] = useState()
    const [filename , setfilename] = useState(null)
    const [filezise , setfilezise] = useState(null)
    const [list , setlist] = useState(null)
    const [media, setmedia] = useState();
    const history = useHistory()
    const {crentuser,Add_job } = UseAuth()

    // states from 
    const [title , settitle] = useState("")
    const [Qiimaha , setQiimaha] = useState("5.00")
    const [Qaybid , setQaybid] = useState("62b6cf1b1ef353ae79459850")
    const [Mudada , setMudada] = useState("0.25")
    const UserId = crentuser && crentuser.uid
    const [Xadiga , setXadiga] = useState("")
    const [Nooca , setNooca] = useState("Bog(page)")
    const [xaalad , setxaalad] = useState(0)
    const [qodob1aad , setqodob1aad] = useState("")
    const [qodob2aad , setqodob2aad] = useState("")
    const [body , setbody] = useState("")
    const [iibsade , setiibsade] = useState("0")
    const [Qiimayn , setQiimayn] = useState("0")
    const [image , setimage] = useState("/images/asalahaan.png")
    const [Video, setVideo] = useState('0')
    const [qalad, setqalad] = useState("")
    const [alertw , setalertw] = useState(false);
    const [prog,setprog] = useState()

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
        if(media == "Muuqaal"){
            setVideo(file)
        } else {
            setimage(file)
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
        try {
        await Add_job(
            title,
             body ,
             image,
             Video,
             Qiimaha ,
             Qiimayn ,
             Xadiga ,
             Nooca,
             Qaybid, 
             Mudada , 
             iibsade,
             xaalad,
             qodob1aad,
             qodob2aad, 
             UserId,
        )
        history.push('/')
        } catch(err){
            console.log(err)
        }
        
    }
    //get data user 
    const db = getFirestore()
    const colref = collection(db, "Qaybo")
    const q = query(colref, limit(8), orderBy("CreatedAt"))    
    //hellida docs 
    async function  getlist_qayb(){
        onSnapshot (q, (snapshot) => {
            const Dhaq1aad = []
            snapshot.docs.forEach((doc) => {
                Dhaq1aad.push({...doc.data(), id:doc.id})
            })
            setlist(Dhaq1aad)
        })
    }

    const upload_image_progile = async () => {
        const storageRef = ref(Storage, `${Date.now()}${image}`);

        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setprog(progress)
            switch (snapshot.state) {
            case 'paused':
                break;
            case 'running':
                break;
            }
        }, 
        (error) => {
            console.log(error)
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setimage(downloadURL)
            });
        }
        );
    }

    const upload_video = async () => {
        const storageRef = ref(Storage, `${Date.now()}${Video}`);

        const uploadTask = uploadBytesResumable(storageRef, Video);
        uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setprog(progress)
            switch (snapshot.state) {
            case 'paused':
                break;
            case 'running':
                break;
            }
        }, 
        (error) => {
            console.log(error)
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setVideo(downloadURL)
            });
        }
        );
    }




    useEffect(() =>{
        getlist_qayb()
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
                        <form action="/" ref={foomka} method="post" onSubmit={Adddata} encType="multipart/form-data">
                            <label htmlFor="name">Ciwaanka adegaaga</label>
                            <input  value={title} className="la_bax" type="text" name="title" placeholder="ciwaanka adeegaaga" minLength={20} required maxLength={40} 
                            onChange={(e) => settitle(e.target.value)}
                            //value={title}
                            />
                            <label htmlFor="qaab">Qaybta Uu Ka Mid Yahay</label>
                            <select className="la_bax" name="Qaybid" 
                                onChange={(e) => setQaybid(e.target.value)}
                                value={Qaybid}
                            >
                               {list && list.map((listdata) =>(
                                    <option key={listdata.id} value={listdata.id}>{listdata.Name}</option>
                               ))}
                            </select>
                            <label htmlFor="qaab">Sawirka Ama Muuqaal</label>
                            <div className="option_mdeia">
                                <input id="muuqaal" type="radio" required name="media"  value="Muuqaal"
                                onClick={(e) => setmedia(e.target.value)}
                                />
                                <label  htmlFor="muuqaal"> <FontAwesomeIcon icon={faFilm}/> Muuqaal</label> 
                                <input id="sawir" type="radio" required name="media" value="sawir"
                                onClick={(e) => setmedia(e.target.value)}
                                />
                                <label htmlFor="sawir"><FontAwesomeIcon icon={faImage}/> Sawir</label>
                            </div>
                            {media == "Muuqaal" ? 
                            <div className="sawir">
                            <span name="image" ref={spn_img1} onClick={image01_click} className="span_image1"><FontAwesomeIcon icon={faFilm} />
                            </span>
                            <input ref={image01} onInput={onchange} className="img_01" type="file" name="image" style={{visibility:"hidden"}} 
                            onChange={
                                function(e){
                                    setVideo(`${e.target.files[0].name}`)
                                    upload_video()
                                }

                            }

                            accept="video/*"
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
                                        <div className="line" style={{width: `${prog}%`}}>

                                        </div>
                                    </div>
                                </div>
                                <div ref={file_icon2} className="file_icon delete active" onClick={xidh}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                </div>
                            </div>
                            {/* <!----------upload file and image --> */}
                            </div>
                            : media == "sawir" ? 
                            <div className="sawir">
                                <span name="image" ref={spn_img1} onClick={image01_click} className="span_image1"><FontAwesomeIcon icon={faImage} /></span>
                                <input ref={image01} onInput={onchange} className="img_01" type="file" name="image" style={{visibility:"hidden"}} 
                                onChange={
                                    function(e){
                                        setimage(`${e.target.files[0].name}`)
                                        upload_image_progile()
                                    }

                                }

                                accept="image/*"
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
                                            <div className="line" style={{width: `${prog}%`}}>

                                            </div>
                                        </div>
                                    </div>
                                    <div ref={file_icon2} className="file_icon delete active" onClick={xidh}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                    </div>
                                </div>
                                {/* <!----------upload file and image --> */}
                            </div>
                            :<></>
                            }

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
                                    <option value="Mushkilad(Proplem)">Mushkilad(Proplem)</option>
                                </select>
                            </div>
                            <label htmlFor="qaab">Mudada adeegan aad ku qabanyso</label>
                            <select className="la_bax" name="Mudada"
                                onChange={(e) => setMudada(e.target.value)}
                                value={Mudada}
                            
                            >
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
                            { crentuser && 
                            <input type="text"  name="UserId" value={UserId} required  hidden />
                            }

                            <input type="text"  name="Qiimayn" value={Qiimayn} required  hidden
                            onChange={(e) => setQiimayn(e.target.value)}
                             />
                            <input type="number"  name="xaalad" value={xaalad} required  hidden
                            onChange={(e) => setxaalad(e.target.value)}
                            />
                            <input type="text"  name="iibsade" value={iibsade} required  hidden
                            onChange={(e) => setiibsade(e.target.value)}
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

export default Add_servece