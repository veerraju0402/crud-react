import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8081/employees");
        setUsers(result.data);
    };

    const loadUsers1 = async () => {//not working
        const result = await fetch("http://localhost:8081/employees");
        console.log("Myresult" + result.data);
        const res = result.json()
        setUsers(result.data);
    };

    const loadUser2 = () => {
        //    fetch("http://localhost:8081/employees").then(response => response.json()).then(result => console.log(result))
        fetch("http://localhost:8081/employees").then(response => response.json()).then(result => setUsers(result))

    };

    const loadUsers3 = () => {
        axios.get("http://localhost:8081/employees").then(resp => setUsers(resp.data))
    };

    //const { id } = useParams();
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8081/employee?id=${id}`);
        loadUsers();
    };


    return (
        <div className="container">
            <div className="py-4">

                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">sl.no</th>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope="col">gender</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((user, index) => (

                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>
                                    <Link
                                        className="btn btn-primary mx-2"
                                        to={`/viewuser/${user.empId}`}
                                    >View</Link>
                                    <Link
                                        className="btn btn-outline-primary mx-2"
                                        to={`/edituser/${user.empId}`}
                                    >Edit</Link>
                                    <button
                                        className="btn btn-danger mx-2"
                                        onClick={() => deleteUser(user.empId)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>


        </div>
    );
}