import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { UseAuth } from "../context/authcontext";
import Alert_wrong from "../Alert2";
import Loading from "../loading";
function Login(){
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [log, setlog] = useState(false)
    const [wrongmsg , setwrongmsg] = useState('')
    const {Login,crentuser} = UseAuth()
    const navigator = useHistory()
    const path_kale = useHistory()
    if(crentuser){
        path_kale.push("/")
    }

    // loading
    const [load, setload] = useState(false)
    const loading_handale = () => {
        load ? setload(false) : setload(true)
        console.log(load)
    }

    const hanlaelogin = async (e) => {
        e.preventDefault()
        loading_handale()
        try{
            await Login(email, password)
            // const data = {email, password}
            // const response = await fetch('/users/log', {
            //     method: "post",
            //     body: JSON.stringify(data),
            //     headers : {'Content-Type': 'application/json'}
            // })

           
            // const json = await response.json()
            // const thiuser = fetch(`/users/${json._id}`)
            // .then((response) => {
            //     if(response.ok){
            //         return response.json()
            //     }
            // })
            // .then((data) => {
            //     console.log(data)
            // })
            // console.log(thiuser)
            // if(!response.ok){
            //     console.log('qalad')
            // }
    
            // if(response.ok){
            //     console.log('added')
            //     console.log(data)
            // } 
            navigator.push('/')

        } catch (error){
            setload(false)
            setlog(true)
            console.log(error)
            setwrongmsg('Fadlan Emailka Ama Passworka Iska Sax')
        }

        setTimeout(() => {
            setlog(false)
        } , 10000)
    }




    return(
        <section className="sinup_page">
             <Loading loading={load}/>
        <div className="xajiye">
            <div className="samayso">
                <div className="contaner">
                    <Alert_wrong alert={log} msg={wrongmsg}/>
                    <div className="qoraal">
                        <h2 className="log_sing">Soo dhawaaw Markale</h2>
                        <p className="log_sing">
                            dib u gal akoonkaaga si aad hawalaagii u sii wadato mahadsanid
                        </p>
                    </div>
                    <form className="akoon" method="post" onSubmit={hanlaelogin} >
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