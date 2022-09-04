import Holder from "../NavHolder";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays,faSpinner ,faCircleCheck , faAngleDown , faCircleXmark ,faDownload  , faRotate, faStar ,faEarthAfrica, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Xayaysiis from "../Saponsered_Ads";
import { useParams , Link, useHistory } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {format}  from "timeago.js"
import {getFirestore,getDoc, doc, updateDoc } from "firebase/firestore";
import { UseAuth } from "../context/authcontext";
import Loading from "../loading";

function Gudoon(){
    const {id} = useParams()
    const {userid} = useParams()
    const {j_id} = useParams()
    const [oneOrder , setoneOrder] = useState()
    const [user , setuser] = useState()
    const [c_user, setc_user] = useState()
    const [job ,setjob] = useState(null)
    const [ordejob,setordejob ] = useState(null)
    const {Add_Comments ,Userinfo , Add_Rasiid ,crentuser } = UseAuth()
    // comments state 
    const [Rate, setRate] = useState(5)
    const [Comment, setComment] = useState()
    const Jobid = oneOrder && oneOrder.Jobid
    const Username = user && Userinfo.Name 
    const Image = Userinfo &&  Userinfo.Image
    const UserId = userid
    const qiimaha = oneOrder && oneOrder.Qiimaha 
    const Khidmad = 15 / 100 * parseFloat(qiimaha)
    const Last_qiimo = Number(qiimaha) - Khidmad
    const Nooc = "+";

    // loading
    const [load, setload] = useState(false)
    const loading_handale = () => {
        load ? setload(false) : setload(true)
        console.log(load)
    }

    // update order in la gudoomay 
    const gudoomay = true
    // updarete iibsade iyo qiimayn
    const iibsade = parseInt(job && job.iibsade) + 1
    const Qiimayn = parseInt(job && job.Qiimayn) + 1


    // akoon info
    useEffect(() => {
        if(crentuser){
            setordejob(`${oneOrder && oneOrder.Jobid}`)
            //get_this_job()
        }

    },[crentuser])

    const submitHandale  = async (e) =>{
        e.preventDefault()
        try{
            await Add_Comments(
                Rate,
                Comment,
                Jobid,
                UserId,
                Username,
                Image
            )

            await Add_Rasiid (
                Last_qiimo,
                userid,
                Nooc
            )

            update_gudoon()
            update_rasiid()
            update_Ratings()
            update_job()
            setload(false)

        }catch(Err){
            console.log(Err)
        }
    }


    const xaalad0aad = useRef();
    const xaalad1aad = useRef();
    const xaalad2aad = useRef();
    const xaalad3aad = useRef();


    // get order
    const db = getFirestore()
    const docref = doc(db, "Orders" , id)
    //const q = query(colref)    
    function  getsingaleorder(){
        getDoc(docref)
        .then((doc) => {
            setoneOrder({...doc.data(), id:doc.id})
        })
    }


    // update xaalad gudoomay dalab
    function update_gudoon(){
        const ordref =  doc(db, "Orders", id)
        updateDoc(ordref, {
            gudoomay
        })
    }
    //get user 
    const Userref = doc(db, "Users" , userid)
    //const q = query(colref)    
    function  get_user(){
        getDoc(Userref)
        .then((doc) => {
            setuser({...doc.data(), id:doc.id})
        })
    }

    const Userref_r = doc(db, "Users" , userid)
    //const q = query(colref)    
    function  get_user_cren(){
        getDoc(Userref_r)
        .then((doc) => {
            setc_user({...doc.data(), id:doc.id})
        })
    }

    const Jobsref_r = doc(db, "Jobs" , j_id)
    //const q = query(colref)    
    function  get_this_job(){
        getDoc(Jobsref_r)
        .then((doc) => {
            setjob({...doc.data(), id:doc.id})
        })
    }

    // diyaar calc ratings 
    function update_Ratings(){
        const ordref =  doc(db, "Users", userid)
        const Q_r5 = parseInt(c_user.Qiimayn_user5) + 1
        const Q_r4 = parseInt(c_user.Qiimayn_user4) + 1
        const Q_r3 = parseInt(c_user.Qiimayn_user3) + 1
        const Q_r2 = parseInt(c_user.Qiimayn_user2) + 1
        const Q_r1 = parseInt(c_user.Qiimayn_user1) + 1
        const x_1aad = 
        c_user.Qiimayn_user5 +
        c_user.Qiimayn_user4 +
        c_user.Qiimayn_user3 + 
        c_user.Qiimayn_user2 +
        c_user.Qiimayn_user1;
        const x_2aad = 
        5 * c_user.Qiimayn_user5 +  
        4 * c_user.Qiimayn_user4 + 
        3 * c_user.Qiimayn_user3 + 
        2 * c_user.Qiimayn_user2 + 
        1 * c_user.Qiimayn_user1 ;
        const last_calc = x_2aad / x_1aad
        if(Rate == 5){
        updateDoc(ordref, {
            Qiimayn_user5:Number(Q_r5),
            Qiimayn_user: Number(last_calc).toFixed(2)
        })
        } else if(Rate == 4){
        updateDoc(ordref, {
            Qiimayn_user4:Number(Q_r4),
            Qiimayn_user: Number(last_calc).toFixed(2)
        })            

        } else if(Rate == 3){
        updateDoc(ordref, {
            Qiimayn_user3:Number(Q_r3),
            Qiimayn_user: Number(last_calc).toFixed(2)
        })
        } else if(Rate == 2){
        updateDoc(ordref, {
            Qiimayn_user2:Number(Q_r2),
            Qiimayn_user: Number(last_calc).toFixed(2)
        })
        } else if(Rate == 1){
        updateDoc(ordref, {
            Qiimayn_user1:Number(Q_r1),
            Qiimayn_user: Number(last_calc).toFixed(2)
        })
        }
    }







    function update_rasiid(){
        const ordref =  doc(db, "Users", userid)
        const total = parseFloat(c_user.r_Total)   + parseFloat(Last_qiimo) 
        const Xidhan = parseFloat(c_user.r_Xidhan) +  parseFloat(Last_qiimo) 
        const Mac = parseInt(c_user.Macmiil) + 1
        //const Q_r = parseInt(c_user.Qiimayn_user) + 1
        updateDoc(ordref, {
            r_Total:total.toFixed(2),
            r_Xidhan:Xidhan.toFixed(2),
            Macmiil: Number(Mac),
            //Qiimayn_user:Number(Q_r),  
        })
    }

    function update_job(){
        const job_upd =  doc(db, "Jobs", j_id)
        updateDoc(job_upd, {
            Qiimayn,
            iibsade,
        })
    }
    useEffect(() => {
        getsingaleorder() 
        get_user()
        get_user_cren()
        get_this_job()
    }, [oneOrder])



    function Changestatus(){
       const xaalad = document.querySelectorAll('.xaalad1aad');
        xaalad.forEach(function(xalad_kaliya){
            xalad_kaliya.addEventListener('click', function(){
                if(!this.classList.contains('not_allowed')){
                    for(let i = 0; i < xaalad.length; i++){
                        xaalad[i].classList.remove('active')
                    }
                        this.classList.toggle('active')
                }
            })
        })
    }

    function test(){
        if(oneOrder){
            if(oneOrder.xaalad ==  "1" ){
                xaalad1aad.current.classList.remove('not_allowed')
                xaalad2aad.current.classList.add('not_allowed')
                xaalad3aad.current.classList.add('not_allowed')
                xaalad0aad.current.classList.add('not_allowed')

            } else if(oneOrder.xaalad ==  "2"  || oneOrder.xaalad ==  "Done"){
                xaalad2aad.current.classList.remove('not_allowed')
                xaalad1aad.current.classList.add('not_allowed')
                xaalad3aad.current.classList.add('not_allowed')
                xaalad0aad.current.classList.add('not_allowed')
            } else if(oneOrder.xaalad ==  "0"){
                xaalad0aad.current.classList.remove('not_allowed')
                xaalad2aad.current.classList.add('not_allowed')
                xaalad1aad.current.classList.add('not_allowed')
                xaalad3aad.current.classList.add('not_allowed')


            }else{
                xaalad3aad.current.classList.remove('not_allowed')
                xaalad1aad.current.classList.add('not_allowed')
                xaalad2aad.current.classList.add('not_allowed')
                xaalad0aad.current.classList.add('not_allowed')
            }
        }
    }
    test()


    // outo gudoomid 
    const outo_accept = () => {
        if(oneOrder && oneOrder.gudoomay === false){
            if(format(oneOrder.updatedAt) === "18 Minutes Ago"){
                console.log("accepted")
            }
        }

    }

    outo_accept()


    return(
        <div>
        <Loading loading={load}/>
        <Holder />
        <section className="main_shaqo">
        <div className="xajiye">
            <div className="shao_macluumad_dhan">
                <div className="qayb_ sawiro">
                    <div className="head_job">
                        <div className="title">
                            <h2>{oneOrder ? oneOrder.title : ''}</h2>
                        </div>                 
                    </div>
                    <div className="faahfaahin_sho Gudoon">
                        <p className="Gudoon_p">
                            Xagan Hoose Kala Soco Kolba Xalladaha Dalabkaaga
                        </p>
                        <p className="Gudoon_p">
                            Dalabkan waxaad samaysay muda hada laga joogo <span>({format(oneOrder && oneOrder.CreatedAt)})</span>
                           
                        </p>
                        <p className="Gudoon_p">
                            <span> Waxayna balantu Ahayd inuu kuu dhamaado ({oneOrder ? oneOrder.Mudada : ''} Maalin</span>)
                        </p>
                    </div>
                    <div className="status">
                        {/* <!----------xaalad 0aad---------> */}
                        <div ref={xaalad0aad} onClick={Changestatus} className="xaalad1aad not_allowed ">
                            <div className="madaxa defualt">
                                <div className="x_icon">
                                    <FontAwesomeIcon icon={faCalendarDays} />
                                </div>
                                <div className="x_ciwaaan">
                                    <h2>Lama Aqbalin Wali Dalabkaaga</h2>
                                </div>
                                <div className="x_icon_arrow">
                                <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                            </div>
                            <div className="tranding_haye">
                                {/* <!--if dalab xaladiisa !== iga gudoon--> */}
                                <div className="rasiid_tamplate">
                                    <div className="rasiid info_raacsan">
                                        <p className="info_dalab_p">
                                            Fadlan Mudane Sug Inta Uu aqbalayo dalabkaaga mudane/marwo
                                            <h2 className="info_dalab_h2">                                            <h2 className="info_dalab_h2">{user? user.Name :"unknown user"}</h2></h2>
                                            Hadii uu aqbali waayo Muddo 3 saac ah xaq waxaad u yeelanaysaa
                                            inaad ka laabato dalabkan 
                                        </p>
                                    </div>
                                    <button className="cancel_order"><i className="fa-solid fa-trash-can"></i> Ka Laabo Dalabka(Cancel Order)</button>
                                </div>
                            </div>

                        </div>
                         {/* <!----------xaalad 1aad---------> */}
                        <div ref={xaalad1aad} onClick={Changestatus} className="xaalad1aad not_allowed ">
                            <div className="madaxa koowaad">
                                <div className="x_icon">
                                    <FontAwesomeIcon icon={faSpinner} />
                                </div>
                                <div className="x_ciwaaan">
                                    {oneOrder &&

                                        <h2>Waa La Wadaa Dalabkaaga  ({format(oneOrder.updatedAt)} ) </h2>
                                    }
                                    
                                </div>
                                <div className="x_icon_arrow">
                                <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                            </div>
                            <div className="tranding_haye">
                                {/* <!--if dalab xaladiisa !== iga gudoon--> */}
                                <div className="rasiid_tamplate">
                                    <div className="rasiid info_raacsan">
                                        <p className="info_dalab_p">
                                            Waa Laguu wadaa dalabkaaga Fadlan Sug Wakhtiga kuugu Qoran Kaadhaka shaqada 
                                            kama laaban kartid dalabkaaga Hadii La Bilaabo shaqada kaliya waxaad dalabkan ka laaban kartaa
                                            marka uu muddo dhaafo ama Wakhtigii balanta ay dhaafto mahadsanid
                                        </p>
                                    </div>
                                    <button className="cancel_order"><i className="fa-solid fa-trash-can"></i> Ka Laabo Dalabka(Cancel Order)</button>
                                </div>
                            </div>

                        </div>
                        {/* <!----------xaalad 2aad---------> */}
                        <div ref={xaalad2aad} onClick={Changestatus} className="xaalad1aad not_allowed">
                            <div className="madaxa labaad ">
                                <div className="x_icon">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </div>
                                <div className="x_ciwaaan">
                                    <h2> Waa Laguu Dhameeyay Dalabkaaga </h2>
                                </div>
                                <div className="x_icon_arrow">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                            </div>
                            <div className="tranding_haye">
                                {/* <!--if dalab xaladiisa == iga gudoon--> */}
                                <div className="rasiid_tamplate xaalad">
                                    {/* <!--if dalab xaladiisa == iga gudoon--> */}
                                    <div className="rasiid info_raacsan xxaalad">
                                        <p className="info_dalab_p">
                                            Fadlan mudane dalabkaag Hubso inuu yahay sidaad u rabtay intaanad Ku dhufan botomka gudamida dalabka mahadsanid
                                            <span className="gudoon_fg">
                                                FG: Waktiga uu qofka kuu shaqeeyay codsado inaad gudoonto Haday Ka Soo dhaafto 5 Maalmood 
                                                adna aanad wali gudoomin lacagta dalabkaaga dalabka  waxaa loo fasaxayaa iibiyaha adeegan kuu qabtay Si iskuu ahna wuu isku gudoomayaa dalabku
                                            </span> 
                                        </p>
                                        {oneOrder && oneOrder.xaalad == "Done" ?
                                        <>
                                                <h2 className="ciwaan_bahanahay2">Xagan Hoose K dejiso(download-garayso) dalabkaag <i className="fa-solid fa-angle-down arrow"></i> :</h2>
                                                <a href={oneOrder && oneOrder.image} download className="link_mirfaq">Dajiso Dalabkaaga ( Download Your Order ) <FontAwesomeIcon icon={faDownload} /> </a>
                                        </>
                                        :
                                        <>
                                                <h2 className="ciwaan_bahanahay2">Waxaa socota Diyaarinta Dalabkaaga <i className="fa-solid fa-angle-down arrow"></i> :</h2>
                                        </>
                                        }
                                    </div>
                                    {oneOrder && oneOrder.gudoomay == false && oneOrder && oneOrder.xaalad == "Done"  ?
                                        <form className="gudoon" method="POST" action="" onSubmit={submitHandale}>
                                            <label>Sidee laguugu Adeegay ? </label>
                                            <select name="Rate" onChange={(e) => setRate(Number(e.target.value))} value={Rate}>
                                                <option value="5">Si Aad Fiican</option>
                                                <option value="4">Si Fiican</option>
                                                <option value="3">Ma Xuma</option>
                                                <option value="2">Si Liidata</option>
                                                <option value="1">Si Aad u Liidata</option>
                                            </select>
                                            <textarea  onChange={(e) => setComment(e.target.value)} value={Comment} name="Comment" spellCheck="false" required placeholder="Sideed U Aragtaa Adeegayga"></textarea>
                                            <input  type="hidden" value={oneOrder && oneOrder.Jobid} name="Jobid"/>
                                            <input  type="hidden" value={UserId} name="Userid"/>
                                            <input  type="hidden" value={Username} name="Username"/>
                                            <form onSubmit={submitHandale} method="put">
                                            <input  type="hidden" value={gudoomay} name="gudoomay"/>
                                            </form>
                                            <form onSubmit={submitHandale} method="put">
                                            <input  type="hidden" value={iibsade} name="Iibsade"/>
                                            <input  type="hidden" value={Qiimayn} name="Qiimayn"/>
                                            </form>
                                            <button onClick={loading_handale} className="gudoon_btn" type="submit">Gudoon Dalabka</button>
                                        </form>
                                    :""
                                    }

                                </div>
                            </div>

                        </div>
                        {/* <!----------xaalad 3aad---------> */}
                        <div ref={xaalad3aad} onClick={Changestatus} className="xaalad1aad not_allowed">
                            <div className="madaxa sadexaad">
                                <div className="x_icon">
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </div>
                                <div className="x_ciwaaan">
                                    <h2> Waa Laga Laabtay Dalabkaaga </h2>
                                </div>
                                <div className="x_icon_arrow">
                                <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                            </div>
                            <div className="tranding_haye">
                                {/* <!--if dalab xaladiisa == iga gudoon--> */}
                                <div className="rasiid_tamplate xaalad">
                                    {/* <!--if dalab xaladiisa == iga gudoon--> */}
                                    <div className="rasiid info_raacsan xxaalad">
                                        <p className="info_dalab_p">
                                            Dalabkaaga waa laga laabtay waxaana ka laabatay iibiya adeegan 
                                            lacagta aad ku bixisay dalabkan waxaa laguugu soo celiyay lanbarkaaga  
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!---------dhamaadka macluumaad raacsan -------------------------> */}
                    {/* <AsidJob/> */}
                </div>
                <div className="qayb_ macluumo">
            <div className="top_mac">
                <h2>Macluumadka shaqada</h2>
            </div>
            <div className="basic_info">
                <h2>USD $<span id="qiimaha">{oneOrder?  oneOrder.Qiimaha : ''}</span></h2> 
                <p>
                    Waa Qiimaha aad Gaadhsiisay
                </p>
                <div className="more_info">
                    <ul>
                        {oneOrder ? oneOrder.Mudada < 1 ? <li> <FontAwesomeIcon icon={faCircleCheck} className="i" /> Mudada : <span className="mudada">12</span> Saacadood</li> : <li> <FontAwesomeIcon icon={faCircleCheck} className="i" /> Mudada : <span className="mudada">{oneOrder.Mudada}</span> Maalin</li> : ""}
                        <li> <FontAwesomeIcon icon={faCircleCheck} className="i" /> Xadiga : <span className="xadiga_adeeg">{oneOrder && oneOrder.Xadiga}</span> {oneOrder && oneOrder.Nooca}</li>
                        <li> <FontAwesomeIcon icon={faCircleCheck} className="i" /> {oneOrder?  oneOrder.Qodobka1aad : ""} </li>
                        <li> <FontAwesomeIcon icon={faCircleCheck} className="i" /> {oneOrder? oneOrder.Qodobka2aad : ""} </li>
                    </ul>
                </div>
                <div className="iibiye_info">
                    <img id="la_xaqiijiyay" src="/images/tawsiiq.svg" alt="tawqsiiq" title="Waa La Xaqiijiyay" />
                    <div className="sir">
                        <img src={user? user.Image :"/images/avatar.jpg"} />
                    </div>
                    <div className="info_seller">
                        {user ?  <Link to={`/Acount/${user.Name}/${user.id}`}>
                            <h2> {user? user.Name :"unknown user"}</h2>
                        </Link> : <></>}
                        
                        <p>  {user ? user.info :  "unknown Description"}</p>
                        <p>  <FontAwesomeIcon icon={faEarthAfrica} /> Wadanka : {user ? user.Magaalada :  "unknown Description"}</p>
                        <p className="qiimayn">
                            <FontAwesomeIcon className="i" icon={faStar} />
                            <FontAwesomeIcon className="i" icon={faStar} />
                            <FontAwesomeIcon className="i" icon={faStar} />
                            <FontAwesomeIcon className="i" icon={faStar} />
                            <FontAwesomeIcon className="i" icon={faStar} />
                            (<span>{user ? user.Qiimayn_user : <></>}</span>)
                        </p>
                        {user ? <Link to={`/Chat`}>
                            <button><FontAwesomeIcon icon={faEnvelope} /> La Xidhiidh</button>
                        </Link> :"/"}

                    </div>

                </div>
                {/* <!-------if shaqo type == turjumid qorid iwm--> */}
                <Xayaysiis />

            </div>
        </div>
                </div>
        </div>
        </section>
        <Footer/>
        </div>
    )
}

export default Gudoon