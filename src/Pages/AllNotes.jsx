import React, { useContext } from "react";
import NoteFrom from "../Components/NoteFrom";
import NoteList from "../Components/NoteList";
import { NoteContext } from "../Context/NoteContext";
import { motion } from "framer-motion";
import { global } from "../Style/NoteStryles";

const AllNotes = () => {
  const { notes } = useContext(NoteContext)
  const activeNotes = notes.filter(note => !note.isDeleted)
  return (
    <motion.main
    initial={{opacity:0, y:-20}}
    animate={{opacity:1, y:0}}
    transition={{duration:.6}}

    >
      <h1 className={global.pageHeading}>All Notes</h1>
      <NoteFrom />
      <NoteList notes={activeNotes}  />
    </motion.main>
  );
};

export default AllNotes;
