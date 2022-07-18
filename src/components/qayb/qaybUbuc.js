import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function QaybUbuc({data}){
    return(
        <section className="qayb_name">
        <div className="xajiye kala_qaybiye">
            <div className="qayb_name_page">
                <h2> Qaybta  <span>{data.Name}</span>  <span className="coun_shaqo"></span></h2>
                <p>{data.Title}</p>
                <ul>
                    <li>
                        <a href="#choose">
                        <FontAwesomeIcon icon={faCircleCheck}/> Dooro Shaqada (Choose Job)
                        </a>
                    </li>
                    <li>
                        <a href="#Order">
                            <FontAwesomeIcon icon={faCircleCheck}/> Dalbo shaqada (order The Job) 
                        </a>
                    </li>
                    <li>
                        <a href="#Order">
                            <FontAwesomeIcon icon={faCircleCheck}/> Sug Wakhtigaag (Wait Your Time) 
                        </a>
                    </li>
                    <li>
                        <a href="#accept">
                        <FontAwesomeIcon icon={faCircleCheck}/> Gudoon Dalakaag (Accept the Order)
                        </a>
                    </li>
                </ul>
            </div>
            <div className="sawir">
                <img src={data.image} />
            </div>
        </div>

    </section>
    )

}


export default QaybUbuc