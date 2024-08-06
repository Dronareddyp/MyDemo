/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/


// Write your code here.
import "./index.css";
import NavBar from "../NavBar";
import EmojiCard from "../EmojiCard";
import WinOrLossCard from "../WinOrLossCard";
import {Component} from "react"

class EmojiGame extends Component{
    state={
        emojiGameChanger:[],
        score:0,
        isTrue:true
    }
    resetGame =()=>{
        this.setState({emojiGameChanger:[], isTrue:true})
    } 

    finishGameAndSetTopScore=(currentScore)=>{
        const {score}=this.state
        let newScore = score
        if(currentScore>score){
            newScore=currentScore
        }
        this.setState({score:newScore, isTrue:false})    
    }

    onClclickEmoji=(id)=>{
        const {emojiGameChanger} = this.state
        const { emojisList} = this.props
        const emojiIncluds = emojiGameChanger.includes(id)
        const getClickId = emojiGameChanger.length
        if(emojiIncluds){
            this.finishGameAndSetTopScore(getClickId)
        }else{
            if(emojisList.length - 1 === getClickId){
                this.finishGameAndSetTopScore(emojisList.length)
            }
        }
        this.setState((prev)=>({emojiGameChanger:[...prev.emojiGameChanger, id]}))
        
    }    
    render(){
        const {score, emojiGameChanger, isTrue} = this.state
        const { emojisList } = this.props
        console.log("isEeeeeeeeeeeeeeeeeeeeeeee", emojiGameChanger )
        const isWon = emojiGameChanger.length===emojisList.length 
        const emojiContent = emojisList.sort(() => Math.random() - 0.5)
    return(
        <div className="db_container">
            <div className="">
                <NavBar 
                isTrue={isTrue} 
                emojiGameChangerLength={emojiGameChanger.length} 
                score={score} />
                <div>
                    {isTrue?
                        <ul className="emoji-card">
                        {
                        emojiContent.map((demo)=>(
                            <EmojiCard 
                            key={demo.id} 
                            emojiImages={demo}
                            filtterEmojis={this.onClclickEmoji}
                             />
                        ))
                         }
                        </ul>   :
                        <div>                              
                        <WinOrLossCard 
                        isWon={isWon} 
                        resetGame={this.resetGame}
                        score ={emojiGameChanger.length}/>                              
                    </div> 

                    }
                </div>
            </div>
                   
            
        </div>
    )
                }
}
export default EmojiGame