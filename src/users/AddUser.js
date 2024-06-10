import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";

export default function AddUser() {
    let navigate = useNavigate();

    // const user =() => {
    //     const [myName,setName] =useState("");
    //     const [email,setEmail] =useState("");
    //     const [gender,setGender] =useState("");
    // }
    // const userDetails ={ myName, email, gender};

    const [user, setUser] = useState({
        name: "",
        email: "",
        gender: ""
    });
    const { myName, email, gender } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const headers = {
        'Content-Type': 'application/json'
      }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (user.name.length < 5) {
            alert('user name must be atleat 5 characters')
        }
        else {
            await axios.post("http://localhost:8081/employee", user, {
                headers: headers
              });

            //modify thiss
            //   axios.post("http://localhost:8081/employee", user, {
            //     headers: headers
            //   })
            //   .then((response) => {
            //     dispatch({
            //       type: FOUND_USER,
            //       data: response.data[0]
            //     })
            //   })
            //   .catch((error) => {
            //     dispatch({
            //       type: ERROR_FINDING_USER
            //     })
            //   })
        }
        navigate("/");
    };

    const onSubmit1 = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:8081/employee",
            {
                method: "POST",
                header: {
                    "Content-Type": "application/json, text/plain, */*",
                    "Accept": "application/json, text/plain, */*"
                },
                body: JSON.stringify(user)
            });
        navigate("/");
    };

    const onSubmit2 = async (e) => {
        e.preventDefault();
        try {
            await fetch("http://localhost:8081/employee",
                {
                    method: "POST",
                    header: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                });
            alert("Added data successfully");
            navigate("/");

        } catch (error) {
            console.log(error);
            alert("Failed to add data");
        }
    };

    // return (
    //     <div className="container">
    //         <div className="row">
    //             <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
    //                 <h2 className="text-center m-4">Register Employee</h2>
    //                 <form onSubmit={(e) => onSubmit(e)}>
    //                     <div className="mb-3">
    //                         <label htmlFor="Name" className="form-label">
    //                             Name
    //                         </label>
    //                         <input
    //                             type={"text"}
    //                             className="form-control"
    //                             placeholder="Enter your name"
    //                             name="name"

    //                             onChange={(e) => setName(e.target.value)}
    //                         />
    //                     </div>

    //                     <div className="mb-3">
    //                         <label htmlFor="Email" className="form-label">
    //                             E-mail
    //                         </label>
    //                         <input
    //                             type={"text"}
    //                             className="form-control"
    //                             placeholder="Enter your e-mail address"
    //                             name="email"

    //                             onChange={(e) => setEmail(e.target.value)}
    //                         />
    //                     </div>
    //                     {email.length < 5 ? <p style={{ "color": "red" }}> mail cannot be less then 5</p> : null}
    //                     <div className="mb-3">
    //                         <label htmlFor="Gender" className="form-label">
    //                             Gender
    //                         </label>
    //                         <input
    //                             type={"text"}
    //                             className="form-control"
    //                             placeholder="Enter your Gender"
    //                             name="gender"
    //                             value={gender}
    //                             onChange={(e) => setGender(e.target.value)}
    //                         />
    //                     </div>

    //                     <button type="submit" className="btn btn-outline-primary">
    //                         Submit
    //                     </button>

    //                     <Link className="btn btn-outline-danger mx-2" to="/">
    //                         Cancel
    //                     </Link>
    //                 </form>
    //             </div>
    //         </div>
    //     </div>

    // );

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register Employee</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your name"
                                name="name"

                                value={myName}
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