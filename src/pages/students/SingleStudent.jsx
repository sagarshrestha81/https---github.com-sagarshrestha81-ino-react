import BASE_URL from "./../../globalVariable";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link,useParams } from 'react-router-dom';
import { MdOutlineRemoveRedEye,MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { getData } from "./../api/AxiosRequest";


export default function SingleStudent() {

const {id} = useParams();

  const [singleStudents, setSingleStudents] = useState([]);


  const getSingleStudents = async () => {
   const data = await getData(`students/${id}`);
   console.log(data.attributes);
   setSingleStudents(data.attributes);
  };

  useEffect(() => {    
    getSingleStudents();
  }, []);

  return (
    <div className="container">
    <div className="row">
    <div className="col-12">

<h1>{singleStudents.student_name}</h1>
<h2>{singleStudents.student_class}</h2>
<h2>{singleStudents.student_roll}</h2>


      
    </div>
    </div>
    </div>
  );
}
