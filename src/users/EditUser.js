import axios from "axios";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
 import {   useParams } from "react-router-dom";

export default function EditUser() {
    
    const { myEmpId } = useParams();
    
    let navigate = useNavigate();
    const [user, setUser] = useState({
        // empId: "",
        // name: "",
        // email: "",
        // gender: ""
      });

      const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };

      const { mName, email, gender} = user;

      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8081/employee", user);
        navigate("/");
      };

      useEffect(() => {
        loadUser();
      }, []);

      const loadUser = async () => {
        const result = await axios.get(`http://localhost:8081/employee1?id=${myEmpId}`);
        setUser(result.data);
      };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Editing Employee Id:{user.empId}</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Name
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your name"
                            name="mName"
                            value={mName}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">
                            E-mail
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your e-mail address"
                            name="email"
                            value={email}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Gender" className="form-label">
                            Gender
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your Gender"
                            name="gender"
                            value={gender}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>

                    <button type="submit" className="btn btn-outline-primary">
                        Submit
                    </button>

                    <Link className="btn btn-outline-danger mx-2" to="/">
                        Cancel
                    </Link>
                    </form>
                </div>
            </div>
        </div>

    );

}