import {useState} from "react"
import "./index.css"

const ReadMore=()=>{
    const [readMore, setReadMode]=useState(false)

    const onClickReadMore=()=>{
        setReadMode(prev=>!prev)
    }
    return(
        <div>
            <h1>React Hooks</h1>
            <p>Hooks are a new addition to React</p>
            <img className="images" src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
            alt="react hooks"/>
            <p>Hooks solve a wide variety of seemingly unconnected problems 
                in React that we have encountered over five years of writing and 
                maintaining tens of thousands of components.

                {readMore?<span>
                 For curious readers, we have prepared a detailed RFC. 
                Hooks allow you to reuse stateful logic without changing your 
                component hierarchy. Hooks work side-by-side with existing code so you can adopt them 
                gradually.
                </span>:""}
            </p>
            
            <button type="button" onClick={onClickReadMore}>Read More</button>


        </div>
    )
}
export default ReadMore