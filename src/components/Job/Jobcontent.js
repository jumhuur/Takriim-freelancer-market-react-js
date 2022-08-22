import AsideJob from "./AsidJob";
import Comment from "./comments";
// import {useEffect ,useState} from "react";
// import { useParams } from "react-router-dom";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faSpinner, faStar , faUserGroup , faUserTie , faTrashCanArrowUp , faGear, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import {UseAuth} from "../context/authcontext"
import { useEffect } from "react";
function JobContent({jobdetails ,user}){
    const {id} = useParams()
    const [active , setactive] = useState (false)
    const {crentuser }  = UseAuth()
    const myparth = useHistory()

    function settings_handle(e){
        !active ? setactive(true) : setactive(false)
    }


    // delete data job 

    const deletemasax = async () => {
            const response = await fetch(`/jobs/${id}`, {
            method: "DELETE",
        })

        const json = response.json()
        if(response.ok){
            console.log('waa la masaxay')
            myparth.push('/Acount/maxamad dayib/1')
        }

    }



    return(
        <section className="main_shaqo">
            <div className="xajiye">
                <div className="shao_macluumad_dhan">
                    <div className="qayb_ sawiro">
                        <div className="head_job">
                        {crentuser && crentuser.uid == jobdetails.UserId ?
                        <>
                        <div onClick={settings_handle} className="upadate_job">
                        <FontAwesomeIcon icon={faGear} className={jobdetails.id} id="i" />
                        </div>
                        <div  className={active ? 'nav_job active' : "nav_job"} data={jobdetails._id}>
                            <ul id='nav_jobs'>
                                <li>
                                    <Link to={`/job/upadate/${jobdetails.id}`}>
                                        <FontAwesomeIcon icon={faPenToSquare} /> Cusbonaysii
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={deletemasax}>
                                    <FontAwesomeIcon icon={faTrashCanArrowUp} /> Masax
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        </>
                        : ""
                        }

                            <div className="title">
                                <h2>{jobdetails.title}</h2>
                            </div> 
                            <div className="ath_job">
                                <ul>
                                    <li className="img_iibiye">
                                        <img id="la_xaqiijiyay" src="/images/tawsiiq.svg" alt="tawqsiiq" title="Waa La Xaqiijiyay" />
                                        <div className="ss_ibiye">
                                            <img src={user ? user.Image : "/images/avatar.jpg"} title="sawirka iibiyaha" alt="sawie_iibiye" />
                                        </div>
                                    </li>
                                    <li>
                                    <p>{user ? user.Name : "Unkonow user"}</p>
                                    </li>
                                    <li>
                                        {jobdetails.xaalad === 1 ? <p><FontAwesomeIcon className="i" icon={faSpinner} />  dalab wade</p> :          <p><FontAwesomeIcon className="i" icon={faUserTie} />  dalab Suge</p>}
                                    </li>
                                    <li>
                                        <p className="qimayn">
                                        <FontAwesomeIcon className="i" icon={faStar} />
                                        <FontAwesomeIcon className="i" icon={faStar} />
                                        <FontAwesomeIcon className="i" icon={faStar} />
                                        <FontAwesomeIcon className="i" icon={faStar} />
                                        <FontAwesomeIcon className="i" icon={faStar} />
                                            ( {jobdetails.Qiimayn} )
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <FontAwesomeIcon className="i" icon={faUserGroup} /> <span>{jobdetails.iibsade}</span> iibsade
                                        </p>
                                    </li>
                                </ul>
                            </div>                  
                        </div>
                        <div className="sawir_shaqo">
                            {jobdetails.image == "/images/asalahaan.png" ? 
                            /*<video src={jobdetails.Video} alt="Muuqaal Shaqo" />*/
                                <video
                                    id="my-player"
                                    class="video-js vjs-theme-fantasy"
                                    controls
                                    preload="auto"
                                    /*poster="//vjs.zencdn.net/v/oceans.png"*/
                                    data-setup='{}'>
                                <source src={jobdetails.Video} type="video/mp4"></source>
                                </video>
                            :
                            <img src={jobdetails.image} alt="sawir shaqo" title="sawir shaqo" />
                            }
                               
                        </div>
                        <div className="faahfaahin_sho">
                            <h2> Warbixinta shaqadan aan kuu qabanayo</h2>
                            <p>
                                {jobdetails && jobdetails.body}
                            </p>
                        </div>
                        {/* <!-------------------commentiga dadka------------------------------> */}
                        <div className="faahfaahin_sho">
                            <h2 className="flcelin"><i className="fa-solid fa-face-smile"></i>  Falcelinta Dadaka Iibsaday </h2>
                        </div>
                        <Comment thisid={jobdetails}/>
                        {/* <!---------dhamaadka commentiga ----------------------------> */}
                        {/* <!---------Bilowga shaqooyin lamid ----------------------------> */}

                        {/* <!---------dhamaadka shaqooyin lamid -------------------------> */}

                    </div>
                    {/* <!----------- aside card -----> */}
                    <AsideJob jobmudo={jobdetails.Mudada} qiimojob={jobdetails.Qiimaha} Jobxadiga={jobdetails.Xadiga} job={jobdetails} jobid={jobdetails.id} user={user}/>
                </div>
            </div>
        </section>
    )
}

export default JobContent