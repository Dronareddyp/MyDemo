// Write your code here
import {React, Component} from "react"
import "./index.css"

class CoinToss extends Component{
    state={
        isTrue:false,
        count:0,
        count1:0
    }

    onChageInage=()=>{
        const {count, count1, isTrue} = this.state
        const tossResult = Math.floor(Math.random()*2)
        let tueOrFalse=isTrue
        let heade=count
        let tails =count1
        console.log("tossResult",tossResult)
        if(tossResult===0){
            tueOrFalse=true
            heade +=1
            
        }else{
            tueOrFalse=false
            tails +=1
        }
        this.setState(({
            isTrue:tueOrFalse,
            count:heade,
            count1:tails
        }))
    }

    render(){

        const {isTrue, count, count1} = this.state
        const result = isTrue ? count : count1
        return(
            <div>
                <div>
                    <h1>Coin Toss Game</h1>
                    <p>Head (or) Tails</p>
                    {!isTrue&&(
                    <img className="images" 
                    src="https://assets.ccbp.in/frontend/react-js/heads-img.png" 
                    alt="heads"/>
                    )}
                    {isTrue&&(
                    <img className="images" src="https://assets.ccbp.in/frontend/react-js/tails-img.png" 
                    alt="tails"/>
                    )}
                    <button className="button" type="button" onClick={this.onChageInage}>Toss Coin</button>
                    <div>
                        <p>Total: {count+count1}</p>
                        <p>Heads: {count}</p>
                        <p>Tails: {count1}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default CoinToss