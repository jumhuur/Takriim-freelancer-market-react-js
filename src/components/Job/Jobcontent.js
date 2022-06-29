import AsideJob from "./AsidJob";
import Comment from "./comments";
// import {useEffect ,useState} from "react";
// import { useParams } from "react-router-dom";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faSpinner, faStar , faUserGroup , faUserTie ,faSliders, faTrashCanArrowUp , faGear, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
function JobContent({jobdetails ,user}){
    const {id} = useParams()
    const [active , setactive] = useState (false)

    function settings_handle(e){
        !active ? setactive(true) : setactive(false)
    }

    const deletemasax = async () => {
            const response = await fetch(`/jobs/${id}`, {
            method: "DELETE",
        })

        const json = response.json()
        if(response.ok){
            console.log('waa la masaxay')
        }

    }
    return(
        <section className="main_shaqo">
            <div className="xajiye">
                <div className="shao_macluumad_dhan">
                    <div className="qayb_ sawiro">
                        <div className="head_job">
                        <div onClick={settings_handle} className="upadate_job">
                        <FontAwesomeIcon icon={faGear} className={jobdetails._id} id="i" />
                    </div>
                    <div  className={active ? 'nav_job active' : "nav_job"} data={jobdetails._id}>
                        <ul id='nav_jobs'>
                            <li>
                                <Link to={`/job/upadate/${jobdetails._id}`}>
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
                            <div className="title">
                                <h2>{jobdetails.title}</h2>
                            </div> 
                            <div className="ath_job">
                                <ul>
                                    <li className="img_iibiye">
                                        <img id="la_xaqiijiyay" src="/images/tawsiiq.svg" alt="tawqsiiq" title="Waa La Xaqiijiyay" />
                                        <div className="ss_ibiye">
                                            <img src={user ? user.image : "/images/avatar.jpg"} title="sawirka iibiyaha" alt="sawie_iibiye" />
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
                                <img src={jobdetails.image} alt="sawir shaqo" title="sawir shaqo" />
                                {/* <iframe width="100%" height="100%"
                                src={jobdetails.Muuqaal}>
                                </iframe> */}
                        </div>
                        <div className="faahfaahin_sho">
                            <h2> Warbixinta shaqadan aan kuu qabanayo</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. It was popularised in 
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software 
                                like Aldus PageMaker including versions of Lorem Ipsum.
                                electronic typesetting, remaining essentially unchanged. It was popularised in 
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software 
                            like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        {/* <!-------------------commentiga dadka------------------------------> */}
                        <div className="faahfaahin_sho">
                            <h2 className="flcelin"><i className="fa-solid fa-face-smile"></i>  Falcelinta Dadaka Iibsaday (12) </h2>
                        </div>
                        <Comment />
                        {/* <!---------dhamaadka commentiga ----------------------------> */}
                        {/* <!---------Bilowga shaqooyin lamid ----------------------------> */}

                        {/* <!---------dhamaadka shaqooyin lamid -------------------------> */}

                    </div>
                    {/* <!----------- aside card -----> */}
                    <AsideJob jobmudo={jobdetails.Mudada} qiimojob={jobdetails.Qiimaha} Jobxadiga={jobdetails.Xadiga} job={jobdetails} user={user}/>
                </div>
            </div>
        </section>
    )
}

export default JobContent