// import React from 'react'
import { Component } from "react"
import "./index.css"
// import {RiCloseLine} from 'react-icons/ri'

// import Popup from 'reactjs-popup'

// import 'reactjs-popup/dist/index.css'

import GaneOption from "./GameOption"

const choicesList = [
    {
        id: 'ROCK',
        imageUrl:
            'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    },
    {
        id: 'SCISSORS',
        imageUrl:
            'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    },
    {
        id: 'PAPER',
        imageUrl:
            'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    },
]

const initialStatus={
    inProgress:"IN_PROGRESS",
    win:"WIN",
    lost:"LOST",
    draw:"DRAW"
}
class RockPaperScissor extends Component {
    state = {
        count: 0,
        isTrue:false,
        gameStatus:initialStatus.inProgress,
        userChoise:"",
        gameChoice:""
    }

    onClickSetUserChoise=(id)=>{
        this.setState({userChoise:id, gameChoice:this.getGameChiose()}, this.evaluateGame)
    }

    evaluateGame=()=>{
        const {userChoise, gameChoice}=this.state

        if(userChoise===gameChoice){
            this.setState({gameStatus:initialStatus.draw})
        }else if(userChoise==="ROCK"){
            if(gameChoice==='SCISSORS'){
                this.setState(provice=>({gameStatus:initialStatus.win, 
                    count:provice.count+1}))
            }else{
                this.setState(prevState=>({gameStatus:initialStatus.lost, count:prevState.count-1}))
            }
        }else if(userChoise==="PAPER"){
            if(gameChoice==="ROCK"){
                this.setState(prevState=>({gameStatus:initialStatus.win, count:prevState.count+1}))
            }else{
                this.setState(prevState=>({gameStatus:initialStatus.lost, count:prevState.count-1}))
            }
        }else if(userChoise==="SCISSORS"){
            if(gameChoice==="PAPER"){
                this.setState(pre=>({gameStatus:initialStatus.win, count:pre.count+1}))
            }else{
                this.setState(pre=>({gameStatus:initialStatus.lost, count:pre.count-1}))
            }
        }
    }

    renderGameInProgress=()=>{
        return(
            <ul>
                {choicesList.map((demo)=>(
                   <GaneOption key={demo.id} optionDetails={demo} 
                   onClickChange={this.onClickSetUserChoise}/> 
                ))                    
                }
            </ul>
        )
    }

    renderGaeWonVies=()=>{
        const {gameChoice, userChoise}=this.state
        const userChoiseObjectList = choicesList.filter((each)=>(each.id===userChoise))
        const userObject = userChoiseObjectList[0]

        const gameChioseObjectList= choicesList.filter((each)=>each.id===gameChoice)
        const gameObject = gameChioseObjectList[0]
        return(
            <div>
                <div>
                    <div>
                        <p>You</p>
                        <img className="images" src={userObject.imageUrl} alt="your choice"/>
                    </div>
                    <div>
                        <p>Other</p>
                        <img className="images" src={gameObject.imageUrl} alt="opponent choice"/>
                    </div>
                </div>
                <h1>YOU WIN</h1>
                <button type="button" onClick={this.onClickSetUserChoise}>PLAY GAME</button>
            </div>
        )
    }

    renderGameLost=()=>{
        const {gameChoice, userChoise} = this.state
        const userChoiceObjectLIST = choicesList.filter(
        choice => choice.id === userChoise,
        )
        const userChoiceObject = userChoiceObjectLIST[0]
        const gameChoiceObjectLIST = choicesList.filter(
        choice => choice.id === gameChoice,
        )
        const gameChoiceObject = gameChoiceObjectLIST[0]
        return(
            <div>
            <div>
                <div>
                    <p>You</p>
                    <img className="images" src={userChoiceObject.imageUrl} alt="your choice"/>
                </div>
                <div>
                    <p>Other</p>
                    <img className="images" src={gameChoiceObject.imageUrl} alt="opponent choice"/>
                </div>
            </div>
            <h1>YOU LOST</h1>
            <button type="button" onClick={this.onClickSetUserChoise}>PLAY GAME</button>
        </div>
        )
    }

    renderGameDraw=()=>{
        const {gameChoice, userChoise} = this.state
        const userChoiceObjectLIST = choicesList.filter(
            choice => choice.id === userChoise,
            )
        const userChoiceObject = userChoiceObjectLIST[0]
        const gameChoiceObjectLIST = choicesList.filter(
            choice => choice.id === gameChoice,
            )
        const gameChoiceObject = gameChoiceObjectLIST[0]
        return(
            <div>
                <div>
                <div>
                    <p>You</p>
                    <img className="images" src={userChoiceObject.imageUrl} alt="your choice"/>
                </div>
                <div>
                    <p>Other</p>
                    <img className="images" src={gameChoiceObject.imageUrl} alt="opponent choice"/>
                </div>
            </div>
            <h1>IT IS DRAW</h1>
            <button type="button" onClick={this.onClickSetUserChoise}>PLAY GAME</button>
            </div>
        )
    }
    getGameChiose=()=>{
        const gameChioseList=choicesList.map((choise)=>choise.id)
        const randomIndex=Math.floor(Math.random()*3)
        return gameChioseList[randomIndex]
    }
    // onReastart=()=>{
    //     this.setState({})
    // }

    renderGameView=()=>{
        const {gameStatus}=this.state
        switch(gameStatus){
            case initialStatus.inProgress:
                return this.renderGameInProgress()
            case initialStatus.win:
                return this.renderGaeWonVies()
            case initialStatus.lost:
                return this.renderGameLost()
            case initialStatus.draw:
                return this.renderGameDraw()   
            default:
                return null             
        }
    }
    render() {
        const { count } = this.state
        return (
            <div>
                <div>
                    <div>
                        <h1>ROCK</h1>
                        <h1>PAPER</h1>
                        <h1>SCISSORS</h1>
                    </div>
                    <p>Score</p>
                    <p>{count}</p>
                </div>
                <div>
                    {this.renderGameView()}
                </div>
                {/* <div>
          <Popup
            modal
            trigger={<button type="button">Rules</button>}
            closeOnEscape
            window
          >
            {close => (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />

                <button type="button" onClick={() => close()}>
                  <RiCloseLine />
                </button>
              </div>
            )}
          </Popup>
        </div> */}

            </div>
        )
    }
}

export default RockPaperScissor
