import React, { useContext, useState } from "react";
import { NoteContext } from "../Context/NoteContext";
import { motion, AnimatePresence } from "framer-motion";
import { editPanel } from "../Style/NoteStryles";

const EditPanel = ({ editnote, setEditing }) => {
  const { editNote } = useContext(NoteContext);

  const [editTitle, setEditTitle] = useState(editnote.title);
  const [editContent, setEditContent] = useState(editnote.content);

  const handleSave = (e) => {
    e.preventDefault();
    editNote(editnote.id, editTitle, editContent);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={editPanel.mainSection}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className={editPanel.mianDiv}
        >
          <form
            className={editPanel.form}
            onSubmit={handleSave}
          >
            <div>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="Title..."
                className={editPanel.title}
              />
            </div>
            <div>
              <textarea
                rows={4}
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                placeholder="Write your content here..."
                className={editPanel.content}
              ></textarea>
            </div>
            <div className={editPanel.btnDiv}>
              <button
                className={editPanel.saveBtn}
                type="submit"
              >
                Save
              </button>

              <button
                className={editPanel.cancelBtn}
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default EditPanel;
