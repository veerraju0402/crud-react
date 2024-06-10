import axios from "axios";
import { useEffect, useState } from "react";
import {   useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";

export default function ViewUser() {
    const [user, setUser] = useState({
    //    // empId:"",
    //     name: "",
    //     username: "",
    //     email: "",
      });
  
      const { myEmpId } = useParams();
    
      useEffect(() => {
        loadUser();
      }, [])
    
      const loadUser = async () => {
        const result = await axios.get(`http://localhost:8081/employee3/${myEmpId}`);
        setUser(result.data);
      };

    return (
        <div className="container">
            <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Employee Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Employee id : {user.empId}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {user.email}
                </li>
                <li className="list-group-item">
                  <b>Gender:</b>
                  {user.gender}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
        </div>

    );

}