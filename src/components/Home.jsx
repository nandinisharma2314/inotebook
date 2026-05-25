import React from 'react'
import Notes from './Notes'

export const Home = (props) => {

    const { showAlert } = props

    return (
        <div 
        className="container-fluid py-5"
        style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
        }}
    >

        <div className="container">

            <div 
                className="card border-0 shadow-lg rounded-4 mb-5"
                style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    color: "white"
                }}
            >

                <div className="card-body p-5 text-center">

                    <h1 className="display-3 fw-bold">
                         iNotebook
                    </h1>

                    <p className="lead mt-4 fs-4">
                        Securely manage your notes anytime, anywhere.
                    </p>

                </div>

            </div>

            {localStorage.getItem('token') ? (

                <Notes showAlert={showAlert} />

            ) : (

                <div 
                    className="card border-0 shadow-lg rounded-4 text-center p-5"
                    style={{
                        background: "rgba(255,255,255,0.12)",
                        backdropFilter: "blur(10px)",
                        color: "white"
                    }}
                >

                    <h2 className="mb-3"> Login Required</h2>

                    <p className="lead">
                        Please login or signup to access your personal notes.
                    </p>

                </div>

            )}

        </div>

    </div>
    )
}

export default Home