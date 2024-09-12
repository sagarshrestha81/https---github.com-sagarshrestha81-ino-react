
import { useState } from 'react';

export default function Banner({count,setCount}){

    

    return(
        <div className="banner card">
            <h1>this is banner</h1>
            {count}
            <button onClick={()=>{setCount(!count)}}>increase</button>
        {/* <div className="title">Admission Open For BBA | BCA | BBS | BSW | BSc(CSIT) | BBA | MBA | BA in Psychology</div>
        <button className="btn btn-success">Register</button> */}


        </div>

      
    )
}
