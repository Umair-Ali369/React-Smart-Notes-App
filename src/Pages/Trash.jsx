import React, { useContext } from 'react'
import { NoteContext } from '../Context/NoteContext'
import NoteList from '../Components/NoteList'
import { global } from '../Style/NoteStryles'


const Trash = () => {
  const { notes } = useContext(NoteContext)

  const trashedNote = notes.filter(note => note.isDeleted)
  return (
    <section>
      <h1 className={global.pageHeading}>Trash</h1>
      <div>

        <NoteList
        notes={trashedNote}
        showRestore={true}
        showDeleteForever={true}
        />

      </div>
    </section>
  )
}

export default Trash