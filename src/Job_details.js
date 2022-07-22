import Holder from "./components/NavHolder";
import Joblinks from "./components/Job/Joblinks";
import JobContent from "./components/Job/Jobcontent";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Sklall from "./components/skaltons/sklAll";
import Footer from "./components/Footer";


function Job_details(){
    const {id} = useParams();
    const {user} = useParams()
    const [Jobdetails, setJobdetails] = useState(null)
    const [userdetails, setuserdetails] = useState(null)

    setTimeout(function(){

    },3000)
    useEffect((function(){
        // soosaarida datada jobs

        const getonejobs = async ()  => {
            const  data =  await fetch(`/jobs/${id}`)
            const response = await data.json()
            if(data.ok){
                setJobdetails(response)
            }
        }
        getonejobs()

        fetch(`http://localhost:800/User/${user}`)
        .then((res) =>{
            if(res.ok){
                return res.json()
            }
        })
        .then((data) => {
            setuserdetails(data)
        })
        // fetch(`/jobs/${id}`)
        // .then((res) =>{
        //     if(res.ok){
        //         return res.json()
        //     }
        // })
        // .then((data) => {
        //     setJobdetails(data)
        //     if(Jobdetails){
        //     }

        // })

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