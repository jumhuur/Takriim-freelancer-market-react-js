import AsideUser from "../Profile/Aside_Profile";
import Holder from "../NavHolder";
import Footer from "../Footer";
import {FaRegClock , FaPaperPlane} from 'react-icons/fa';

function Chat(){
    return(
        <>
        <Holder />
        <section className="orders invocs">
        <div className="xajiye kala_qayb">
            <AsideUser />
            <div className="tranding_haye">
                <div className="chat_conte">
                    <div className="raper">
                    <div className="massages_chat">
                        <div className="userinfo">
                            <div className="image">
                                <p>P</p>
                            </div>
                            <div className="maclumaad_user">
                                <h2 className="sender_name">Maxamad dayib</h2>
                                <span className="Time"> <FaRegClock /> 3 Day Ka Hor</span>
                            </div>
                            <div className="content_massage">
                               <p className="msg">walaal waan ku salamay waxaan ku waydiiyay filasha oo dhan mayay soo wada dirsameen</p> 
                            </div>
                        </div>

                    </div>
                    <div className="massages_chat">
                        <div className="userinfo">
                            <div className="image">
                                <p>P</p>
                            </div>
                            <div className="maclumaad_user">
                                <h2 className="sender_name">Maxamad dayib</h2>
                                <span className="Time"> <FaRegClock /> 3 Day Ka Hor</span>
                            </div>
                            <div className="content_massage">
                               <p className="msg">walaal waan ku salamay waxaan ku waydiiyay filasha oo dhan mayay soo wada dirsameen</p> 
                            </div>
                        </div>

                    </div>
                    <div className="massages_chat">
                        <div className="userinfo">
                            <div className="image">
                                <p>P</p>
                            </div>
                            <div className="maclumaad_user">
                                <h2 className="sender_name">Maxamad dayib</h2>
                                <span className="Time"> <FaRegClock /> 3 Day Ka Hor</span>
                            </div>
                            <div className="content_massage">
                               <p className="msg">
                               Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                               when an unknown printer 
                               took a galley of type and scrambled it to make a type specimen book
                               </p> 
                            </div>
                        </div>

                    </div>
                    <div className="massages_chat">
                        <div className="userinfo">
                            <div className="image">
                                <p>M</p>
                            </div>
                            <div className="maclumaad_user">
                                <h2 className="sender_name">Muuse Maxamad</h2>
                                <span className="Time"> <FaRegClock /> 15 Day Ka Hor</span>
                            </div>
                            <div className="content_massage">
                               <p className="msg">
                                ok Walaal waxaan ku waydiin doonaa
                               </p> 
                            </div>
                        </div>

                    </div>
                    <div className="dirida">
                        <form className="chat">
                            <textarea spellCheck="false" type="text" required placeholder="Qor Fariintaada ..."  name="massage"></textarea>
                            <button type="submit"><FaPaperPlane /> Dir</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <Footer />
        </>
    )
}


export default Chat