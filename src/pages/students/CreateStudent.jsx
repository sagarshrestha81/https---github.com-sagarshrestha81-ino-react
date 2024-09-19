import { useState, useEffect } from "react";
import axios from "axios";
import { createData } from "./../api/AxiosRequest";
import Swal from 'sweetalert2';
export default function CreateStudent() {
  const [formData, setFormData] = useState({
    student_name: "",
    student_class: "",
    student_roll: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);


    const data =
      JSON.stringify({
        data: formData
      });


    const response = await createData(
      {
        url: "students",
        data: data
      });
    if (response &&
      response.attributes &&
      response.attributes.student_name == formData.student_name) {
        Swal.fire({
          icon: "success",
          title: "Data has been saved",
          showConfirmButton: false,
          timer: 1500
        });

    }




  };

  return (
    <div className="container">
      <h1>Create Student</h1>
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label forHtml="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="student_name"
                className="form-control"
                id="name"
                value={formData.student_name}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mb-3">
              <label forHtml="roll" className="form-label">
                Roll
              </label>
              <input
                type="number"
                name="student_roll"
                className="form-control"
                id="roll"
                value={formData.student_roll}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mb-3">
              <label forHtml="class" className="form-label">
                Class
              </label>
              <select
                name="student_class"
                id="class"
                className="form-control"
                value={formData.student_class}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
                }}
              >
                <option value="">Choose Here</option>
                <option value="BCA">BCA</option>
                <option value="BIT">BIT</option>
                <option value="CSIT">CSIT</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
