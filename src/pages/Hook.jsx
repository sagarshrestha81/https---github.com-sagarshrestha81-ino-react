import { useState,useEffect } from "react";
export default function Hook() {

  const [y,setY] = useState();

//   const increase=()=>{  
//     setY(y+1)
//     setY([3,2,4,5])
//   }

  useEffect(()=>{

console.log("hello");
  },[]);


  return (
    <>
     {y}



      {/* <button onClick={increase}>increase</button> */}
     {/* {y.map((item,idx)=>{
return <>{item},</>
     }) */}

     
      

    </>
  );
}
