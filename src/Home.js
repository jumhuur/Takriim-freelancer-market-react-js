import Nav from "./components/Nav"
import LinksQaybo from "./components/Links_qaybo";
import Footer from "./components/Footer";
import Homcontent from './components/Home/Homcontent'
import Ubuc from "./components/Home/UbucHome";
import {useState} from "react";


function Homepage(){
    const [hassclass , setHasclass] = useState(false);
    function headscrol(){
        if(window.scrollY > 50){
            setHasclass(true);
        } else{
            setHasclass(false)
        }
        
    }

    window.onscroll = function(){
        headscrol()
    }
    return(
        <div>
        <section className="nav_bar">
            <div className={hassclass ? "head hoos":"head"}>
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
            <Ubuc />
        </div>
        </section>
        <LinksQaybo />
        <Homcontent />
        <Footer />
        </div>
    )
}

export default Homepage