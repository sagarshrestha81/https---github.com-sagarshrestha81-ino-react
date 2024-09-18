import BASE_URL from "./../../globalVariable";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { MdOutlineRemoveRedEye,MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { getData } from "./../api/AxiosRequest";


export default function ListStudent() {
  const [listStudents, setListStudents] = useState([]);

  const getListStudents = async () => {
   const data = await getData("students");
   setListStudents(data);
  };

  useEffect(() => {    
    getListStudents();
  }, []);

  return (
    <div className="container pt-4">
    <div className="row">
    <div className="col-12">
    <div className="d-flex justify-content-between">
    <h1>List Student</h1>

<Link to="/create-student" className="btn btn-info d-flex align-items-center">
<FaPlus /> New Student </Link>

    </div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">SN</th>
            <th scope="col">Name</th>
            <th scope="col">Roll</th>
            <th scope="col">Class</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listStudents.map((item, idx) => {
            return (
              <tr keys={idx}>
                <th scope="row">{item.id}</th>
                <td>{item.attributes.student_name}</td>
                <td>{item.attributes.student_roll}</td>
                <td>{item.attributes.student_class}</td>
                <td className="d-flex gap-2">
                  <Link to={`/student/${item.id}`} className="btn btn-success btn-sm d-flex align-items-center gap-2"><MdOutlineRemoveRedEye /> View</Link>
                  <Link className="btn btn-primary btn-sm d-flex align-items-center gap-2"><CiEdit /> Edit</Link>
                  <Link className="btn btn-danger btn-sm d-flex align-items-center gap-2"><MdDelete /> Delete</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
}
