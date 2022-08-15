import { faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {FaRegStar , FaSpinner} from "react-icons/fa"
import formatDistanceToNow  from "date-fns/formatDistanceToNow"

function Commenst({thisid}){
    const [comments , setcomments] = useState(null)
    useEffect(() =>{
        fetch("/Comments")
        .then((response) =>{
            if(response.ok){
                return response.json()
            }
        })
        .then((data) =>{
            setcomments(data)

        })
        
    }, [])
    return(
        <div>
            {comments && comments.filter((faalo => faalo.Jobid == thisid)).map((data => 
                          <div className="iibiye_info" key={data._id}>
                          <div className="sir">
                              <img src="/images/avatar.jpg" />
                          </div>
                          <div className="info_seller">
                              <h2>{data.Username}</h2>
                              <p className="wakhti_com">{formatDistanceToNow(new Date(data.createdAt))} Ka Hor</p>
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