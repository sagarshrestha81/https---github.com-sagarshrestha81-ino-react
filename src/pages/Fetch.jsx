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
        console.log(data);
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
    </>
  );
}
