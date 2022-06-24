import { Link } from "react-router-dom"

function SingUp(){
    return(
        <section className="sinup_page">
        <div className="xajiye">
            <div className="samayso">
                <div className="contaner">
                    <div className="qoraal">
                        <h2 className="log_sing">Ka Samayso Halakan Akoon</h2>
                        <p className="log_sing">
                            Akoon inaad samaysataa waxay kaa caawinaysaa inaad si 
                            dhamaystiran ugua wada faaidaysato shabakada takriim
                        </p>
                    </div>
                    <form className="akoon">
                        <div>
                            <label>Magacaga :</label>
                            <input type="tex" name="magaca" required placeholder="Magacaga" />
                        </div>
                        <div>
                            <label>Email-kaaga :</label>
                            <input type="email" name="email" required placeholder="Qor Email-kaaga" />
                        </div>
                        <div>
                            <label>password :</label>
                            <input type="password" name="password" required  placeholder="Qor password-ka" />
                        </div>
                        <div>
                            <label>Ku Celi password-ka :</label>
                            <input type="password" name="magaca" required placeholder="Qor password-ka" />
                        </div>
                        <div>
                            <button type="submit"><i className="fa-solid fa-user-plus"></i> Samayso</button>
                            <Link to={'/Acount/Login'}><i className="fa-solid fa-right-to-bracket"></i> Hadaad Hore U lahayd Gal Akoon</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}


export default SingUp