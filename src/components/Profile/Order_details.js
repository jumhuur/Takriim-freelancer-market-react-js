import AsideUser from "./Aside_Profile"
import Holder from "../NavHolder"
import Footer from "../Footer"
import  SklatonAll from '../skaltons/Jobskalaton';
import { Link, useHistory, useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import {faFileCircleCheck,faTrashCan,faCloudArrowUp ,faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {UseAuth} from "../context/authcontext"
function OrderDetailscheckh(){
    const {id} = useParams()
    const [order, setorder] = useState(null)
    const [filename , setfilename] = useState(null)
    const [filezise , setfilezise] = useState(null)
    const {crentuser} = UseAuth()
    const path = `/Order/Complated/${id}`
    const mypath = useHistory()

    // foomka 
    const title = order && order.title
    const Qiimaha =  order && order.Qiimaha
    const Dalbade_id =  crentuser && crentuser.uid
    const Mudada =  order && order.Mudada
    const UserId =  order && order.UserId
    const Xadiga =  order && order.Xadiga
    const Nooca =  order && order.Nooca
    const xaalad =  order && order.xaalad
    const Qodobka1aad =  order && order.qodob1aad
    const Qodobka2aad =  order && order.qodob2aad
    const Jobid =  id
    const [Loobahanyahay , setLoobahanyahay] = useState("")
    const [lanbarka , setlanbarka] = useState("")
    const [gudoomay , setgudoomay] = useState(false)
    const [image , setimage] = useState("")
    

    const image01 = useRef();
    const spn_img1 = useRef();
    const progress = useRef();
    const file_icon = useRef()
    const file_icon2 = useRef()

    useEffect(function(){
        fetch(`/jobs/${id}`)
        .then((res) =>{
            if(res.ok){
                return res.json()
            }
        })
        .then((data) => {
            setorder(data)
        })
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


    const add_your_order = async (e) =>{
        e.preventDefault()
        const order = {
            Loobahanyahay,
            lanbarka,
            image,
            gudoomay,
            title,
            Qiimaha,
            Dalbade_id,
            UserId,
            Jobid,
            Mudada,
            Xadiga,
            Nooca,
            xaalad,
            Qodobka1aad,
            Qodobka2aad,
        }

        const response = await fetch('/orders', {
            method: "POST",
            body: JSON.stringify(order),
            headers : {'Content-Type': 'application/json'}
        })

        const json = await response.json()
        if(!response.ok){
            console.log("qalad")
        }

        if(response.ok){
            console.log('order complated')
            mypath.push(`/Order/Complated/${id}`)
        }
        console.log(order)
    }
    return(
        <div>
        <Holder />
        <section className="orders invocs">
            <div className="xajiye kala_qayb">
                <AsideUser />
                {/* <!---------------biloga foomka labixida -------------------> */}
            {order ? <div className="tranding_haye">
                <div className="rasiid_tamplate">
                    <div className="rasiid">
                        <h2 className="ciwaan_bahanahay">{order.title} {id} :</h2>
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
                                <span ref={spn_img1} onClick={image01_click} className="span_image1"><FontAwesomeIcon icon={faCloudArrowUp} /></span>
                                <input ref={image01} onInput={onchange} className="img_01" type="file" name="sawir1aad" style={{visibility:"hidden"}} 
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
                                            <div className="line" style={{width: '56%'}}>

                                            </div>
                                        </div>
                                    </div>
                                    <div ref={file_icon2} className="file_icon delete active" onClick={xidh}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                    </div>
                                </div>
                                {/* <!----------upload file and image --> */}
                                <label>Dooro Qaabka Lacag Bixinta</label>
                                    <select   className="lacag_bixin" name="shirkad">
                                        <option value="zaad">
                                            zaad service
                                        </option>
                                        <option value="edahab">
                                            edahab service
                                        </option>
                                    </select>
                                <input className="lacag_bixin" type="text" required placeholder="Lanbaraakag" name="lanbarka"
                                onChange={(e) => setlanbarka(e.target.value)}
                                value={lanbarka}
                                />
                            </div>
                            <input type="hidden" value={order.Mudada}   name="Mudada"/>
                            <input type="hidden" value={order.Xadiga}  name="xadiga"/>
                            <input type="hidden" value={order.Qiimaha}  name="Qiimaha"/>
                            <input type="hidden" value={order.title} name="title"/>
                            <input type="hidden" value={order.Dalbade_id}  name="Dalbade_id"/>
                            <input type="hidden" value={order.UserId} name="UserId"/>
                            <input type="hidden" value={order.Nooca}  name="Nooca"/>
                            <input type="hidden" value={order.xaalad} name="xaalad"/>
                            <input type="hidden" value={Jobid}  name="Jobid"/>
                            <input type="hidden" value={order.qodob2aad}  name="Qodobka2aad"/>
                            <input type="hidden" value={order.qodob1aad}  name="Qodobka1aad"/>
                            <input type="hidden" value={gudoomay}  name="gudoomay"/>
                            <button className="la_bax" type="submit"><FontAwesomeIcon icon={faSquarePlus} />  Bixi Lacagta ({order.Qiimaha}$)</button>
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