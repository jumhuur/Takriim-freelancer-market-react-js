import { useState ,useEffect } from "react"
import Aside from "../Aside";
import Jobs from "../Jobs";
import Jobskl from "../skaltons/Jobskalaton";
function ContentHome(){
    const [JobsData, setDataJobs] = useState(null)
    useEffect((function(){
        fetch('http://localhost:800/Jobs')
        .then((res) =>{
            if(res.ok){
                return res.json()
            }
        })
        .then((data) => {
            setDataJobs(data)
        })
        //setDataJobs(listdata)
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