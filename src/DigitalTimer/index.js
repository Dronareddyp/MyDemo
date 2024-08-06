// Write your code here
import {Component} from "react"
import "./index.css"

class DigitalTimer extends Component{
    state={
        cuntSconds:0,
        count:25,
        isTrue:false
    }

    componentWillUnmount(){
        this.clearTimerInterval()
    }
    clearTimerInterval=()=>clearInterval(this.timeId)

    onReset=()=>{
        this.clearTimerInterval()
        this.setState({isTrue:false, count:25, cuntSconds:0})
    }

    onChangeDecrease=()=>{
        const {count} = this.state

        if(count>1){
            this.setState((prove)=>({count:prove.count-1}))
        }
    }
    onChangeIncrease=()=>{
        this.setState((prove)=>({count:prove.count+1}))
    } 

    incrementTimeElepasedInSecond=()=>{
        const {count, cuntSconds} = this.state
        const isTimeComplete = cuntSconds===count*60

        if(isTimeComplete){
            this.clearTimerInterval()
            this.setState({isTrue:false})
        }else{
            this.setState(preve=>({cuntSconds:preve.cuntSconds+1}))
        }
    }

    onStartOrPasuse = ()=>{
        const {isTrue, count, cuntSconds} = this.state
        const isTimeComplete= cuntSconds === count*60
        if(isTimeComplete){
            this.setState({cuntSconds:0})
        }
        if(isTrue){
            this.clearTimerInterval()
        }else{
            this.timeId=setInterval(this.incrementTimeElepasedInSecond, 1000)
        }
        this.setState(prev=>({isTrue: !prev.isTrue}))
    }

    onSeconds=()=>{
        const {count, cuntSconds} = this.state
        const totalRemainingSecond = count*60 - cuntSconds
        const second=Math.floor(totalRemainingSecond%60)
        if(second>9){
            return second
        }else{
            return `0${second}`
        }
        
    } 
    
    onMinuts =()=>{
        const {count, cuntSconds} = this.state
        const totalRemainingSecond = count *60 - cuntSconds
        const minutes = Math.floor(totalRemainingSecond/60)
        if(minutes>9){
            return minutes
        }else{
            return `0${minutes}`
        }
        
    }

    render(){
        const {isTrue, count, cuntSconds} = this.state
        const isDesabe= cuntSconds>0
        const time= `${this.onMinuts()}:${this.onSeconds()}`
        const startOrPeuseInmageUrl = isTrue
        ?"https://assets.ccbp.in/frontend/react-js/pause-icon-img.png":
        "https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
        const startOrPeuseText = isTrue?"pause icon":"play icon"
        return(
            <div className="dg_container">
                <h1>Digital Timer</h1>
                <div className="bg_image">
                    <div className="whiteTimer">
                    <h1>{time}</h1>
                    {isTrue?<p>Running</p>:<p>Paused</p>}
                    </div>
                </div>
                <div className="playReset">                    
                    <div>
                    <button type="button" onClick={this.onStartOrPasuse}>
                        <img className="images"
                        src={startOrPeuseInmageUrl} alt={startOrPeuseText}/>
                    <p>{isTrue?'Pause':"Start"}</p> 
                    </button>                               
                    </div>
                    <div>
                        <button type="button" onClick={this.onReset}>
                        <img className="images" 
                        src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png" alt="reset icon"/>
                        <p>Reset</p>
                        </button>
                    </div>
                </div>
                <div className="playReset">
                <p>Set Timer limit</p>
                <button type="button" disabled={isDesabe}  onClick={this.onChangeDecrease}>-</button> 
                <p>{count}</p>
                <button type="button" disabled={isDesabe} onClick={this.onChangeIncrease}>+</button>
                </div>
            </div>
        )
    }
}
export default DigitalTimer