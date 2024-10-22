import AsideUser from "./Aside_Profile"
import Holder from "../NavHolder"
import Footer from "../Footer"
import  SklatonAll from '../skaltons/Jobskalaton';
import { Link, useHistory, useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import {faFileCircleCheck,faTrashCan,faCloudArrowUp ,faSquarePlus,faCircleCheck,faFileZipper} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {UseAuth} from "../context/authcontext"
import {useDatacontext} from "../context/dataContext"
import {getFirestore,getDoc, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {Storage} from "../../Firebase";
import Loading from "../loading";
function OrderDetailscheckh(){
    const {id} = useParams()
    const [order, setorder] = useState(null)
    const [filename , setfilename] = useState(null)
    const [filezise , setfilezise] = useState(null)
    const [filextan, setfilextan] = useState(null)
    const [PaymentType, setPaymentTaype] = useState('Zaad')
    const {crentuser , add_order, add_nativations_user} = UseAuth()
    const {xadiga} = useDatacontext()
    const path = `/Order/Complated/${id}`
    const mypath = useHistory()
    // oagaysiis
    const nooca_nat = "0";
    const user_uid = sessionStorage.getItem('user_uid')
    const [c_user, setc_user] = useState('')
    const count = c_user.aler_count + 1


    // loading
    const [load, setload] = useState(false)
    const loading_handale = () => {
        load ? setload(false) : setload(true)
        console.log(load)
    }

    // foomka 
    const title = order && order.title
    const Qiimaha =  window.localStorage.getItem('Q')
    const Dalbade_id =  crentuser && crentuser.uid
    const Mudada =  Number(window.localStorage.getItem('M'))
    const UserId =  order && order.UserId
    const Xadiga = window.localStorage.getItem('X')
    const Nooca =  order && order.Nooca
    const xaalad =  order && order.xaalad
    const Qodobka1aad =  order && order.qodob1aad
    const Qodobka2aad =  order && order.qodob2aad
    const Jobid =  id
    const Qaybid = order && order.Qaybid
    const [Loobahanyahay , setLoobahanyahay] = useState("")
    const [lanbarka , setlanbarka] = useState("")
    const [gudoomay , setgudoomay] = useState(false)
    const [image , setimage] = useState("")
    const path_kale = useHistory()


    const image01 = useRef();
    const spn_img1 = useRef();
    const progress = useRef();
    const file_icon = useRef()
    const file_icon2 = useRef()

        if(!crentuser){
            path_kale.push("/Acount/login")
        }

    // get data job 
    const db = getFirestore()
    const docref = doc(db, "Jobs" , id)
    //const q = query(colref)    
    function  getsingalejob(){
        getDoc(docref)
        .then((doc) => {
            setorder(doc.data())
        })
    }

    const Userref_r = doc(db, "Users" , user_uid)
    //const q = query(colref)    
    function  get_user_cren(){
        getDoc(Userref_r)
        .then((doc) => {
            setc_user({...doc.data(), id:doc.id})
        })
    }

    function update_aler(){
        const alert_ref = doc(db, "Users", user_uid)
        updateDoc(alert_ref, {
            aler_count:Number(count)
        })
    }
    useEffect(function(){
        getsingalejob()
        get_user_cren()

    }, [])


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
            setfilename(file_name.substring(-1,30))
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


    const add_your_order = async (e) =>{
        e.preventDefault()
        try{

            await add_order(
                Loobahanyahay,
                lanbarka,
                image,
                gudoomay,
                title,
                Qiimaha,
                Dalbade_id,
                UserId,
                Qaybid,
                Jobid,
                Mudada,
                Xadiga,
                Nooca,
                xaalad,
                Qodobka1aad,
                Qodobka2aad,
            )


            await add_nativations_user(
                nooca_nat,
                UserId,
                title,
            )

            // update alert
            update_aler()

            




            mypath.push(`/Order/Complated/${id}`)
            setimagestate(false)


        } catch(err){
            console.log(err)
        }
    }

    const [prog,setprog] = useState()
    const [imagestate ,setimagestate] = useState(false)

    const upload_image_progile = async () => {
        const storageRef = ref(Storage, `items/${Date.now()}${image}${filextan}`);

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
        <div>
        <Loading loading={load}/>
        <Holder />
        <section className="orders invocs">
            <div className="xajiye kala_qayb">
                <AsideUser />
                {/* <!---------------biloga foomka labixida -------------------> */}
            {order ? <div className="tranding_haye">
                <div className="rasiid_tamplate">
                    <div className="rasiid">
                        <h2 className="ciwaan_bahanahay">{order.title}:</h2>
                        <p className="info_dalab_p">
                            waxaan kaaga baahanahay inaad ii soo dirto waxayabahan hoose 
                            fadalan ii soo raaci dalbkaaga 
                            waxaan kaaga 
                            waxaan kaaga baahanahay inaad ii soo dirto waxayabahan hoose 
                            fadalan ii soo raaci dalbkaaga 
                            waxaan kaaga 
                            waxaan kaaga baahanahay inaad ii soo dirto waxayabahan hoose 
                            fadalan ii soo raaci dalbkaaga 
                            waxaan kaaga 
                            waxaan kaaga baahanahay inaad ii soo dirto waxayabahan hoose 
                            fadalan ii soo raaci dalbkaaga 
                            waxaan kaaga 

                        </p>
                        <form className="lacag_bixinta" method="POST" onSubmit={add_your_order} action={path}>
                            <label htmlFor="qaab">Faahfaahinta Adeega</label>
                            <textarea name="Loobahanyahay" className="add_serv" placeholder="Macluumadka Oo Dhan Halkan Ku Qor" required
                            onChange={(e) => setLoobahanyahay(e.target.value)}
                            value={Loobahanyahay}
                            ></textarea>
                            <label htmlFor="qaab">Hadii file ama sawir iwm aad raacinayso</label>
                            <div className="sawir">
                                <span ref={spn_img1} onClick={image01_click} className="span_image1">
                                {imagestate ?
                                <FontAwesomeIcon icon={faCircleCheck} className="done_icon" />
                                :
                                <FontAwesomeIcon icon={faCloudArrowUp} />
                                }   
                                
                                </span>
                                <input ref={image01} onInput={onchange} className="img_01" type="file" name="sawir1aad" style={{visibility:"hidden"}} 
                                        onChange={
                                            function(e){
                                                setimage(`${e.target.files[0].name}`)
                                                upload_image_progile()

                                            }
                                        }
                                        //value={image}
                                />
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
                                            <h2>{filename}  {filezise}</h2>
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
                                <label>Dooro Qaabka Lacag Bixinta</label>
                                    <select   className="lacag_bixin" name="shirkad"
                                    onChange={
                                        function(e){
                                            setPaymentTaype(e.target.value)
                                            console.log(PaymentType)
                                        }
                                    }
                                    
                                    >
                                        <option value="zaad">
                                            zaad service
                                        </option>
                                        <option value="edahab">
                                            edahab service
                                        </option>
                                        <option value="Paypal">
                                            Paypal
                                        </option>
                                    </select>
                                {PaymentType == "Zaad" ?
                                <input className="lacag_bixin" type="text" required placeholder="Lanbaraakag" name="lanbarka"
                                onChange={(e) => setlanbarka(e.target.value)}
                                value={lanbarka}
                                />
                                :PaymentType == "edahab" ?
                                <input className="lacag_bixin" type="text" required placeholder="Lanbaraakag" name="lanbarka"
                                onChange={(e) => setlanbarka(e.target.value)}
                                value={lanbarka}
                                />

                                :PaymentType == "Paypal"?
                                <button>Pay Now </button>
                                :<></>
                                }    
                            </div>
                            <input type="hidden" value={Mudada}   name="Mudada"/>
                            <input type="hidden" value={Xadiga}  name="xadiga"/>
                            <input type="hidden" value={Qiimaha}  name="Qiimaha"/>
                            <input type="hidden" value={order.title} name="title"/>
                            <input type="hidden" value={order.Dalbade_id}  name="Dalbade_id"/>
                            <input type="hidden" value={order.UserId} name="UserId"/>
                            <input type="hidden" value={order.Nooca}  name="Nooca"/>
                            <input type="hidden" value={order.xaalad} name="xaalad"/>
                            <input type="hidden" value={Jobid}  name="Jobid"/>
                            <input type="hidden" value={order.qodob2aad}  name="Qodobka2aad"/>
                            <input type="hidden" value={order.qodob1aad}  name="Qodobka1aad"/>
                            <input type="hidden" value={gudoomay}  name="gudoomay"/>
                            <button onClick={loading_handale} className="la_bax" type="submit"><FontAwesomeIcon icon={faSquarePlus} />  Bixi Lacagta ({Qiimaha}$)</button>
                            <p className="la_bax"><i className="fa-solid fa-bell"></i> Macluumaadkan waa u muhiim qofka shaqada kuu qabanaya fadalan buuxi</p>
                        </form>
                        
                    </div>
                </div>
            </div> : <SklatonAll />}
            {/* <!---------------dhamaadka  foomka labixida -------------------> */}
                
            </div>
        </section>
        <Footer />
        </div>
    )
}


export default OrderDetailscheckh