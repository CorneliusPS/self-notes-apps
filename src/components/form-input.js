import { useState } from "react";
import Input from "./input";
import style from "../styles/form-input.module.css";

const FormInput = ({ updateNotes }) => {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");

    const createNote = (event) => {
        event.preventDefault();
        const timestamp = new Date().toISOString();

        updateNotes((notes) => [
            ...notes,
            { id: timestamp, title, body: note, archived: false, createdAt: timestamp },
        ]);
    };

    return (
        <form className={style.form} onSubmit={createNote}>
            <h2 className={style.heading}>Create a note</h2>
            <small className={style.small}>
                Remaining characters: <span className={style.counter}>{50 - title.length}</span>
            </small>
            <Input
                value={title}
                onChange={setTitle}
                type='text'
                placeholder='Title'
                id='title'
                name='title'
                required
            />
            <Input
                value={note}
                onChange={setNote}
                type='textarea'
                placeholder='Write your note'
                id='note'
                name='note'
                required
            />
            <Input type='submit' id='submit_form' name='submit_form' value='Create Note' />
        </form>
    );
};

export default FormInput;
