import BASE_URL from "./../../globalVariable";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye, MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { deleteData, getData } from "./../api/AxiosRequest";
import Swal from "sweetalert2";

export default function ListStudent() {
  const [listStudents, setListStudents] = useState([]);

  const getListStudents = async () => {
    const data = await getData("students");
    setListStudents(data);
  };

  const deleteStudent = async (id) => {

    Swal.fire({
      icon: "warning",
      title: "Do you want to Delete?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const data = await deleteData(`students/${id}`);
        if (data && data.id == id) {
          Swal.fire({
            icon: "success",
            title: `${data.attributes.student_name} data has been deleted `,
            showConfirmButton: false,
            timer: 1500,
          });
          getListStudents();
        }
      } else if (result.isDenied) {

        Swal.fire({
          icon: "info",
          title: "Changes are not saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });


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

            <Link
              to="/create-student"
              className="btn btn-info d-flex align-items-center"
            >
              <FaPlus /> New Student{" "}
            </Link>
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
                      <Link
                        to={`/student/${item.id}`}
                        className="btn btn-success btn-sm d-flex align-items-center gap-2"
                      >
                        <MdOutlineRemoveRedEye /> View
                      </Link>
                      <Link
                        to={`/student-edit/${item.id}`}
                        className="btn btn-primary btn-sm d-flex align-items-center gap-2"
                      >
                        <CiEdit /> Edit
                      </Link>
                      <button
                        onClick={() => deleteStudent(item.id)}
                        className="btn btn-danger btn-sm d-flex align-items-center gap-2"
                      >
                        <MdDelete /> Delete
                      </button>
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
