import { useState, useEffect } from "react";
export default function Fetch() {
  const [listDog, setListDog] = useState([]);

  const getDogList = () => {
    console.log("api call");
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => {
        if (!response.ok) {
          throw "data not found";
        }
        return response.json();
      })
      .then((data) => {

          if(data.status =="success"){
            console.log(data);
            setListDog(data.message);

        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDogList();
  }, []);

  return (
    <>
      <h1>Fetch</h1>

        {
            Object.keys(listDog).map((item,idx)=>{
                return(
                    <p>{item}</p>
                )
            })
        }


    </>
  );
}
