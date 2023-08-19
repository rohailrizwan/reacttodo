import { useState } from "react"
import './App.css';


function App() {
  const [text, setText] = useState("")
  const [notes, setNotes] = useState([])

  let addNote = () => {
    if (text != "") {
      setNotes([...notes, text])
      setText("")
    }
    else {
      alert("please insert some text")
    }

  }
    let deleteNote = (index) => {
      const updatedNotes = notes.filter((note, i) => i !== index);
      setNotes(updatedNotes);
      console.log(updatedNotes)
    };

    let EditNote = (index)=>{
      let savetext=document.getElementById("savetext")
      savetext.style.display="block"
      const editedNote = notes[index];
    setText(editedNote);
    }
    let SaveNote= ()=>{
      let newtext=text
      let displaynote=document.getElementById("displaynote")
      displaynote.innerHTML=newtext
    }
  return (
    <div>
      <div className="inputdiv">
        <input className="inputtext" id="edittext" value={text} onChange={(e) => setText(e.target.value)} />
        <button className="Addbtn" onClick={addNote}>Add Note</button>
      </div>
      <div className="shownote" >
        {
          notes.map((note, index) => (
            <div className="mynote" key={index}>
            <p>{"Note " + (index + 1)}</p>
            <p id="displaynote">{note}</p>
            <button className="deleteBtn" onClick={()=>deleteNote(index)}>Delete</button>
            <button className="Editbtn" onClick={()=>EditNote(index)}>Edit</button>
            <button className="Savebtn" id="savetext" onClick={()=>SaveNote()}>Save</button>
          </div>
          ))
        }
      </div>
    </div>
  )
}




export default App;