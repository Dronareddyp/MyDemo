import {Component} from 'react'


class Feedback extends Component {
    state={
        isTrue:false
    }
    onChangeValue=()=>{
        this.setState(({
            isTrue:true
        }))
    }
  render() {
      const {isTrue}=this.state
      const {resources}=this.props
      const {emojis}=resources
    return(
        <div>
            {!isTrue&&
            <div>
            <h1>How satisfied are you with our customer support performance?</h1>
            
            <ul>
                {
                    emojis.map((demo)=>(
                        <li key={demo.id} className="dg-container">
                            <button type="button" onClick={this.onChangeValue}>
                            <img src={demo.imageUrl} alt={demo.name}/>
                            </button>
                            <p>{demo.name}</p>                        
                        </li>
                    ))
                }
            </ul>
            </div>
             }
             {isTrue&&
            <div>    
                <button type="button" onClick={this.onChangeValue}>
                <img src={resources.loveEmojiUrl} alt="Love Emoji"/>
                </button>
                <p>Thank You</p> 
            <h1>We will use your feedback to improve our customer support performance</h1>
            </div>            
             }
        </div>
    )
  }
}
export default Feedback