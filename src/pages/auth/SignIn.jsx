import { useState, useEffect } from "react";
import axios from "axios";
import { createData } from "./../api/AxiosRequest";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
export default function SignIn() {

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
        
        setFormData({
          student_name: "",
          student_class: "",
          student_roll: "",
        });
    

    }


  };

  return (
    <div className="container">
      <h1> Student Login</h1>
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label forHtml="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                email="student_email"
                className="form-control"
                id="email"
                value={formData.student_email}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mb-3">
              <label forHtml="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                password="student_password"
                className="form-control"
                id="password"
                value={formData.student_password}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
        

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
       
      </div>
      <hr />
      <div className="row mt-4">
        <div className="col-lg-6">

            <Link to="/sign-up" className="btn btn-success">Create new account</Link>
        </div>
      </div>
    </div>
  );
}
