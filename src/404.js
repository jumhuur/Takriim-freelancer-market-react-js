import { Link } from "react-router-dom"
import Nav from "./components/Nav"
function Notfound(){
    return(
        <div>
        <div>
        <section className="nav_bar">
            <div className="head">
            <div className="xajiye">
                <Nav />
            </div>
            </div>
        <div className="bollets"></div>
        <div className="bollets"></div>
        <div className="bollets"></div>
        <div className="bollets"></div>
        <div className="bollets"></div>
        <div className="bollets"></div>
        <div className="bollets"></div>
        <div className="bollets"></div>
        <div className="bollets"></div>
        <div className="bollets"></div>
        <div className="xajiye">
        <div className="home_page">
                <div className="Qayb home_page2">
                    <div className="qoraalo not_found">
                        <h2>404</h2>
                        <p>Bog Aan Jirin Ayaad Radinaysaa</p>
                        <Link to="/">
                            <button><i className="fa-solid fa-arrow-left"></i> Ku Laabo Home Page</button>
                        </Link>
                       
                    </div>
                </div>
                <div className="Qayb sawir">
                    <img className="not_found_image" src="/images/4041.svg" alt="sawir01" />
                </div>
        </div>
        </div>
        </section>
        </div>
        </div>
    )
}

export default Notfound