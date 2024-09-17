import BASE_URL from "./../../globalVariable";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { MdOutlineRemoveRedEye,MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
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
    <div className="container">
    <div className="row">
    <div className="col-12">
      <h1>list student</h1>

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
