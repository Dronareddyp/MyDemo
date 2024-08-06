import { Component } from "react"
class EditableTextInput extends Component {
    state = {
        editableText: "",
        isTrue:false
    }
    onChangeInput = (event) => {
        this.setState({editableText:event.target.value})
    }
    onClickChange=()=>{
        this.setState(precent=>({ isTrue:!precent.isTrue}))
    }
    render() {
        const { editableText, isTrue } = this.state
        console.log(editableText)
        return (
            <div >
                <h1>Editable Text Input</h1>
                {isTrue?(
                <p>{editableText}</p>):(
                <input type="text"
                    onChange={this.onChangeInput}
                    value={editableText} />
                )}
                
                <button type="button" onClick={this.onClickChange}>{isTrue?"Edit":"Save"}</button>
            </div>
        )
    }
}
export default EditableTextInput