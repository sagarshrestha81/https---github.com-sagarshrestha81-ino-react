import About from './../components/About';
import Banner from './../components/Banner';

import { FaBeer,FaReacteurope } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { BiLogoReact } from "react-icons/bi";
export default function Homepage(){
  
    return(
        <>
         Lets go for a <FaBeer />?
         <BiLogoReact />
        <About tag={"Homepage"} arr={[1,2,3,4,5,6]} />
        <Banner/>
        </>
    );
}
