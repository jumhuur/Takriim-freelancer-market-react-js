import { useState ,useEffect } from "react"
import Aside from "../Aside";
import Jobs from "../Jobs";
import Jobskl from "../skaltons/Jobskalaton";
import { collection,getFirestore, query, onSnapshot, limit, orderBy, getDoc, getDocs } from "firebase/firestore";
function ContentHome(){
    const [JobsData, setDataJobs] = useState(null)
    //get data user 
    const db = getFirestore()
    const colref = collection(db, "Jobs")
    const q = query(colref, limit(10), orderBy("CreatedAt", "desc"))    
    //hellida docs 
    async function  getdaata_user(){
        getDocs(q)
        .then((snapshot) => {
            const Dhaq1aad = []
            snapshot.docs.forEach((doc) => {
                Dhaq1aad.push({...doc.data(), id:doc.id})
            })
            setDataJobs(Dhaq1aad)
        })
    }


    useEffect((function(){
        // const objects  = async () => {
        //     const data =  await fetch('/jobs/Home');
        //     const object = await data.json()
        //     if(data.ok){
        //         setDataJobs(object)
        //     }
        // }
        // objects()
        getdaata_user()
    }), [])
    return(
        <section className="sliding">
            <div className="xajiye kala_qayb">
                <Aside />
                {/* <!---------------biloga shaqooyinka -------------------> */}
                {JobsData ? <Jobs Jobsset={JobsData}/> : <Jobskl />}
                {/* <!---------------dhamaadka shaqooyinka -------------------> */}
            </div>
        </section>
    )
}

export default ContentHome