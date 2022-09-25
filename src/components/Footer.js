// import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
// import {faFacebook,} from "@fortawesome/free-solid-svg-icons";
import {FaFacebook , FaTwitter ,FaWhatsapp} from "react-icons/fa"
function Footer(){
    return (
        <footer>
        <div className="xajiye">
            <div className="my_footer">
                <div className="logo_footer">
                <img src="/images/Logo_Takriim-06.png" alt="logo" />
                </div>
                <div className="socil_foter">
                    <ul className="social">
                        <li>
                            <a href="">
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="">
                               <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaWhatsapp />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="links_footer">
                    <ul className="links">
                        <li>
                            <a href="">
                                Shuruudaha Adeegsiga
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Shuruudaha Adeegsiga
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Shuruudaha Adeegsiga
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer