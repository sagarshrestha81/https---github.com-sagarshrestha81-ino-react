import { useState,useEffect } from 'react';
import axios from "axios";
export default function CreateStudent() {

    const [formData, setFormData ]= 
    useState({
        student_name:"",
        student_class:"",
        student_roll:""
    })

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(formData)
let data = JSON.stringify({
  "data": formData
});

let config = {
  method: 'post',
  url: 'http://localhost:1337/api/students',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': '89704e9618f3e1a7816c2042db931eb49612a40e5ac28c037d80d4ca6ddfa442229b719e3f1bb2dda49e8ee1bbbf88cc7bbea4bb86bbe06dda4d8f715d5c0f872512b6710455a1d81b69c944d174e5af64d710b18de793f14d0ab39b582897f2622abef621d1cf6b3b4ebd4dfd47607c4b0b465ee8679b5b3658c6dcf23bd2f6'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});


    }


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
                onChange={(e)=>{
                    setFormData({
                        ...formData,
                    [e.target.name]:e.target.value
                })
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
                onChange={(e)=>{
                    setFormData({
                        ...formData,
                    [e.target.name]:e.target.value
                })
                }}
              />
            </div>
            <div className="mb-3">
              <label forHtml="class" className="form-label">
                Class
              </label>
              <select  name="student_class" id="class"  className="form-control"
              
              value={formData.student_class}
              onChange={(e)=>{
                  setFormData({
                      ...formData,
                  [e.target.name]:e.target.value
              })
              }}
              >
                <option value="" >Choose Here</option>
                <option value="BCA" >BCA</option>
                <option value="BIT" >BIT</option>
                <option value="CSIT" >CSIT</option>
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
