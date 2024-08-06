import "./index.css";

const WinOrLossCard=(props)=>{
    const {isWon, score, resetGame} = props
   
    return(
        <div className="db_containerWon">
            <div>
                {isWon?
                <h1>You Won</h1>:<h1>You Lose</h1>
                }
            
            {isWon?<p>Best Score</p>:<p>Score</p>}
            <p>{score}/12</p>
            <button type="button" onClick={resetGame}>Play Again</button>
            </div>
            <div>
            {isWon?
            <img src="https://assets.ccbp.in/frontend/react-js/won-game-img.png" alt="win or lose"/>:
            <img src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png" alt="win or lose"/>
            }
            </div>            
        </div>
    )
}
export default WinOrLossCard