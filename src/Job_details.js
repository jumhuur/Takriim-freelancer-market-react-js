import Holder from "./components/NavHolder";
import Joblinks from "./components/Job/Joblinks";
import JobContent from "./components/Job/Jobcontent";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Sklall from "./components/skaltons/sklAll";
import LinksQaybo from "./components/Links_qaybo";
import Footer from "./components/Footer";


function Job_details(){
    const {id} = useParams();
    const {user} = useParams()
    const [Jobdetails, setJobdetails] = useState(null)
    const [userdetails, setuserdetals] = useState(null)

    setTimeout(function(){

    },3000)
    useEffect((function(){
        // soosaarida datada jobs
            fetch(`http://localhost:800/Jobs/${id}`)
            .then((res) =>{
                if(res.ok){
                    return res.json()
                }
            })
            .then((data) => {
                setJobdetails(data)
                if(Jobdetails){
                }

            })

            fetch(`http://localhost:800/User/${user}`)
            .then((res) =>{
                if(res.ok){
                    return res.json()
                }
            })
            .then((data) => {
                setuserdetals(data)
            })

    }),[])
    return (
        <div>
            <Holder />
            <Joblinks />
            {Jobdetails ? <JobContent jobdetails={Jobdetails} user={userdetails} /> : <Sklall />}
            <Footer />
        </div>
    )

}


export default Job_details