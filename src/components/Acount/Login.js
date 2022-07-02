import { Link } from "react-router-dom"
import { useState } from "react";
function Login(){
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    return(
        <section className="sinup_page">
        <div className="xajiye">
            <div className="samayso">
                <div className="contaner">
                    <div className="qoraal">
                        <h2 className="log_sing">Soo dhawaaw Markale</h2>
                        <p className="log_sing">
                            dib u gal akoonkaaga si aad hawalaagii u sii wadato mahadsanid
                        </p>
                    </div>
                    <form className="akoon" method="post">
                        <div>
                            <label>Email-kaaga :</label>
                            <input type="email" name="email" required placeholder="Qor Email-kaaga" 
                            onChange={(e) => setemail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>password :</label>
                            <input type="password" name="password" required  placeholder="Qor password-ka" 
                            onChange={(e) => setpassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <button type="submit"><i className="fa-solid fa-right-to-bracket"></i> Gal Akoon</button>
                            <Link to={'/Acount/Singup'}><i className="fa-solid fa-user-plus"></i> Hadaad lahayn Samayso Hada</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}


export default Login