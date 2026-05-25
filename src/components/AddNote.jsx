import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
        props.showAlert("Added Successfully", "success");
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })

    }
    return (
        <div
            className="container my-4"
        >

            <div
                className="card border-0 shadow-lg rounded-4 p-4"
                style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(12px)",
                    color: "white"
                }}
            >

                <h2 className="fw-bold mb-4 text-center">
                     Add a New Note
                </h2>

                <form className="my-3">

                    <div className="mb-4">

                        <label htmlFor="title" className="form-label fw-bold">
                            Title
                        </label>

                        <input
                            type="text"
                            className="form-control rounded-pill border-0 shadow-sm"
                            id="title"
                            name="title"
                            value={note.title}
                            onChange={onChange}
                            minLength={5}
                            required
                            placeholder="Enter note title"
                        />

                    </div>

                    <div className="mb-4">

                        <label htmlFor="description" className="form-label fw-bold">
                            Description
                        </label>

                        <textarea
                            className="form-control rounded-4 border-0 shadow-sm"
                            id="description"
                            name="description"
                            value={note.description}
                            onChange={onChange}
                            rows="4"
                            minLength={5}
                            required
                            placeholder="Write your note description"
                        />

                    </div>

                    <div className="mb-4">

                        <label htmlFor="tag" className="form-label fw-bold">
                            Tag
                        </label>

                        <input
                            type="text"
                            className="form-control rounded-pill border-0 shadow-sm"
                            id="tag"
                            name="tag"
                            value={note.tag}
                            onChange={onChange}
                            placeholder="Enter note tag"
                        />

                    </div>

                    <button
                        disabled={note.title.length < 5 || note.description.length < 5}
                        type="submit"
                        className="btn btn-info w-100 rounded-pill fw-bold py-2"
                        onClick={handleClick}
                    >
                        Add Note
                    </button>

                </form>

            </div>

        </div>
    )
}

export default AddNote