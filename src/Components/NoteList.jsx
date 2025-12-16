import React, { useContext } from "react";
import NoteCard from "./NoteCard.jsx";
import { NoteContext } from "../Context/NoteContext";
import { motion, AnimatePresence } from "framer-motion";
import { noteList } from "../Style/NoteStryles.js";

const NoteList = ({
  notes = [],
  showRestore = false,
  showDeleteForever = false,
}) => {
  return (
    <AnimatePresence>
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          // exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {notes.length === 0 ? (
            <p className={noteList.noNotes} > You have no notes Yet! </p>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className={noteList.notesGrid}
            >
              {notes.map((note) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  showRestore={showRestore}
                  showDeleteForever={showDeleteForever}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </section>
    </AnimatePresence>
  );
};

export default NoteList;
