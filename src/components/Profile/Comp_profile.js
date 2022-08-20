import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UseAuth } from "../context/authcontext"


function CompProfile(){
    const [active, setactive] = useState(null)
    const {Userinfo} = UseAuth()
    const Handale_overlogin = () => {
        active ? setactive(false) : setactive(true)
        console.log(active)
    }

    const umuur = () => {
        if(Userinfo && Userinfo.Talefan === "undefined" || Userinfo && Userinfo.Image === "/images/avatar.jpg"){
            setactive(true)
        }
    }
    

    useEffect(() => {
        umuur()
    },[])
    return (
        <>
        <div className={active ? "over_log active":"over_log"} >
            <div className="login_now">
                <div className="close_over" onClick={Handale_overlogin}>
                    <p>x</p>
                </div>
                <div className="image">
                    <img src={Userinfo && Userinfo.Image} />
                </div>
                <div id="btn_com2">
                <Link to={`/Profile/update/${Userinfo && Userinfo.uid}`}>
                    <button id="btn_com">Buuxi Maclumadka Akoonkaaga</button>
                </Link>
                </div>
                {/* <form className="login_over_foo" method="">
                    <div className="inputs">
                        <label>Email-kaaga</label>
                        <input type="text" required placeholder="Emailkaaga" />
                    </div>
                    <div className="inputs">
                        <label>Passwor-kaaga</label>
                        <input type="text" required placeholder="Emailkaaga" />
                    </div>
                    <div className="inputs links_foo">
                        <a href="#">Waan ilaawa Passwor-ka</a>
                        <a href="#">Samayso Akoon Cusub</a>
                    </div>
                </form> */}
            </div>
        </div>
        </>
    )
}

export default CompProfile
