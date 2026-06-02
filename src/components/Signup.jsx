import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {


    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://inotebook-backend1-z7j4.onrender.com/api/auth/", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password
            })
        });

        const json = await response.json();
        console.log(json);

        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            Navigate("/");

            props.showAlert("Account Created Successfully", "success");
        }
        else {
            props.showAlert("Invalid Credentials", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (

        <div
            className="container-fluid d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg,#141e30,#243b55)"
            }}
        >

            <div
                className="card border-0 shadow-lg p-4 rounded-4"
                style={{
                    width: "450px",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(12px)",
                    color: "white"
                }}
            >

                <div className="text-center mb-4">

                    <h1 className="fw-bold"> Signup</h1>

                    <p className="text-light">
                        Create your iNotebook account
                    </p>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label className="form-label">Full Name</label>

                        <input
                            type="text"
                            className="form-control rounded-pill"
                            name="name"
                            value={credentials.name}
                            onChange={onChange}
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">Email address</label>

                        <input
                            type="email"
                            className="form-control rounded-pill"
                            name="email"
                            value={credentials.email}
                            onChange={onChange}
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">Password</label>

                        <input
                            type="password"
                            className="form-control rounded-pill"
                            name="password"
                            value={credentials.password}
                            onChange={onChange}
                        />

                    </div>

                    <div className="mb-4">

                        <label className="form-label">Confirm Password</label>

                        <input
                            type="password"
                            className="form-control rounded-pill"
                            name="cpassword"
                            value={credentials.cpassword}
                            onChange={onChange}
                        />

                    </div>

                    <button
                        type="submit"
                        className="btn btn-info w-100 rounded-pill fw-bold"
                    >
                        Create Account
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Signup