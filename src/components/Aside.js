import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faStar,faStarHalfStroke} from "@fortawesome/free-solid-svg-icons";
import Xayaysiis from "./Saponsered_Ads";
import Takriim from "./Takriim";
function Aside() {
    return (
        <div className="filters">
                <div className="kalmado">
                    <h2><i className="fa-solid fa-magnifying-glass"></i> Qor Magaca Adeegaha</h2>
                    <input type="search" required placeholder="kalmad ku qor.." />
                </div>
                <div className="noocyo">
                        <h2 id="noocyo_title"><i className="fa-solid fa-network-wired"></i> Qiimaynta</h2>
                        <div className="haye_checkh">
                                <input type="checkbox" id="chekh1" value="dadsa" name="5" />
                                <label className="icon_qimayn" htmlFor="chekh1">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                 </label>
                        </div>
                        <div className="haye_checkh">
                            <input type="checkbox" id="chekh2" name="4" />
                            <label className="icon_qimayn" htmlFor="chekh2">  
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStarHalfStroke} />
                            </label>
                            
                        </div>
                        <div className="haye_checkh">
                            <input type="checkbox" id="chekh3"  name="3" />
                            <label className="icon_qimayn" htmlFor="chekh3">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfStroke} />
                            <FontAwesomeIcon icon={faStarHalfStroke} />
                            
                            </label>
                        </div>
                        <div className="haye_checkh">
                            <input type="checkbox" id="chekh4" name="2" />
                            <label className="icon_qimayn"  htmlFor="chekh4">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfStroke} />
                            <FontAwesomeIcon icon={faStarHalfStroke} />
                            <FontAwesomeIcon icon={faStarHalfStroke} />
                            </label>
                        </div>
                        <div className="haye_checkh">
                            <input type="checkbox" id="chekh5" name="1" />
                            <label className="icon_qimayn" htmlFor="chekh5">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfStroke} />
                            <FontAwesomeIcon icon={faStarHalfStroke} />
                            <FontAwesomeIcon icon={faStarHalfStroke} />
                            <FontAwesomeIcon icon={faStarHalfStroke} />
                            </label>
                        </div>
                </div>
                <div className="noocyo">
                        <h2 id="noocyo_title"><i className="fa-solid fa-network-wired"></i> Nooca Shaqada</h2>
                        <div className="haye_checkh">
                                <input type="checkbox" id="chekh1" value="dadsa" name="Web Desing" />
                                <label htmlFor="chekh1">Web Desing</label>
                        </div>
                        <div className="haye_checkh">
                            <input type="checkbox" id="chekh2" name="Logo Desing" />
                            <label htmlFor="chekh2">Logo Desing</label>
                        </div>
                        <div className="haye_checkh">
                            <input type="checkbox" id="chekh3"  name="web Devaloper" />
                            <label htmlFor="chekh3">web Devaloper</label>
                        </div>
                        <div className="haye_checkh">
                            <input type="checkbox" id="chekh4" name="markating" />
                            <label  htmlFor="chekh4">markating</label>
                        </div>
                        <div className="haye_checkh">
                            <input type="checkbox" id="chekh5" name="turjumaad" />
                            <label htmlFor="chekh5">turjumaad</label>
                        </div>
                        <div className="haye_checkh">
                            <input type="checkbox" id="chekh6" name="sixid" />
                            <label htmlFor="chekh7">Sixid Qoraalo carabiya</label>
                        </div>
                        <div className="haye_checkh">
                            <input type="checkbox" id="chekh8" name="Video Editing" />
                            <label htmlFor="chekh8">Video Editing</label>
                        </div>
                        <div className="haye_checkh">
                            <input type="checkbox" id="chekh9" name="Qorid & Hufid" />
                            <label htmlFor="chekh9">Qorid & Hufid </label>
                        </div>
                </div>
                <div className="noocyo">
                        <h2 id="noocyo_title"><i className="fa-solid fa-network-wired"></i> Qiimaha</h2>
                        <div className="haye_checkh">
                                <input type="checkbox" id="chekh1" value="200" name="200" />
                                <label htmlFor="chekh1">
                                    200 Iib +
                                 </label>
                        </div>
                        <div className="haye_checkh">
                            <input type="checkbox" id="chekh2" name="100" />
                            <label htmlFor="chekh2">  
                            100 Iib +
                            </label>
                        </div>
                        <div className="haye_checkh">
                            <input type="checkbox" id="chekh3"  name="50" />
                            <label htmlFor="chekh3">
                            50 Iib +
                            </label>
                        </div>
                        <div className="haye_checkh">
                            <input type="checkbox" id="chekh4" name="25" />
                            <label  htmlFor="chekh4">
                            25 Iib +
                            </label>
                        </div>
                        <div className="haye_checkh">
                            <input type="checkbox" id="chekh5" name="10" />
                            <label htmlFor="chekh5">
                                10 Iib +
                            </label>
                        </div>
                        <div className="haye_checkh">
                            <input type="checkbox" id="chekh5" name="5" />
                            <label htmlFor="chekh5">
                                05 Iib +
                            </label>
                        </div>
                </div>
                <div>
                    <Xayaysiis />
                    <Takriim />
                </div>
        </div>
    )
}


export default Aside