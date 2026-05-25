import React from 'react'

const About = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#141e30,#243b55)"
      }}
    >
      <div className="container">

        <div
          className="card border-0 shadow-lg rounded-4 overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            color: "white"
          }}
        >

          <div className="text-center p-5 border-bottom border-light">
            <h1 className="display-4 fw-bold">iNotebook</h1>
            <p className="lead mt-3">
              Your secure cloud notebook for managing notes anytime, anywhere.
            </p>
          </div>

          <div className="card-body p-5">

            <div className="row g-4">

              <div className="col-md-6">
                <div
                  className="card h-100 border-0 rounded-4 p-3"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(10px)",
                    color: "white"
                  }}
                >
                  <h3 className="mb-3">About Project</h3>
                  <p>
                    iNotebook is a modern MERN stack application where users can
                    securely create, update, and manage personal notes with authentication
                    and cloud storage.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="card h-100 border-0 rounded-4 p-3"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(10px)",
                    color: "white"
                  }}
                >
                  <h3 className="mb-3">Features</h3>
                  <ul>
                    <li>Add, edit and delete notes</li>
                    <li>JWT Authentication</li>
                    <li>MongoDB cloud storage</li>
                    <li>Responsive Bootstrap UI</li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="mt-5">

              <h2 className="text-center fw-bold mb-4">
                Technologies Used
              </h2>

              <div className="row text-center g-4">

                <div className="col-md-3">
                  <div
                    className="card border-0 rounded-4 p-4"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      color: "white"
                    }}
                  >
                    <h5>React</h5>
                  </div>
                </div>

                <div className="col-md-3">
                  <div
                    className="card border-0 rounded-4 p-4"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      color: "white"
                    }}
                  >
                    <h5>Node.js</h5>
                  </div>
                </div>

                <div className="col-md-3">
                  <div
                    className="card border-0 rounded-4 p-4"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      color: "white"
                    }}
                  >
                    <h5>Express.js</h5>
                  </div>
                </div>

                <div className="col-md-3">
                  <div
                    className="card border-0 rounded-4 p-4"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      color: "white"
                    }}
                  >
                    <h5>MongoDB</h5>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default About