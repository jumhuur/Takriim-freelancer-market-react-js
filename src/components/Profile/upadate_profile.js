import  NavHolder from "../NavHolder";
import  Footer from "../Footer";
import AsideUser from "./Aside_Profile"
import  SklatonAll from '../skaltons/Jobskalaton';
import { Link, useParams , useHistory } from "react-router-dom"
import {useRef, useState } from "react"
import {faFileCircleCheck,faTrashCan,faCloudArrowUp ,faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import {UseAuth } from '../context/authcontext'
import {Storage} from "../../Firebase";
import { collection,getFirestore, query, onSnapshot, limit, orderBy, doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
function Upadate_profile(){
    const [filename , setfilename] = useState(null)
    const [filezise , setfilezise] = useState(null)
    const [list , setlist] = useState(null)
    const [val , setval] = useState(null)
    const {id} = useParams()
    const {crentuser} = UseAuth()
    const history = useHistory()
    const [prog, setprog] = useState();



    // akoon info
    useEffect(() => {
        if(crentuser){
            setname(`${val && val.Name}`)
            setNooc(`${val && val.Nooc}`) 
            setMagaalada(`${val && val.Magaalada}`)
            setImage(`${val && val.Image}`) 
            setInfo(`${val && val.info}`)
            setTalefan(`${val && val.Talefan}`) 
            setJinsi(`${val && val.Jinsi}`) 
        }

    },[val, crentuser])



    const [Name, setname] = useState('')
    const [Nooc, setNooc] = useState('')
    const [Magaalada, setMagaalada] = useState('')
    const [Image, setImage] = useState('')
    const [info, setInfo] = useState('')
    const [Talefan, setTalefan] = useState('')
    const [Jinsi, setJinsi] = useState('')

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
            setImage(file)
        }
    }

    function uploadFile(name){
        let codsi = new XMLHttpRequest();
        codsi.open('POST' , "php/upload.php")
        codsi.upload.addEventListener('progress', (e) =>{
            console.log(e)
        })
    }

    // get marka hore
    const db = getFirestore()
    const docref = doc(db, "Users" , id)  
    function  get_on_user(){
        getDoc(docref)
        .then((doc) => {
            setval({...doc.data(), id:doc.id})
        })
    }


    function update_Akoon(){
        const dcolref =  doc(db, "Users", id)
        updateDoc(dcolref, {
            Name, 
            Nooc, 
            Image, 
            Magaalada, 
            info,
            Talefan,
            Jinsi
        })

        history.push("/")
    }
    const Adddata = async (e) =>{
        e.preventDefault()
        update_Akoon()
    }

    //upload image 
    const upload_image_progile = async () => {
        const storageRef = ref(Storage, `${val.uid}${Image}`);

        const uploadTask = uploadBytesResumable(storageRef, Image);
        uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
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
            console.log('File available at', downloadURL);
            setImage(downloadURL)
            });
        }
        );
    }
    

    useEffect(() => {
        get_on_user()
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
                        <form method="POST" onSubmit={Adddata}>
                            <label htmlFor="name">Magacaaga Iyo Ka Aabhaa</label>
                            <input className="la_bax" type="text" name="Magaca" value={Name} placeholder="ciwaanka adeegaaga" minLength={5} required maxLength={15} 
                            onChange ={(e) => setname(e.target.value)}
                            />
                            <label htmlFor="qaab">Nooca Akoonkaaga</label>
                            <select  value={Nooc} className="la_bax" name="Nooc" onChange ={(e) => setNooc(e.target.value)} >
                                <option>
                                    Takriim User
                                </option>
                                <option>
                                    frelancer
                                </option>
                            </select>
                            <label htmlFor="name">Lanbarkaag</label>
                            <input className="la_bax" type="text" value={Talefan} name="qodob1aad" placeholder="063-4xxxxxx"  maxLength={10}
                            onChange ={(e) => setTalefan(e.target.value)}
                            /> 
                            <label htmlFor="name">Shaqadaad</label>
                            <input className="la_bax" type="text" value={info} name="qodob2aad" placeholder="Designer" maxLength={35}
                            onChange ={(e) => setInfo(e.target.value)}
                            
                            />
                            <label htmlFor="qaab">Sawirka Akoonkaag</label>
                            <div className="sawir">
                                <span name="image" ref={spn_img1} onClick={image01_click} className="span_image1"><FontAwesomeIcon icon={faCloudArrowUp} /></span>
                                <input ref={image01} onInput={onchange} className="img_01" type="file" name="sawir1aad" style={{visibility:"hidden"}} 
                                onChange={
                                function(e){
                                    setImage(e.target.files[0].name)
                                    upload_image_progile()
                                }
                                }


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
                            <label htmlFor="qaab">Magaalada & jinsigaaga</label>
                            <div id="xadiga_nooca">
                                <input type="text" value={Magaalada} className="xadiga" required name="Xadiga"
                                onChange ={(e) => setMagaalada(e.target.value)}
                                />
                                <select className="la_bax xadiga" value={Jinsi} name="Nooca"
                                onChange ={(e) => setJinsi(e.target.value)}
                                >
                                    <option value="lab">Lab</option>
                                    <option value="Dhedig">Dhedig</option>
                                </select>
                            </div>
                            <button ref={btn_add} className="la_bax" type="submit">  Cusbonaysii</button>
                            <p className="la_bax"><i className="fa-solid fa-bell"></i> Macluumaadka akoonkaaga qaar ayaa ka soo muqanaya prifile-kaag</p>
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

export default Upadate_profile