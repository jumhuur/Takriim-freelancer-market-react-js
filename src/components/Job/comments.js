import { faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {FaRegStar,} from "react-icons/fa"
import {format} from "timeago.js";
import { collection,getFirestore, query, onSnapshot, limit, orderBy, where } from "firebase/firestore";

function Commenst({thisid}){
    const [comments , setcomments] = useState(null)
    const db = getFirestore()
        //get data ordrer frelancer 
        const commentref = collection(db, "Comments")
        const q = query(commentref, orderBy('CreatedAt', "desc"), where("Jobid" , "==" , thisid.id) , limit(50))    
        //hellida docs 
        async function  get_comm(){
            onSnapshot (q, (snapshot) => {
                const Dhaq1aad = []
                snapshot.docs.forEach((doc) => {
                    Dhaq1aad.push({...doc.data(), id:doc.id})
                })
                setcomments(Dhaq1aad)
            })
        }
    useEffect(() =>{
        get_comm()
    }, [])
    return(
        <div className="comm">
            {comments && comments.map((data => 
                          <div className="iibiye_info" key={data.id}>
                          <div className="sir">
                              <img src={data.Image} />
                          </div>
                          <div className="info_seller">
                              <h2>{data.Username}</h2>
                              <p className="wakhti_com">{format(data.CreatedAt)} Ka Hor</p>
                              {data.Rate == '5' ? 
                                <p className="qiimayn">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    (<span>{data.Rate}</span>)
                                </p>
                                :data.Rate == '4' ?
                                <p className="qiimayn">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FaRegStar className="i" />
                                    (<span>{data.Rate}</span>)
                                </p>
                                :data.Rate == '3' ?
                                <p className="qiimayn">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FaRegStar className="i" />
                                <FaRegStar className="i" />
                                (<span>{data.Rate}</span>)
                                </p>
                                :data.Rate == '2' ?
                                <p className="qiimayn">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FaRegStar className="i" />
                                <FaRegStar className="i" />
                                 <FaRegStar className="i" />
                                (<span>{data.Rate}</span>)
                                </p>
                                :data.Rate == '1' ?
                                <p className="qiimayn">
                                <FontAwesomeIcon icon={faStar} />
                                <FaRegStar className="i" />
                                <FaRegStar className="i" />
                                <FaRegStar className="i" />
                                <FaRegStar className="i" />
                                (<span>{data.Rate}</span>)
                                </p>
                                :
                                ""
                            }
                            <p className="comments">
                            {data.Comment}.
                            </p>
                            </div>
          
                      </div>
            ))}
        </div>
    )
}


export default Commenst