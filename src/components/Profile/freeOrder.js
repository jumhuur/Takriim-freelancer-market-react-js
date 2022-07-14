import Holder from "../NavHolder"
import Footer from "../Footer"
import Jobskl from "../skaltons/Jobskalaton";
import Sklall from "../skaltons/sklAll";
import { Link, useHistory, useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved,faCircleCheck , faAngleDown , faCircleXmark ,faDownload  , faMessage, faStar , faEnvelope} from "@fortawesome/free-solid-svg-icons";
function My_Orders(){
    const {id} = useParams()
    const [jobfree, setjobfree] = useState(null)
    const [xaalad, setxaalad] = useState('')
    const history = useHistory()

    useEffect(function(){
        fetch(`/orders/${id}`)
        .then((res) =>{
            if(res.ok){
                return res.json()
            }
        })
        .then((data) => {
            setjobfree(data)
        })

    }, [])


    const update_xaalad = async (e) => {
        e.preventDefault()
        const xaalad_dalab = {
            xaalad,       
        }

        const response =  await fetch(`/orders/xaalad/${id}`, {
            method: 'PUT',
            body: JSON.stringify(xaalad_dalab),
            headers : {'Content-Type': 'application/json'}
        })

        const json = await response.json()
        if(!response.ok){
            console.log("qalad")
        }

        if(response.ok){
            console.log('waa la badalay')
            //history.push('/Acount/Myorder')
        }

        // setTimeout(() => {
        //     setalertw(false)
        // } , 10000)

    }
    return(
    <div>
        <Holder />
        <section className="main_shaqo">
        <div className="xajiye">
        {jobfree ? 
        <div className="shao_macluumad_dhan">
                <div className="qayb_ sawiro">
                    <div className="head_job">
                        <div className="title">
                            <h2>{jobfree.title}</h2>
                        </div>                 
                    </div>
                    <div className="faahfaahin_sho">
                        <h2 className="order_details"><i className="fa-solid fa-bars"></i> Waxyaabha aad uga baahnayad</h2>
                        <p> {jobfree.Loobahanyahay}</p>
                    </div>
                    {/* <!---------Bilowga macluumaad raacsan ----------------------------> */}
                    <div className="tranding_haye">
                        <div className="rasiid_tamplate">
                            <div className="rasiid info_raacsan">
                                <h2 className="ciwaan_bahanahay">Ka Dajiso Halkan Hoose :</h2>
                                {/* <!-- <p className="info_dalab_p">
                                </p> --> */}
                                <h2 className="ciwaan_bahanahay2">File Ama Sawir La Soo Raaciyay <FontAwesomeIcon icon={faAngleDown}/> :</h2>
                                <a href={jobfree.image} download className="link_mirfaq">(Download Now) dajiso Hada  <FontAwesomeIcon icon={faDownload} /></a>
                            </div>
                        </div>
                    </div>
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
                                    jobfree.xaalad == 2 ?
                                    <li> <FontAwesomeIcon className="i" icon={faShieldHalved} /> Ma Gudoomay ? : {jobfree.gudoomay? "Haa" : "Maya"} </li>
                                    :
                                    ""
                                }
                                
                            </ul>
                            <form method="put" onSubmit={update_xaalad}>
                                {jobfree.xaalad == "0" ?
                                <div>
                                <select name="xaalad" value={'1'} onChange={(e => setxaalad(e.target.value))}>
                                <option value={"1"}>
                                    Waan Bilabay Shaqada
                                </option>
                                <option value={"3"}>
                                    Waan Ka Laabtay Dalabkan
                                </option>
                                </select>
                                    <button type="submit">Cusbonaysii Xaalada</button>
                                </div>
                        
                                :jobfree.xaalad == "1" ?
                                <div>
                                <select name="xaalad" value={'2'} onChange={(e => setxaalad(e.target.value))}>
                                <option value={"2"}>
                                    Waan Udhameeyay Dalabka
                                </option>
                                </select>
                                    <button  type="submit">Gudbi Dalabka</button>
                                </div>
                                :jobfree.xaalad == "2" ?
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

                        <div className="iibiye_info">
                            <div className="sir">
                                <img src="/images/avatar.jpg" />
                            </div>
                            <div className="info_seller">
                                <a href="">
                                    <h2>jimcaale muuse xasan</h2>
                                </a>
                                
                                <p>iibsadaha</p>
                                <a href="/chat.html">
                                    <button><FontAwesomeIcon icon={faMessage} /> La xidhiidh</button>
                                </a>

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

    )
}


export default My_Orders