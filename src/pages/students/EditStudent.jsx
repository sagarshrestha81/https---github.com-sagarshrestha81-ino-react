import { useState, useEffect } from "react";
import axios from "axios";
import { createData, getData, updateData } from "./../api/AxiosRequest";
import Swal from 'sweetalert2';
import { useParams,useNavigate } from "react-router-dom";
export default function EditStudent(){
const navigate= useNavigate();
    const {id} = useParams();
    console.log(id)

    const [formData, setFormData] = useState({
        student_name: "",
        student_class: "",
        student_roll: "",
      });
    
      const getSingleStudent = async ()=>{
        const data = await getData(`students/${id}`);
        console.log(data)
        if(data && data.attributes){
            setFormData({
                student_name: data.attributes.student_name,
                student_class:data.attributes.student_class,
                student_roll:data.attributes.student_roll,   
            })
        }
      }

      useEffect(()=>{
        getSingleStudent();

      },[])

      const handleSubmit = async (e) => {
        e.preventDefault();  
        
      
    const data =
    JSON.stringify({
      data: formData
    });


  const response = await updateData(
    {
      url: `students/${id}`,
      data: data
    });
  if (response &&
    response.attributes &&
    response.attributes.student_name == formData.student_name) {
      Swal.fire({
        icon: "success",
        title: "Data has been Updated",
        showConfirmButton: false,
        timer: 1500
      });
      navigate("/students");


  }
    
      };
      


    return (
        <div className="container">
          <h1>Edit Student</h1>
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
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      );
}