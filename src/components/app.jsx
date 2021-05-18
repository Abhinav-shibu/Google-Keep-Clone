import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Add from "./CreateArea"


function App(){
  const [notes, setNotes]=useState([]);

  function addNote(note){
    setNotes((prevNotes)=>{
      return [...prevNotes,note];
    });
  }
  function deleteNode(id){
      setNotes((prevNotes)=>{
        return prevNotes.filter((noteItem,index)=>{
          return index!==id;
        })
      })
  }

  return <div>
  <Header />
  <Add onAdd={addNote}/>
  {notes.map((noteItem,index)=>{
    return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNode}/>
  })}
  <Footer />
  </div>
}

export default App
