import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { areIntervalsOverlappingWithOptions } from "date-fns/fp";

function SingUp(){
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [name, setname] = useState('')

    // bilowga samaynrta 
    const sinup = async (e) => {
        e.preventDefault()
        const data = {email, password , name}
        const response = await fetch('/users', {
            method: "post",
            body: JSON.stringify(data),
            headers : {'Content-Type': 'application/json'}
        })

        const json = await response.json()
        if(!response.ok){
            console.log('qalad')
            
        }

        if(response.ok){
            console.log('added')
            console.log(data)
        }
        
        
    }

    return(
        <section className="sinup_page">
        <div className="xajiye">
            <div className="samayso">
                <div className="contaner">
                    <div className="qoraal">
                        <h2 className="log_sing">Samayso akoon </h2>
                        <p className="log_sing">
                            kaa caawinaysaa inaad si 
                            dhamaystiran ugua wada faaidaysato shabakada takriim
                        </p>
                    </div>
                    <form className="akoon" method="post" onSubmit={sinup}>
                        <div>
                            <label>Magacaga :</label>
                            <input type="tex" name="name" required placeholder="Magacaga"
                            onChange={(e) => setname(e.target.value)}
                            />
                        </div>
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