import { Link } from "react-router-dom";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faRightToBracket ,faUser ,faHouse,faPaperclip ,faPaperPlane} from "@fortawesome/free-solid-svg-icons";

function ChatOnline(){
    return(
        <section className="Chat">
        <div className="xajiye">
            <div className="chat_an">
                <div className="chatbody">
                    <div className="chatleft">
                        <div className="list_massage">
                            <div className="logo">
                                <img src="/images/go.svg" alt="logo" />
                            </div>
                            <div className="links">
                                <div className="tablink">
                                    <Link to={'/'}>
                                        <FontAwesomeIcon icon={faHouse} /> Homepage
                                    </Link>
                                </div>
                                <div className="tablink">
                                    <a href="">
                                        <FontAwesomeIcon icon={faUser} /> Profile
                                    </a>
                                </div>
                                <div className="tablink">
                                    <a href="">
                                       <FontAwesomeIcon icon={faRightToBracket} /> Logout
                                    </a>
                                </div>
                            </div>
                            <div className="userinfo">
                                <div className="userimages">
                                    <img src="/images/avatar.jpg" />
                                </div>
                                <div className="usermacluumaad">
                                    <h2>Maxamad dayib</h2>
                                    <p>Full stack web devaloper</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chatmassages">
                       <div className="massages_list">
                        <div className="msg">
                            <div className="loadmassage his">
                                <h2>sender name | <span>03:300 PM</span></h2>
                                <p>
                                    Waan ku salaamay walaal maxamad waxaan doonayaa inaad iga caawisaan 
                                    hawlo badan oo jira xaga wax iibsiga 
                                </p>
                        </div>
                        <div className="loadmassage you">
                            <h2>Maxamad dayib | <span>03:300 PM</span></h2>
                            <p>
                                Waan ku salaamay walaal maxamad waxaan doonayaa inaad iga caawisaan 
                                hawlo badan oo jira xaga wax iibsiga 
                            </p>
                        </div>
                        <div className="loadmassage his">
                            <h2>sender name | <span>03:300 PM</span></h2>
                            <p>
                                Waan ku salaamay walaal maxamad waxaan doonayaa inaad iga caawisaan 
                                hawlo badan oo jira xaga wax iibsiga 
                            </p>
                        </div>
                        <div className="loadmassage you">
                            <h2>Maxamad dayib | <span>03:300 PM</span></h2>
                            <p>
                                Waan ku salaamay walaal maxamad waxaan doonayaa inaad iga caawisaan 
                                hawlo badan oo jira xaga wax iibsiga 
                            </p>
                        </div>
                        <div className="loadmassage his">
                            <h2>sender name | <span>03:300 PM</span></h2>
                            <p>
                                Waan ku salaamay walaal maxamad waxaan doonayaa inaad iga caawisaan 
                                hawlo badan oo jira xaga wax iibsiga 
                                Waan ku salaamay walaal maxamad waxaan doonayaa inaad iga caawisaan 
                                hawlo badan oo jira xaga wax iibsiga 
                                Waan ku salaamay walaal maxamad waxaan doonayaa inaad iga caawisaan 
                                hawlo badan oo jira xaga wax iibsiga 
                                Waan Ku Salaamay Walaal Maxamad Waxaan 
                                Doonayaa Inaad Iga Caawisaan Hawlo Badan Oo 
                                Jira Xaga Wax Iibsiga Waan Ku Salaamay Walaal Maxamad Waxaan Doonayaa
                                Inaad Iga Caawisaan Hawlo Badan Oo Jira Xaga Wax Iibsiga Waan Ku Salaamay Walaal 
                                Maxamad Waxaan Doonayaa Inaad Iga Caawisaan Hawlo Badan Oo Jira Xaga Wax Iibsiga
                            </p>
                        </div>
                        <div className="loadmassage you">
                            <h2>Maxamad dayib | <span>03:300 PM</span></h2>
                            <p>
                                ok walaal 
                            </p>
                        </div>
                        </div>
                        </div>
                        <div className="forminput">
                            <form>
                                <input id="Fariin_type" type="text" placeholder="Qor Fariintaada..." required spellCheck="false" autoComplete="false" />
                                <button className="ditbtn"><FontAwesomeIcon  icon={faPaperPlane}/></button>
                                <span className="ditbtn _attech"><FontAwesomeIcon icon={faPaperclip} /></span>
                            </form>
                        </div>
                       </div>
                    </div>
                </div>
        </div>
        </section>
    )
}


export default ChatOnline