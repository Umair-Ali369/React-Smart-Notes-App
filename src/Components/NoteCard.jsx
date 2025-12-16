import React, { useContext, useState } from "react";
import { NoteContext } from "../Context/NoteContext";
import EditPanel from "./EditPanel";
import { motion, AnimatePresence } from "framer-motion";
import { noteCard } from "../Style/NoteStryles";

const NoteCard = ({ note, showRestore = false, showDeleteForever = false }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { deleteNote, togglefavoriteNote, restoreNote, deleteForeverNote } =
    useContext(NoteContext);

  const showContent = (text, wordShow) => {
    const words = text.split('')
    if(words.length <= wordShow)  return text;

    return words.slice(0, wordShow).join("") + "...."
  }

  return (
    <AnimatePresence>
      <div>
       

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -2, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: .3, delay: 0.2 }}
          className={noteCard.main}
        >
          <h3 className={noteCard.noteTitle} >
            {note.title}
          </h3>
          <p className={noteCard.noteContent} >
            {showContent(note.content, 150)}
          </p>
          <small className={noteCard.noteDate} > { new Date().toLocaleDateString() } </small>
          <div className={noteCard.btnDev}  >
            <motion.button
              animate={{ scale: note.isFavorite ? 1.2 : 1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => togglefavoriteNote(note.id)}
            >
              <span
                className={`${
                  note.isFavorite
                    ? "text-red-500"
                    : " text-gray-400"
                } ${noteCard.favoriteBtn} `}
              >
                &#9829;
              </span>
            </motion.button>
            {showRestore ? (
              <button 
              className={noteCard.restoreBtn}
              onClick={() => restoreNote(note.id)}>Restore</button>
            ) : (
              <button
                className={noteCard.editBtn}
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
            )}

            {showDeleteForever ? (
              <button 
              className={noteCard.deletePermenent}
              onClick={() => deleteForeverNote(note.id)}>
                Delete Forever
              </button>
            ) : (
              <button
                onClick={() => deleteNote(note.id)}
                className={noteCard.delete}
              >
                Delete
              </button>
            )}
          </div>
        </motion.div>

         {isEditing && (
          <div
          >
            <EditPanel editnote={note} setEditing={setIsEditing} />
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default NoteCard;
