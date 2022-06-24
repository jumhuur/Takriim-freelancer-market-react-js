import  NavHolder from "../NavHolder";
import  Footer from "../Footer";
import AsideUser from "./Aside_Profile"
import  SklatonAll from '../skaltons/Jobskalaton';
import { Link, useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import {faFileCircleCheck,faTrashCan,faCloudArrowUp ,faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Gudbin_dalab(){
    const {id} = useParams()
    const [order, setorder] = useState(null)
    const [filename , setfilename] = useState(null)
    const [filezise , setfilezise] = useState(null)
    const path = `/Order/Complated/${id}`;

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
            <AsideUser />
            {/* <!---------------biloga foomka labixida -------------------> */}
            <div className="tranding_haye">
                <div className="rasiid_tamplate">
                    <div className="rasiid">
                        <h2 className="ciwaan_bahanahay end_order"><i className="fa-solid fa-face-smile"></i> Mahadsanid mudane/Marwo</h2>
                        <p className="info_dalab_p">
                            Xaga Hoose ugu upload-garee mashruuca aad u dhamaysay si uu ula dago macmiilku Waxaana Fiican inaad isticmaasho zip file
                        </p>
                        <form className="lacag_bixinta" method="GET" action={path}>
                            <label htmlFor="qaab">File - Image - Doc - Voice - Zip File - Iyo Shay Kasta Waad Galin Kartaa Xagan Hoose</label>
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
                                            <div className="line" style={{width: '56%'}}>

                                            </div>
                                        </div>
                                    </div>
                                    <div ref={file_icon2} className="file_icon delete active" onClick={xidh}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                    </div>
                                </div>
                                {/* <!----------upload file and image --> */}
                            </div>
                            <textarea name="faahfaahin" className="add_serv" placeholder="Macluumadka Oo Dhan Halkan Ku Qor" required></textarea>
                            <button className="la_bax" type="submit"><FontAwesomeIcon icon={faSquarePlus} /> Gudbi Dalabka </button>
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

export default Gudbin_dalab