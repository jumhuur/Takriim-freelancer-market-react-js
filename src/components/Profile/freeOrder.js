import Holder from "../NavHolder"
import Footer from "../Footer"
import Jobskl from "../skaltons/Jobskalaton";
import Sklall from "../skaltons/sklAll";
import { Link, useHistory, useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {getFirestore,getDoc, doc, updateDoc } from "firebase/firestore";
import { faShieldHalved,faCircleCheck , faAngleDown , faCircleXmark ,faDownload  , faEnvelope, faEarthAfrica , faFileCircleCheck,faTrashCan,faCloudArrowUp ,faSquarePlus ,faArrowsSpin , faFileZipper} from "@fortawesome/free-solid-svg-icons";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {Storage} from "../../Firebase";
import Loading from "../loading";
import { FaRoute } from "react-icons/fa";
function My_Orders(){
    const {id} = useParams()
    const {userid} = useParams()
    const [jobfree, setjobfree] = useState(null)
    const [bayer, setbayer] = useState(null)
    const [xaalad, setxaalad] = useState('')
    const [image, setimage] = useState("")
    const done = "Done";

    // loading
    const [load, setload] = useState(false)
    const loading_handale = () => {
        load ? setload(false) : setload(true)
    }

    // gudbin sttings 
    const [filename , setfilename] = useState(null)
    const [filezise , setfilezise] = useState(null)
    const [filextan, setfilextan] = useState(null)

    const image01 = useRef();
    const spn_img1 = useRef();
    const progress = useRef();
    const file_icon = useRef();
    const file_icon2 = useRef();


    const history = useHistory()

        // get data job 
        const db = getFirestore()
        const docref = doc(db, "Orders" , id)
        //const q = query(colref)    
        function  getonorder(){
            getDoc(docref)
            .then((doc) => {
                setjobfree({...doc.data(), id:doc.id})
            })
        }

        const bayerCol = doc(db, "Users" , userid)
        //const q = query(colref)    
        function  getpayerinfo(){
            getDoc(bayerCol)
            .then((doc) => {
                setbayer({...doc.data(), id:doc.id})
            })
        }


        useEffect(() => {
            getonorder()   
            getpayerinfo()  
        }, [jobfree])


    // udate job (qiimayn & iibsade)
    function update_Order(){
        const jobref =  doc(db, "Orders", id)
        updateDoc (jobref, {
            xaalad,
        })
        .then(() => {
            setload(false)
            setxaalad("2")
        })
    }

    function update_done(){
        const jobref =  doc(db, "Orders", id)
        const xaalad = done
        updateDoc (jobref, {
            xaalad,
            image
        })
        .then(() => {
            setload(false)
        })
    }
    const update_xaalad = async (e) => {
        e.preventDefault()
        update_Order()
    }

    const update_xaalad_done = async (e) => {
        e.preventDefault()
        update_done()
    }



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
        setimagestate(false)
    }

    function onchange({target}){
        let file = target.files[0];
        const extantionfile = file.name.indexOf('.')
        if(file){
            let file_name = file.name.substring(0,30);
            let file_zise = file.size / 1024 / 1024
            setfilename(file_name.substring(0,30))
            setfilextan(file_name.slice(extantionfile,))
            setfilezise(`${file_zise.toFixed(2)} MB`)
            uploadFile(file_name)
            progress.current.classList.add('progress')
            //progress.current.innerHTM
            file_icon.current.classList.remove('active')
            file_icon2.current.classList.remove('active')
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
     const xaalad1aad = "1"
     const xaalad2aad = "2"
     const xaalad3aad = "3"

     const [prog,setprog] = useState()
     const [imagestate ,setimagestate] = useState(false)

    const upload_image_progile = async () => {
         const storageRef = ref(Storage, `Orders/${Date.now()}${image}${filextan}`);
 
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
                 setimagestate(true)
             });
         }
         );
    }
    return(
    <>
    <Loading loading={load}/>
    <div>
        <Holder />
        <section className="main_shaqo">
        <div className="xajiye">
        {jobfree ? 
        <div className="shao_macluumad_dhan">
                <div className="qayb_ sawiro">
                    <div className="head_job">
                        <div className="title">
                            {/* <h2>{jobfree.title}</h2> */}
                        </div>                 
                    </div>
                    <div className="faahfaahin_sho">
                        <h2 className="order_details"><i className="fa-solid fa-bars"></i> Fariinta Iibsadaha (Customer Note)</h2>
                        <p> {jobfree.Loobahanyahay}</p>
                    </div>
                    {/* <!---------Bilowga macluumaad raacsan ----------------------------> */}
                    {jobfree.xaalad == "0" ?
                    <div className="tranding_haye">
                        <div className="rasiid_tamplate">
                            <div className="rasiid info_raacsan">
                                <h2 className="ciwaan_bahanahay">Xaalada dalabkan <span className="x_dalab noaqbal"> <FontAwesomeIcon icon={faArrowsSpin} /> Maad Aqbalin</span> </h2>
                                {/* <!-- <p className="info_dalab_p">
                                </p> --> */}
                                {jobfree.image == "" ? 
                                <>
                                <img className="notimg_sawir" src="/images/fileorder.svg" alt="saiw"/>
                                <h2 className="ciwaan_bahanahay2 notimg">Lama Soo Racin File ama Sawir</h2>
                                </>
                                : 
                                <>
                                <h2 className="ciwaan_bahanahay2">File Ama Sawir La Soo Raaciyay <FontAwesomeIcon icon={faAngleDown}/> :</h2>
                                <a href={jobfree.image} download className="link_mirfaq">(Download Now) dajiso Hada  <FontAwesomeIcon icon={faDownload} /></a>
                                </>
                                }
                            </div>
                        </div>
                    </div>
                    :jobfree.xaalad == "1" ?
                    <div className="tranding_haye">
                    <div className="rasiid_tamplate">
                        <div className="rasiid info_raacsan">
                        <h2 className="ciwaan_bahanahay">Xaalada dalabkan <span className="x_dalab socda"> <FontAwesomeIcon icon={faArrowsSpin} /> Wad Wadaa</span> </h2>
                            {/* <!-- <p className="info_dalab_p">
                            </p> --> */}
                            {jobfree.image == "" ? 
                            <>
                            <img className="notimg_sawir" src="/images/Process.svg" alt="saiw"/>
                            <h2 className="ciwaan_bahanahay2 notimg">Lama Soo Racin File ama Sawir</h2>
                            </>
                            : 
                            <>
                            <img className="notimg_sawir" src="/images/Process.svg" alt="saiw"/>
                            <h2 className="ciwaan_bahanahay2">File Ama Sawir La Soo Raaciyay  <FontAwesomeIcon icon={faAngleDown}/> </h2>
                            <a href={jobfree.image} download className="link_mirfaq Wadaa">(Download Now) dajiso Hada  <FontAwesomeIcon icon={faDownload} /></a>
                            </>
                            }
                        </div>
                    </div>
                    </div>
                    :jobfree.xaalad == "3" ?
                    <div className="tranding_haye">
                    <div className="rasiid_tamplate">
                        <div className="rasiid info_raacsan">
                            <h2 className="ciwaan_bahanahay">Xaalada dalabkan <span className="x_dalab kansal"> <FontAwesomeIcon icon={faArrowsSpin} />Laga Laabtay</span> </h2>
                            {/* <!-- <p className="info_dalab_p">
                            <i class="faArrowsSpin"></i>
                            </p> --> */}
                            {jobfree.image == "" ? 
                            <>
                            <img className="notimg_sawir" src="/images/fileorder.svg" alt="saiw"/>
                            <h2 className="ciwaan_bahanahay2 notimg">Lama Soo Racin File ama Sawir</h2>
                            </>
                            : 
                            <>
                            <h2 className="ciwaan_bahanahay2">File Ama Sawir La Soo Raaciyay <FontAwesomeIcon icon={faAngleDown}/> :</h2>
                            <a href={jobfree.image} download className="link_mirfaq">(Download Now) dajiso Hada  <FontAwesomeIcon icon={faDownload} /></a>
                            </>
                            }
                        </div>
                    </div>
                </div>
                    :jobfree.xaalad == "Done" ?
                    <div className="tranding_haye">
                    <div className="rasiid_tamplate">
                        <div className="rasiid info_raacsan">
                            <h2 className="ciwaan_bahanahay">Dalabkan waad dhamaysay <span></span></h2>
                            {/* <!-- <p className="info_dalab_p">
                            </p> --> */}
                            <h2 className="ciwaan_bahanahay2">Halkan Hoose Waa mashruucii aad fulisay <FontAwesomeIcon icon={faAngleDown}/> :</h2>
                            <a href={jobfree.image} download className="link_mirfaq">(Download Now) dajiso Hada  <FontAwesomeIcon icon={faDownload} /></a>
                        </div>
                    </div>
                    </div>
                    :
                    <div className="rasiid_tamplate">
                    <div className="rasiid">
                        <p className="info_dalab_p">
                            Xaga Hoose ugu upload-garee mashruuca aad u dhamaysay si uu ula dago macmiilku Waxaana Fiican inaad isticmaasho zip file
                        </p>
                        <form className="lacag_bixinta" method="put" onSubmit={update_xaalad_done}>
                            <label htmlFor="qaab">Fileka Aad Usoo Qaadaysaa Ha Noqodo Zip file </label>
                            <div className="sawir">
                                <span ref={spn_img1} onClick={image01_click} className="span_image1">
                                {imagestate ?
                                <FontAwesomeIcon icon={faCircleCheck} className="done_icon" />
                                :
                                <FontAwesomeIcon icon={faCloudArrowUp} />
                                }  
                                </span>
                                <input ref={image01} onInput={onchange} className="img_01" type="file" name="image" style={{visibility:"hidden"}} required 
                                onChange={
                                    function(e){
                                        setimage(`${e.target.files[0].name}`)
                                        upload_image_progile()
                                    }
                                }
                                />
                                <input type={"text"} required value={done} name="xaalad" style={{visibility:"hidden"}}  accept="image/*,.pdf"/>
                                {/* <!----------upload file and image --> */}
                                <div ref={progress} className="upload">
                                    <div ref={file_icon} className="file_icon active">
                                    {imagestate ?
                                    <FontAwesomeIcon icon={faFileCircleCheck} className="done_icon" />
                                    :
                                    <FontAwesomeIcon icon={faFileZipper} />
                                    }
                                    </div>
                                    <div className="file_name_and_zise">
                                        <div className="macluumaad">
                                            <h2>{filename}  {filezise} - {prog && prog.toFixed(1)}%</h2>
                                        </div>
                                        <div className="progerss_two">
                                            <div className={imagestate ? "line Done_upl" : "line"} style={{width: `${prog}%`}}>

                                            </div>
                                        </div>
                                    </div>
                                    <div ref={file_icon2} className="file_icon delete active" onClick={xidh}>
                                    {imagestate ? 
                                            <FontAwesomeIcon icon={faTrashCan} className="done_icon" />
                                            :
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        }
                                    </div>
                                </div>
                                {/* <!----------upload file and image --> */}
                            </div>
                            <textarea name="faahfaahin" className="add_serv" placeholder="Macluumadka Oo Dhan Halkan Ku Qor" required></textarea>
                            <button onClick={loading_handale} className="la_bax" type="submit"><FontAwesomeIcon icon={faSquarePlus} /> Gudbi Dalabka </button>
                        </form>
                    </div>
                    </div>
                }
                    {/* <!---------dhamaadka macluumaad raacsan -------------------------> */}

                </div>
                
                <div className="qayb_ macluumo">
                    <div className="top_mac">
                        <h2>Macluumadka Dalabkan</h2>
                    </div>
                    <div className="basic_info">
                        <h2>USD $<span>{jobfree && jobfree.Qiimaha}</span></h2> 
                        <p>
                            Waa Qiimaha Iibsaduhu Gaadhsiiyay
                        </p>
                        <div className="more_info">
                            <ul>
                                <li> <FontAwesomeIcon className="i" icon={faCircleCheck} /> Mudada : <span>{jobfree && jobfree.Mudada}</span> Maalmood</li>
                                <li>  <FontAwesomeIcon className="i" icon={faCircleCheck} /> Xadiga : <span>{jobfree && jobfree.Xadiga}</span> {jobfree && jobfree.Nooca}</li>
                                <li>  <FontAwesomeIcon className="i" icon={faCircleCheck} /> {jobfree && jobfree.Qodobka1aad} </li>
                                <li>  <FontAwesomeIcon className="i" icon={faCircleCheck} /> {jobfree && jobfree.Qodobka2aad} </li>
                                {
                                    jobfree.xaalad == "Done" ?
                                    <li> <FontAwesomeIcon className="i" icon={faShieldHalved} /> Ma Gudoomay ? : {jobfree.gudoomay? "Haa" : "Maya"} </li>
                                    :
                                    ""
                                }
                                
                            </ul>
                            <form method="put" onSubmit={update_xaalad}>
                                {jobfree.xaalad == "0" ?
                                <div>
                                <div className="xaalad">
                                    <div className="x_1aad">
                                    <input value="1" id="Bilaabay" type="radio" required name="xaalad"
                                    onClick={(e) => setxaalad(xaalad1aad, console.log(xaalad))}
                                    />
                                    <label htmlFor="Bilaabay">Waan Bilaabay</label>
                                    </div>
                                    <div className="x_1aad">
                                    <input value="3" id="laabtay" type="radio" required name="xaalad" 
                                    onClick={(e) => setxaalad(xaalad3aad ,  console.log(xaalad))}
                                    />
                                    <label htmlFor="laabtay">Ka Laabo Shaqada</label>
                                    </div>
                                </div>
                                    <button  onClick={loading_handale} type="submit">Cusbonaysii Xaalada</button>
                                </div>
                        
                                :jobfree.xaalad == "1" ?
                                <div>
                                <div className="xaalad">
                                    <div className="x_1aad">
                                    <input value={xaalad2aad} id="Bilaabay" type="radio" required name="xaalad"
                                    onClick={(e) => setxaalad(xaalad2aad)}
                                    />
                                    <label htmlFor="Bilaabay">Waan Dhameeyay</label>
                                    </div>
                                    <div className="x_1aad">
                                    <input value="3" id="laabtay" type="radio" required name="xaalad" 
                                    onClick={(e) => setxaalad(xaalad3aad)}
                                    />
                                    <label htmlFor="laabtay">Ka Laabo Shaqada</label>
                                    </div>
                                </div>
                                <button type="submit" onClick={loading_handale}>Cusbonaysii Xalada</button>
                                </div>
                                :jobfree.xaalad == "2" ||  jobfree.xaalad == "Done" ?
                                <di>
                                <p><FontAwesomeIcon icon={faCircleCheck} /> Waad Dhamaysay dalabkan</p>
                                </di>
                                :
                                <div>
                                <p><FontAwesomeIcon icon={faCircleXmark} /> Waad ka Laabatay Dalabkan</p>
                                </div>
                                }
                            </form>
                        </div>

                        {/* <div className="iibiye_info">
                            <div className="sir">
                                <img src={bayer && bayer.Image} />
                            </div>
                            <div className="info_seller">
                                <a href="">
                                    <h2>{bayer && bayer.Name}</h2>
                                </a>
                                
                                <p><FontAwesomeIcon icon={faUser} className="i" /> {bayer && bayer.Nooc}  <FontAwesomeIcon icon={faEarthAfrica} className="i" /> {bayer && bayer.Magaalada}</p>
                                <a href="/chat.html">
                                    <button><FontAwesomeIcon icon={faMessage} /> La xidhiidh</button>
                                </a>

                            </div>

                        </div> */}
                    <div className="iibiye_info">
                        <img id="la_xaqiijiyay" src="/images/tawsiiq.svg" alt="tawqsiiq" title="Waa La Xaqiijiyay" />
                        <div className="sir">
                            <img src={bayer ? bayer.Image :"/images/avatar.jpg"} />
                        </div>
                        <div className="info_seller">
                            {bayer ?  <Link to={'#'}>
                                <h2> {bayer ? bayer.Name :"unknown user"}</h2>
                            </Link> : ""}
                            
                            <p>  {bayer ? bayer.Nooc  :  "unknown Description"}</p>
                            <p>  <FontAwesomeIcon icon={faEarthAfrica} /> Wadanka {bayer ? bayer.Magaalada :  "unknown Description"}</p>
                            {bayer ? <Link to={`/Chat`}>
                                <button><FontAwesomeIcon icon={faEnvelope} /> La xidhiidh </button>
                            </Link> :""}
                        </div>

                    </div>
                    </div>
                </div>
        </div>
        : <Sklall />}
        </div>
        </section>
        <Footer />
    </div>
    </>
    )
}


export default My_Orders