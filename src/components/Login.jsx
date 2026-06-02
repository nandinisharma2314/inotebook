import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let Navigate = useNavigate();
const host = "https://inotebook-backend1-z7j4.onrender.com";
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            Navigate("/");
            props.showAlert("Logged In Successfully", "success");

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
                className="card border-0 shadow-lg rounded-4 p-4"
                style={{
                    width: "420px",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(12px)",
                    color: "white"
                }}
            >

                <div className="text-center mb-4">

                    <h1 className="fw-bold"> Login</h1>

                    <p className="text-light">
                        Welcome back to iNotebook
                    </p>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>

                        <input
                            type="email"
                            className="form-control rounded-pill"
                            value={credentials.email}
                            onChange={onChange}
                            id="email"
                            name="email"
                        />

                    </div>

                    <div className="mb-4">

                        <label htmlFor="password" className="form-label">
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control rounded-pill"
                            value={credentials.password}
                            onChange={onChange}
                            name="password"
                            id="password"
                        />

                    </div>

                    <button
                        type="submit"
                        className="btn btn-info w-100 rounded-pill fw-bold"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Login