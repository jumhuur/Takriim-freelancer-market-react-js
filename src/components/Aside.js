import Xayaysiis from "./Saponsered_Ads";
function Aside() {
    return (
        <div className="filters">
                <div className="kalmado">
                    <h2><i className="fa-solid fa-magnifying-glass"></i> Kalmad Ku Baadh</h2>
                    <input type="search" required placeholder="kalmad ku qor.." />
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
                        <div className="haye_checkh">
                            <input type="checkbox" id="chekh10" name="DesSSSSSSSSSSSSing" />
                            <label htmlFor="chekh10">Suuq Gayn casriya</label>
                        </div>
                        <div className="haye_checkh">
                            <input type="checkbox" id="chekh11" name="Desing" />
                            <label htmlFor="chekh11">Desing</label>
                        </div>
                        <div className="haye_checkh">
                            <input type="checkbox" id="chekh11" name="Desing" />
                            <label htmlFor="chekh11">sixida qoraalada</label>
                        </div>
                        <div className="haye_checkh">
                            <input type="checkbox" id="chekh11" name="Desing" />
                            <label htmlFor="chekh11">Wax Kale</label>
                        </div>
                </div>
                <div>
                    <Xayaysiis />
                </div>
        </div>
    )
}


export default Aside