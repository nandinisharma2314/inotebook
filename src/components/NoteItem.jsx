import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-4 my-3">

            <div
                className="card border-0 shadow-lg rounded-4 h-100"
                style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    color: "white",
                    transition: "0.3s"
                }}
            >

                <div className="card-body">

                    <div className="d-flex justify-content-between align-items-start">

                        <h5 className="fw-bold">
                            {note.title}
                        </h5>

                        <div>

                            <i
                                className="fa-solid fa-pen-to-square mx-2 text-info"
                                style={{ cursor: "pointer" }}
                                onClick={() => { updateNote(note) }}
                            />

                            <i
                                className="fa-solid fa-trash mx-2 text-danger"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    deleteNote(note._id);
                                    props.showAlert("Deleted Successfully", "success");
                                }}
                            />

                        </div>

                    </div>

                    <p className="mt-3">
                        {note.description}
                    </p>

                    <span className="badge bg-info text-dark">
                        {note.tag || "General"}
                    </span>

                </div>

            </div>

        </div>

    )
}

export default Noteitem