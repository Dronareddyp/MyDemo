import {Component} from "react"

class FaQItem extends Component{
    state={
        isTrue:false   
    }
    
    onClicckEvent = ()=>{
        this.setState((prev)=>({isTrue:!prev.isTrue}))
    }
    render(){
        const {faqsLists}= this.props
        const {questionText, answerText} =faqsLists
        const {isTrue} = this.state

        return(
        <li>
            <div>
            <h1>{questionText}</h1>
            <hr/>
            {isTrue?<p>{answerText}</p>:null}
            </div>
            <div>
                <button type="button" onClick={this.onClicckEvent}>
                    {isTrue?
                    <img src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png" alt="minus"/>                    
                    :
                    <img src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png" alt="plus"/>
                    }
                    </button>
            </div>
            
        </li>
     )
    }

}
export default FaQItem