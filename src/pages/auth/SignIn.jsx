import { useState, useEffect } from "react";
import axios from "axios";
import { createData, getData } from "./../api/AxiosRequest";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
export default function SignIn() {

  const [formData, setFormData] = useState({
    student_email: "",
    student_password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if(formData.student_email !== ""  && formData.student_password !== "") {
      const data = 
      await getData(`students?filters[student_email][$eq]=${formData.student_email}&filters[student_password][$eq]=${formData.student_password}`);
        console.log(data);

        if(data.length > 0) {
            Swal.fire({
                icon: 'success',
                title: 'Login Successfull',
              })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        }
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
                name="student_email"
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
                name="student_password"
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
