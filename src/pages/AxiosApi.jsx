import { useState, useEffect } from "react";
import axios from "axios";
export default function AxiosApi() {
  const [listDog, setListDog] = useState([]);

  const getDogList = async () => {
    // Method 1
    // axios
    //   .get("BASE_URL/api/breeds/list/all")
    //   .then((response) => {
    //     console.log(response);
    //     if (response.data && response.data.status == "success") {
    //       setListDog(response.data.message);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // Method 2
    try{
        const response = await axios.get("https://dog.ceo/api/breeds/list/all");
        console.log(response)
        if(response.data && response.data.status == "success") setListDog(response.data.message)
        

    }catch(error){
        console.log(error)
    }

  };

  useEffect(() => {
    getDogList();
  }, []);

  return (
    <>
      <h1>Axios API</h1>

      <div className="container">
        <div className="row">
          {Object.keys(listDog).map((item, idx) => {
            return (
              <div className="col-lg-2 col-md-4 col-sm-6 mb-2">
                <div className="card p-2">{item}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
