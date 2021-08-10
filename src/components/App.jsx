import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addNew(note){
        setNotes((prevValue) => {
            return [...prevValue, note];
        })
    }

    function deleteNote(id){
        return setNotes((prevValue) => {
            return prevValue.filter((note, index) => {
                return index !== id;
            })
        })
    }
  return (
    <div>
      <Header />
      <CreateArea
      onAdd={addNew}
      />
      {notes.map((note, index) => {
          return <Note
          onDelete={deleteNote}
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          />;
      })}
      
      <Footer />
    </div>
  );
}

export default App;
