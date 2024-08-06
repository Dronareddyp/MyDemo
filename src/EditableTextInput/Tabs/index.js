import { Component } from "react"
import {v4 as uuidv4} from "uuid"
import "./index.css"

class Tabs extends Component {
    state = {
        seratchItem: "",
        inputText: []
    }
    onChangeContent = (event) => {
        this.setState({ seratchItem: event.target.value })
    }
    onClickAddText = (event) => {
        event.preventDefault()
        const { seratchItem } = this.state
        const newData={
            id:uuidv4(),
            item:seratchItem
        }
        this.setState((prev) => ({ inputText: [...prev.inputText, newData], seratchItem: "" }))
    }
    render() {
        const { seratchItem, inputText } = this.state
        return (
            <div>
                <div>
                    <p>Count the charecters like a Boss...</p>
                    {inputText.length === 0 ?
                        <img className="images"
                            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                            alt="no user inputs" />
                        :
                    <ul>
                    {inputText.map((demo)=>
                    <li key={demo.id}>                    
                        <p>{demo.item}: {demo.item.length}</p>                    
                    </li>
                    )}
                    </ul>
                    }
                    
                </div>
                <div>
                    <h1>Character Center</h1>
                    <form onSubmit={this.onClickAddText}>
                        <input type="text"
                            onChange={this.onChangeContent} value={seratchItem} />
                        <button type="submit" >Add</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Tabs