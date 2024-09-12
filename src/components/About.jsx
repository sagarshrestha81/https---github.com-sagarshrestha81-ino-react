
import { useState } from 'react';
import { FaBeer } from 'react-icons/fa';
export default function  About(props) {
    console.log(props)
    return(
        <div>
            <h3 className="heading">
                about
                    </h3>
                    {props.count ?  <FaBeer />: ""}
                    {props.count}
                    <hr/>
         {/* {props.title}       <div className="detail">
            AADIM NATIONAL COLLion or
            
            </div>
            <button className="btn btn-warning">
                Read more {props.tag}
            </button> */}
        </div>
    )
}