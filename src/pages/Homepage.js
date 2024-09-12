import About from './../components/About';
import Banner from './../components/Banner';

import { FaBeer,FaReacteurope } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { BiLogoReact } from "react-icons/bi";
import { useState } from 'react';
export default function Homepage(){
    const [ count,setCount ]= useState(true);
    return(
        <>
        
         <BiLogoReact />
        <About tag={"Homepage"} arr={[1,2,3,4,5,6]} count={count} />
        <Banner count={count} setCount={setCount} />
        </>
    );
}
