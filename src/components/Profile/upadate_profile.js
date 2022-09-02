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
import Loading from "../loading";
function Upadate_profile(){
    const [filename , setfilename] = useState(null)
    const [filezise , setfilezise] = useState(null)
    const [list , setlist] = useState(null)
    const [val , setval] = useState(null)
    const {id} = useParams()
    const {crentuser} = UseAuth()
    const history = useHistory()
    const [prog, setprog] = useState();
    // loading
    const [load, setload] = useState(false)
    const loading_handale = () => {
        load ? setload(false) : setload(true)
        console.log(load)
    }

    // All countries
    // length 252
    var countries = [
        {"name":"Somaliland","code":"SL"},
        {"name":"Somalia","code":"SO"},
        {"name":"Ethiopia","code":"ET"},
        {"name":"Kenya","code":"KE"},
        {"name":"Djibouti","code":"DJ"},
        {"name":"Afghanistan","code":"AF"},
        {"name":"Aland Islands","code":"AX"},
        {"name":"Albania","code":"AL"},
        {"name":"Algeria","code":"DZ"},
        {"name":"American Samoa","code":"AS"},
        {"name":"Andorra","code":"AD"},
        {"name":"Angola","code":"AO"},
        {"name":"Anguilla","code":"AI"},
        {"name":"Antarctica","code":"AQ"},
        {"name":"Antigua and Barbuda","code":"AG"},
        {"name":"Argentina","code":"AR"},
        {"name":"Armenia","code":"AM"},
        {"name":"Aruba","code":"AW"},
        {"name":"Australia","code":"AU"},
        {"name":"Austria","code":"AT"},
        {"name":"Azerbaijan","code":"AZ"},
        {"name":"Bahamas","code":"BS"},
        {"name":"Bahrain","code":"BH"},
        {"name":"Bangladesh","code":"BD"},
        {"name":"Barbados","code":"BB"},
        {"name":"Belarus","code":"BY"},
        {"name":"Belgium","code":"BE"},
        {"name":"Belize","code":"BZ"},
        {"name":"Benin","code":"BJ"},
        {"name":"Bermuda","code":"BM"},
        {"name":"Bhutan","code":"BT"},
        {"name":"Bolivia","code":"BO"},
        {"name":"Bonaire, Sint Eustatius and Saba","code":"BQ"},
        {"name":"Bosnia and Herzegovina","code":"BA"},
        {"name":"Botswana","code":"BW"},
        {"name":"Bouvet Island","code":"BV"},
        {"name":"Brazil","code":"BR"},
        {"name":"British Indian Ocean Territory","code":"IO"},
        {"name":"Brunei Darussalam","code":"BN"},
        {"name":"Bulgaria","code":"BG"},
        {"name":"Burkina Faso","code":"BF"},
        {"name":"Burundi","code":"BI"},
        {"name":"Cambodia","code":"KH"},
        {"name":"Cameroon","code":"CM"},
        {"name":"Canada","code":"CA"},
        {"name":"Cape Verde","code":"CV"},
        {"name":"Cayman Islands","code":"KY"},
        {"name":"Central African Republic","code":"CF"},
        {"name":"Chad","code":"TD"},
        {"name":"Chile","code":"CL"},
        {"name":"China","code":"CN"},
        {"name":"Christmas Island","code":"CX"},
        {"name":"Cocos (Keeling) Islands","code":"CC"},
        {"name":"Colombia","code":"CO"},
        {"name":"Comoros","code":"KM"},
        {"name":"Congo","code":"CG"},
        {"name":"Congo, Democratic Republic of the Congo","code":"CD"},
        {"name":"Cook Islands","code":"CK"},
        {"name":"Costa Rica","code":"CR"},
        {"name":"Cote D'Ivoire","code":"CI"},
        {"name":"Croatia","code":"HR"},
        {"name":"Cuba","code":"CU"},
        {"name":"Curacao","code":"CW"},
        {"name":"Cyprus","code":"CY"},
        {"name":"Czech Republic","code":"CZ"},
        {"name":"Denmark","code":"DK"},
        {"name":"Dominica","code":"DM"},
        {"name":"Dominican Republic","code":"DO"},
        {"name":"Ecuador","code":"EC"},
        {"name":"Egypt","code":"EG"},
        {"name":"El Salvador","code":"SV"},
        {"name":"Equatorial Guinea","code":"GQ"},
        {"name":"Eritrea","code":"ER"},
        {"name":"Estonia","code":"EE"},
        {"name":"Falkland Islands (Malvinas)","code":"FK"},
        {"name":"Faroe Islands","code":"FO"},
        {"name":"Fiji","code":"FJ"},
        {"name":"Finland","code":"FI"},
        {"name":"France","code":"FR"},
        {"name":"French Guiana","code":"GF"},
        {"name":"French Polynesia","code":"PF"},
        {"name":"French Southern Territories","code":"TF"},
        {"name":"Gabon","code":"GA"},
        {"name":"Gambia","code":"GM"},
        {"name":"Georgia","code":"GE"},
        {"name":"Germany","code":"DE"},
        {"name":"Ghana","code":"GH"},
        {"name":"Gibraltar","code":"GI"},
        {"name":"Greece","code":"GR"},
        {"name":"Greenland","code":"GL"},
        {"name":"Grenada","code":"GD"},
        {"name":"Guadeloupe","code":"GP"},
        {"name":"Guam","code":"GU"},
        {"name":"Guatemala","code":"GT"},
        {"name":"Guernsey","code":"GG"},
        {"name":"Guinea","code":"GN"},
        {"name":"Guinea-Bissau","code":"GW"},
        {"name":"Guyana","code":"GY"},
        {"name":"Haiti","code":"HT"},
        {"name":"Heard Island and Mcdonald Islands","code":"HM"},
        {"name":"Holy See (Vatican City State)","code":"VA"},
        {"name":"Honduras","code":"HN"},
        {"name":"Hong Kong","code":"HK"},
        {"name":"Hungary","code":"HU"},
        {"name":"Iceland","code":"IS"},
        {"name":"India","code":"IN"},
        {"name":"Indonesia","code":"ID"},
        {"name":"Iran, Islamic Republic of","code":"IR"},
        {"name":"Iraq","code":"IQ"},
        {"name":"Ireland","code":"IE"},
        {"name":"Isle of Man","code":"IM"},
        {"name":"Israel","code":"IL"},
        {"name":"Italy","code":"IT"},
        {"name":"Jamaica","code":"JM"},
        {"name":"Japan","code":"JP"},
        {"name":"Jersey","code":"JE"},
        {"name":"Jordan","code":"JO"},
        {"name":"Kazakhstan","code":"KZ"},
        {"name":"Kiribati","code":"KI"},
        {"name":"Korea, Democratic People's Republic of","code":"KP"},
        {"name":"Korea, Republic of","code":"KR"},
        {"name":"Kosovo","code":"XK"},
        {"name":"Kuwait","code":"KW"},
        {"name":"Kyrgyzstan","code":"KG"},
        {"name":"Lao People's Democratic Republic","code":"LA"},
        {"name":"Latvia","code":"LV"},
        {"name":"Lebanon","code":"LB"},
        {"name":"Lesotho","code":"LS"},
        {"name":"Liberia","code":"LR"},
        {"name":"Libyan Arab Jamahiriya","code":"LY"},
        {"name":"Liechtenstein","code":"LI"},
        {"name":"Lithuania","code":"LT"},
        {"name":"Luxembourg","code":"LU"},
        {"name":"Macao","code":"MO"},
        {"name":"Macedonia, the Former Yugoslav Republic of","code":"MK"},
        {"name":"Madagascar","code":"MG"},
        {"name":"Malawi","code":"MW"},
        {"name":"Malaysia","code":"MY"},
        {"name":"Maldives","code":"MV"},
        {"name":"Mali","code":"ML"},
        {"name":"Malta","code":"MT"},
        {"name":"Marshall Islands","code":"MH"},
        {"name":"Martinique","code":"MQ"},
        {"name":"Mauritania","code":"MR"},
        {"name":"Mauritius","code":"MU"},
        {"name":"Mayotte","code":"YT"},
        {"name":"Mexico","code":"MX"},
        {"name":"Micronesia, Federated States of","code":"FM"},
        {"name":"Moldova, Republic of","code":"MD"},
        {"name":"Monaco","code":"MC"},
        {"name":"Mongolia","code":"MN"},
        {"name":"Montenegro","code":"ME"},
        {"name":"Montserrat","code":"MS"},
        {"name":"Morocco","code":"MA"},
        {"name":"Mozambique","code":"MZ"},
        {"name":"Myanmar","code":"MM"},
        {"name":"Namibia","code":"NA"},
        {"name":"Nauru","code":"NR"},
        {"name":"Nepal","code":"NP"},
        {"name":"Netherlands","code":"NL"},
        {"name":"Netherlands Antilles","code":"AN"},
        {"name":"New Caledonia","code":"NC"},
        {"name":"New Zealand","code":"NZ"},
        {"name":"Nicaragua","code":"NI"},
        {"name":"Niger","code":"NE"},
        {"name":"Nigeria","code":"NG"},
        {"name":"Niue","code":"NU"},
        {"name":"Norfolk Island","code":"NF"},
        {"name":"Northern Mariana Islands","code":"MP"},
        {"name":"Norway","code":"NO"},
        {"name":"Oman","code":"OM"},
        {"name":"Pakistan","code":"PK"},
        {"name":"Palau","code":"PW"},
        {"name":"Palestinian Territory, Occupied","code":"PS"},
        {"name":"Panama","code":"PA"},
        {"name":"Papua New Guinea","code":"PG"},
        {"name":"Paraguay","code":"PY"},
        {"name":"Peru","code":"PE"},
        {"name":"Philippines","code":"PH"},
        {"name":"Pitcairn","code":"PN"},
        {"name":"Poland","code":"PL"},
        {"name":"Portugal","code":"PT"},
        {"name":"Puerto Rico","code":"PR"},
        {"name":"Qatar","code":"QA"},
        {"name":"Reunion","code":"RE"},
        {"name":"Romania","code":"RO"},
        {"name":"Russian Federation","code":"RU"},
        {"name":"Rwanda","code":"RW"},
        {"name":"Saint Barthelemy","code":"BL"},
        {"name":"Saint Helena","code":"SH"},
        {"name":"Saint Kitts and Nevis","code":"KN"},
        {"name":"Saint Lucia","code":"LC"},
        {"name":"Saint Martin","code":"MF"},
        {"name":"Saint Pierre and Miquelon","code":"PM"},
        {"name":"Saint Vincent and the Grenadines","code":"VC"},
        {"name":"Samoa","code":"WS"},
        {"name":"San Marino","code":"SM"},
        {"name":"Sao Tome and Principe","code":"ST"},
        {"name":"Saudi Arabia","code":"SA"},
        {"name":"Senegal","code":"SN"},
        {"name":"Serbia","code":"RS"},
        {"name":"Serbia and Montenegro","code":"CS"},
        {"name":"Seychelles","code":"SC"},
        {"name":"Sierra Leone","code":"SL"},
        {"name":"Singapore","code":"SG"},
        {"name":"Sint Maarten","code":"SX"},
        {"name":"Slovakia","code":"SK"},
        {"name":"Slovenia","code":"SI"},
        {"name":"Solomon Islands","code":"SB"},
        {"name":"South Africa","code":"ZA"},
        {"name":"South Georgia and the South Sandwich Islands","code":"GS"},
        {"name":"South Sudan","code":"SS"},
        {"name":"Spain","code":"ES"},
        {"name":"Sri Lanka","code":"LK"},
        {"name":"Sudan","code":"SD"},
        {"name":"Suriname","code":"SR"},
        {"name":"Svalbard and Jan Mayen","code":"SJ"},
        {"name":"Swaziland","code":"SZ"},
        {"name":"Sweden","code":"SE"},
        {"name":"Switzerland","code":"CH"},
        {"name":"Syrian Arab Republic","code":"SY"},
        {"name":"Taiwan, Province of China","code":"TW"},
        {"name":"Tajikistan","code":"TJ"},
        {"name":"Tanzania, United Republic of","code":"TZ"},
        {"name":"Thailand","code":"TH"},
        {"name":"Timor-Leste","code":"TL"},
        {"name":"Togo","code":"TG"},
        {"name":"Tokelau","code":"TK"},
        {"name":"Tonga","code":"TO"},
        {"name":"Trinidad and Tobago","code":"TT"},
        {"name":"Tunisia","code":"TN"},
        {"name":"Turkey","code":"TR"},
        {"name":"Turkmenistan","code":"TM"},
        {"name":"Turks and Caicos Islands","code":"TC"},
        {"name":"Tuvalu","code":"TV"},
        {"name":"Uganda","code":"UG"},
        {"name":"Ukraine","code":"UA"},
        {"name":"United Arab Emirates","code":"AE"},
        {"name":"United Kingdom","code":"GB"},
        {"name":"United States","code":"US"},
        {"name":"United States Minor Outlying Islands","code":"UM"},
        {"name":"Uruguay","code":"UY"},
        {"name":"Uzbekistan","code":"UZ"},
        {"name":"Vanuatu","code":"VU"},
        {"name":"Venezuela","code":"VE"},
        {"name":"Viet Nam","code":"VN"},
        {"name":"Virgin Islands, British","code":"VG"},
        {"name":"Virgin Islands, U.s.","code":"VI"},
        {"name":"Wallis and Futuna","code":"WF"},
        {"name":"Western Sahara","code":"EH"},
        {"name":"Yemen","code":"YE"},
        {"name":"Zambia","code":"ZM"},
        {"name":"Zimbabwe","code":"ZW"}
    ];




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
        <Loading loading={load}/>
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
                                customer
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
                                <input accept="image/*" ref={image01} onInput={onchange} className="img_01" type="file" name="sawir1aad" style={{visibility:"hidden"}} 
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
                            <select className="la_bax xadiga" value={Magaalada} name="Nooca"
                                onChange ={(e) => setMagaalada(e.target.value)}
                                > 
                                {countries.map((Wadano) => (
                                    <option value={Wadano.name}>{Wadano.name}</option>
                                ))}                                   
                                
                            </select>
                                {/* <input type="text" value={Magaalada} className="xadiga" required name="Xadiga"
                                onChange ={(e) => setMagaalada(e.target.value)}
                                /> */}
                                <select className="la_bax xadiga" value={Jinsi} name="Nooca"
                                onChange ={(e) => setJinsi(e.target.value)}
                                >
                                    <option value="lab">Lab</option>
                                    <option value="Dhedig">Dhedig</option>
                                </select>
                            </div>
                            <button onClick={loading_handale} ref={btn_add} className="la_bax" type="submit">  Cusbonaysii</button>
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