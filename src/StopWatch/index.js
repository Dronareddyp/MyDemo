// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
    state={
        isTrue:false,
        count:0
    }

    componentWillUnmount(){
        clearInterval(this.timeId)
    }

    onClikcEvent=()=>{
        this.setState((prev)=>({isTrue: !prev.isTrue}))
    }
    onReset=()=>{
        clearInterval(this.timeId)
        this.setState({isTrue:false, count:0})
    }
    onStop=()=>{
        clearInterval(this.timeId)
        this.setState({isTrue:false})
    }
    onStartIs=()=>{
        this.timeId = setInterval(this.updateTime,1000)
        this.setState({isTrue:true})
    }
    updateTime=()=>{
        this.setState((prove)=>({count:prove.count+1}))
    }
      
    renderSecond=()=>{
        const {count} = this.state
        const seconds = Math.floor(count%60)
        if(seconds<10){
            return `0${seconds}`
        }
        return seconds
    }

    renderMinutes=()=>{
        const {count} = this.state
        const minutes = Math.floor(count/60)

        if(minutes<10){
            return `0${minutes}`
        }
        return minutes
    }

    render() {
        const {isTrue} = this.state
        const time = `${this.renderMinutes()}:${this.renderSecond()}`
        return (
            <div className="bg-Container">
                <div>
                <h1>Stopwatch</h1>
                <div>
                    <img src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png" alt="stopwatch"/>
                    <span>Timer</span>
                </div>
                <h1>{time}</h1>
                <div>
                <button type="button" 
                onClick={this.onStartIs} 
                disabled={isTrue}>Start</button>
                
                <button type="button" 
                onClick={this.onStop}>Stop</button>

                <button type="button"
                 onClick={this.onReset}>Reset</button>

                </div>
                </div>
            </div>
        )
    }
}
export default Stopwatch
