
import { Link } from 'react-router-dom'
import React from 'react'
import { useNavigate, useLocation } from 'react-router'

const Navbar = () => {
  let location = useLocation();
  let Navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    Navigate("/login");
    window.location.reload();
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark sticky-top"
        style={{
          background: "rgba(15,32,39,0.9)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
        }}
      >

        <div className="container">

          <Link
            className="navbar-brand fw-bold fs-3 text-white"
            to="/"
          >
             iNotebook
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item mx-2">
                <Link
                  className={`nav-link text-white ${location.pathname === "/" ? "fw-bold border-bottom border-2 border-info" : ""}`}
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link
                  className={`nav-link text-white ${location.pathname === "/about" ? "fw-bold border-bottom border-2 border-info" : ""}`}
                  to="/about"
                >
                  About
                </Link>
              </li>

            </ul>

            {!localStorage.getItem('token') ?

              <div className="d-flex">

                <Link
                  className="btn btn-outline-light rounded-pill mx-2 px-4"
                  to="/login"
                >
                  Login
                </Link>

                <Link
                  className="btn btn-info text-dark rounded-pill px-4 fw-bold"
                  to="/signup"
                >
                  Signup
                </Link>

              </div>

              :

              <button
                className="btn btn-danger rounded-pill px-4 fw-bold"
                onClick={handleLogout}
              >
                Logout
              </button>

            }

          </div>

        </div>

      </nav>

    </>
  )
}

export default Navbar
