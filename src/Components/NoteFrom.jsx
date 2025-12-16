import React, { use, useContext, useState } from "react";
import { NoteContext } from "../Context/NoteContext";
import { noteFrom } from "../Style/NoteStryles";

const NoteFrom = () => {

    const { addNote } = useContext(NoteContext)

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')

    

    const handleSubmitNote = (e) => {

        e.preventDefault();

        if(title.trim() === '' || content.trim() === '') {
            return alert("Please enter the note information")
        }

        const newNote = {
            id : Date.now(),
            title, 
            content,
            isFavorite : false,
            isDeleted : false
        }

        addNote(newNote)
        setTitle('')
        setContent('')

        
        
    }
  return (
    <section className="m-4">
      <form
      onSubmit={handleSubmitNote} 
      className={noteFrom.form} >
        <div>
          <input 
          type="text"   
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title..." 
          className={noteFrom.title} />
        </div>
        <div>
          <textarea
            value={content}
            rows={5}
            placeholder="Write your content here..."
            onChange={(e) => setContent(e.target.value)}
            className={noteFrom.content}
          ></textarea>
        </div>
        <div>
          <button className={noteFrom.addBtn} type="submit">Add</button>
        </div>
      </form>
    </section>
  );
};

export default NoteFrom;
