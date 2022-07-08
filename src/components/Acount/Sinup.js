import { Link, useHistory } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { UseAuth } from "../context/authcontext";
import Alert_wrong from "../Alert2";


function SingUp(){
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [name, setname] = useState('')
    const [alert, setalert] = useState(false)
    const [msg, semsg] = useState(false)
    const  { sinup , crentuser } = UseAuth()
    const toHomepage = useHistory()
    

    // gaar 

    // bilowga samaynrta 
    const handelsubmit = async (e) => {
        e.preventDefault()
        try {
            await sinup(email,password)
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
            toHomepage.push('/')
        } 

        } catch(err) {
            setalert(true)
            semsg('Emailkan Horaa Loo Qatay')
            console.log(err)
        }

        setTimeout(() => {
            setalert(false)
        } , 10000)
        
        // const data = {email, password , name}
        // const response = await fetch('/users', {
        //     method: "post",
        //     body: JSON.stringify(data),
        //     headers : {'Content-Type': 'application/json'}
        // })

        // const json = await response.json()
        // if(!response.ok){
        //     console.log('qalad')
            
        // }

        // if(response.ok){
        //     console.log('added')
        //     console.log(data)
        // } 
    }
    return(
        <section className="sinup_page">
        <div className="xajiye">
            <div className="samayso">
                <div className="contaner">
                    <Alert_wrong  msg={msg} alert={alert}/>
                    <div className="qoraal">
                        <h2 className="log_sing">Samayso akoon </h2>
                        <p className="log_sing">
                            {crentuser && crentuser.email} 
                            dhamaystiran ugua wada faaidaysato shabakada takriim
                        </p>
                    </div>
                    <form className="akoon" method="post" onSubmit={handelsubmit}>
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
                            onChange={(e) => setpassword(e.target.value)} minLength={6}
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