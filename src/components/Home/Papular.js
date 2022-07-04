import { Link } from "react-router-dom";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faCrown} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useState } from "react";

function Papular(){
    const [papular, setpapular] = useState(null)

    useEffect(() => {
        fetch('/qaybo/gaar/api')
        .then((res) =>{
            if(res.ok){
                return res.json()
            }
        })
        .then((data) => {
            setpapular(data)
        })
    }, [])
    return (
        <div className="papular">
                <ul>
                    <li className="title">
                        <FontAwesomeIcon className="i" icon={faCrown}/>
                        <p> Ugu Badan :</p>
                    </li>
                    {papular && papular.map((data) => (
                        <li className="papular_items" key={data._id}>
                            <Link to={`/Qayb/${data._id}`}>
                                {data.Name} (0)
                            </Link>
                        </li>
                    ))}
                </ul>
        </div>
)
}


export default Papular