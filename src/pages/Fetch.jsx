import { useState, useEffect } from "react";
export default function Fetch() {
  const [listDog, setListDog] = useState([]);

  // async function name(params) {

  // }
  const getDogList = async () => {
    // Method 1
    // fetch("BASE_URL/api/breeds/list/all")
    //   .then((response) => {
    //     console.log(response);
    //     if (!response.ok) {
    //       throw "data not found";
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     if (data.status == "success") {
    //       console.log(data);
    //       setListDog(data.message);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // method 2

    try {
      // step 1 (fetch data)
      const response = await fetch("BASE_URL/api/breeds/list/all");

      // step 2 (check response)
      if (!response.ok) {
        throw "data not found";
      }
      // step 3 (convert data into json)
      const data = await response.json();
      
      // step 4 (put data in listDog state)
      if(data.status == "success"){
        setListDog(data.message)
      }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDogList();
  }, []);

  return (
    <>
      <h1>Fetch</h1>
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
