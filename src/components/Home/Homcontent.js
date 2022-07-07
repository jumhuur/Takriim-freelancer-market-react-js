import { useState ,useEffect } from "react"
import Aside from "../Aside";
import Jobs from "../Jobs";
import Jobskl from "../skaltons/Jobskalaton";
import auth from "../Acount/Sinup";
function ContentHome(){
    const [JobsData, setDataJobs] = useState(null)
    useEffect((function(){
        const objects  = async () => {
            const data =  await fetch('/jobs/Home');
            const object = await data.json()
            if(data.ok){
                setDataJobs(object)
            }
        }
        objects()
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