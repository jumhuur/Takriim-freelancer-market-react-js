import { Link, useHistory } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { UseAuth } from "../context/authcontext";
import Alert_wrong from "../Alert2";


function SingUp(){
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [Name, setname] = useState('')
    const [Nooc, setNooc] = useState('customer')
    const [Magaalada, setMagaalada] = useState('Soomaliland')
    const [Heerka, setHeerka] = useState('1')
    const [Image, setImage] = useState('/images/avatar.jpg')
    const [r_Total, setr_Total] = useState('0.00')
    const [r_Furan, setr_Furan] = useState('0.00')
    const [r_Xidhan, setr_Xidhan] = useState('0.00')
    const [Info, setInfo] = useState('Takriim User')
    const [Macmiil, setMacmiil] = useState(0)
    const [Qiimayn_user, setQiimayn_user] = useState('0')
    const Qiimayn_user5 = 0;
    const Qiimayn_user4 = 0;
    const Qiimayn_user3 = 0;
    const Qiimayn_user2 = 0;
    const Qiimayn_user1 = 0;

    const [alert, setalert] = useState(false)
    const [msg, semsg] = useState(false)
    const  { sinup , crentuser, Add_userdata } = UseAuth()
    const toHomepage = useHistory()
    const path_kale = useHistory()
    if(crentuser){
        path_kale.push("/")
    }

    // gaar 

    // bilowga samaynrta 
    const handelsubmit = async (e) => {
        e.preventDefault()
        try {
        const data_user = await sinup(email,password)
        await Add_userdata(
            Name,
            Nooc , 
            Image , 
            Heerka, 
            Magaalada, 
            Info , 
            r_Total ,
            r_Xidhan, 
            r_Furan , 
            Macmiil,
            Qiimayn_user,
            Qiimayn_user5,
            Qiimayn_user4,
            Qiimayn_user3,
            Qiimayn_user2,
            Qiimayn_user1,
            data_user.user.uid, 
            data_user.user.uid)
        toHomepage.push('/')
        } catch(err) {
        console.log(err)
        setalert(true)
        semsg('Emailkan Horaa Loo Qatay')
        setTimeout(() => {
            setalert(false)
        } , 10000)
        }
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
                            <input type="tex" name="name" required placeholder="Magacaga" value={Name}
                            onChange={(e) => setname(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Email-kaaga :</label>
                            <input type="email" name="email" value={email} required placeholder="Qor Email-kaaga" 
                            onChange={(e) => setemail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>password :</label>
                            <input type="password" name="password" value={password} required  placeholder="Qor password-ka"
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