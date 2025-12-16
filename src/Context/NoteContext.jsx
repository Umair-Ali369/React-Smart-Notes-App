import React, {createContext, useEffect, useState} from 'react'

export const NoteContext = createContext()

export const NoteProvider = ({children}) => {
  const [notes, setNotes] = useState( () => {
    const storedNotes = localStorage.getItem("notes")
    return storedNotes ? JSON.parse(storedNotes) : []
  } )


   useEffect(()=> {
    localStorage.setItem("notes", JSON.stringify(notes))
   }, [notes])

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      if(!Array.isArray(prevNotes)) return [newNote]
      return [...prevNotes, newNote]
    })
  };

  const restoreNote = (id) => {
    setNotes(prevNotes => prevNotes.map(note => 
      note.id === id ? {...note, isDeleted : false} : note
    ))
  }

  const deleteForeverNote = (id) => {
    setNotes(prevNotes => prevNotes.filter((note)=> note.id !== id))
  }

  const deleteNote = (id) => {
   setNotes(prevNotes =>  prevNotes.map(note => 
    note.id === id ? {...note, isDeleted : true} : note
   )
    // prev.map(note => note.id === id ? {...note, isDeleted : true} : note)
   
   )
  };

  const editNote = (id, newTitle, newContent) => {
    setNotes(prevNotes => 
       prevNotes.map( (note) => 
        note.id === id ? {
          ...note, 
          title : newTitle,
          content : newContent
        } : note
      
      )
    )
  };

  const togglefavoriteNote = (id) => {
    setNotes(prevNotes =>
      prevNotes.map((note)=> note.id === id ? {...note, isFavorite  : !note.isFavorite} : note)
    )
  }
  const values = {notes, addNote, editNote, deleteNote, togglefavoriteNote, restoreNote, deleteForeverNote}
  return (
    <NoteContext.Provider value={values}>
      {children}
    </NoteContext.Provider>
  )
}