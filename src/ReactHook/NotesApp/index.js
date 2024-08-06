import {useState} from "react"
import {v4 as uuidv4} from "uuid"

const NotesApp =()=>{
    const [title, setTitle]=useState("")
    const [notes, setNotes]=useState("")
    const [text, setText]=useState([])

    const onChangeTitle=(event)=>{
        setTitle(event.target.value)
    }
    const onChangeNotes=(event)=>{
        setNotes(event.target.value)
    }

    const onTakeNote=(event)=>{
        event.preventDefault()
        const newTitle={
            id:uuidv4(),
            title,
            notes
        }
        setText(prev=>[...prev, newTitle])
        setTitle("")
        setNotes("")
    }
    return(
        <div>
            <h1>Notes</h1>
            <form onSubmit={onTakeNote}>
                <div>
                <input type="text" placeholder="Title" onChange={onChangeTitle} value={title}/>
                </div>
                <div>
                    <textarea placeholder="Take a Note" type="text" onChange={onChangeNotes} value={notes}/>
                </div>
                <button type="submit" onClick={onTakeNote}>Add</button>
            </form>
            <ul>
            {text.map(demo=>(
                <li key={demo.id}>
                <h1>{demo.title}</h1>
                <p>{demo.notes}</p>
                </li>
                ))
            }
            </ul>

        </div>
    )
}
export default NotesApp