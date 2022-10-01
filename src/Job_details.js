import Holder from "./components/NavHolder";
import Joblinks from "./components/Job/Joblinks";
import JobContent from "./components/Job/Jobcontent";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Sklall from "./components/skaltons/sklAll";
import Footer from "./components/Footer";
import {getFirestore, getDoc, doc } from "firebase/firestore";
import Loading from "./components/loading";

function Job_details(){
    const {id} = useParams();
    const {user} = useParams()
    const [Jobdetails, setJobdetails] = useState(null)
    const [userdetails, setuserdetails] = useState(null)


useEffect(() => {
   // get data job 
   const db = getFirestore()
   const docref = doc(db, "Jobs" , id)
   //const q = query(colref)    
   function  getsingalejob(){
       getDoc(docref)
       .then((doc) => {
           setJobdetails({...doc.data(), id:doc.id})
       })
   }

   //get data user     
   //hellida docs 
   const Usercref = doc(db, "Users" , user)
   //const q = query(colref)    
   function  getsinleuser(){
       getDoc(Usercref)
       .then((doc) => {
           setuserdetails(doc.data())
       })
   }
   getsinleuser()
   getsingalejob()
},[user])
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