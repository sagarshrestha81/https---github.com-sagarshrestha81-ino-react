import { useState, useEffect } from "react";
import axios from "axios";
import { createData } from "./../api/AxiosRequest";
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";
export default function SignUp() {
    const navigator = useNavigate();
  const [formData, setFormData] = useState({
    student_name: "",
    student_class: "",
    student_roll: "",
    student_email: "",
    student_password: "",
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
        navigator("/sign-in");          

    }


  };

  return (
    <div className="container">
      <h1>Create New Student</h1>
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
              Create account
            </button>
          </form>
        </div>
       
      </div>
      <hr />
      <div className="row mt-4">
        <div className="col-lg-6">
                Already have an account?
            <Link to="/sign-in" className="btn btn-success">Goto login</Link>
        </div>
      </div>
    </div>
  );
}
