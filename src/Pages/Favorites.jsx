import React, { useContext } from 'react'
import { NoteContext } from '../Context/NoteContext'
import NoteList from '../Components/NoteList'
import { global } from '../Style/NoteStryles'

const Favorites = () => {

  const { notes } = useContext(NoteContext)

  const favoriteNotes = notes.filter(note => note.isFavorite && !note.isDeleted)
  return (
    <section>
      <h1 className={global.pageHeading}>Favorite Notes</h1>
      <div>

        <NoteList

        notes={favoriteNotes}
        
        />

       
      </div>
    </section>
  )
}

export default Favorites