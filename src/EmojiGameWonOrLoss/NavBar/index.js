import "./index.css";

const NavBar =(props)=>{
    const {score, emojiGameChangerLength,isTrue} = props
    console.log(score)
    return(
        <div className="dg_containar">
            <div className="logoNav">
            <img className="navBarImage"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" 
            alt="emoji logo"/>
            <p>Emoji Game</p>
            </div>
            {isTrue&&
            <div className="logoNav">
                <p className="paragraph">Score: {emojiGameChangerLength}</p>
                <p className="paragraph">Top Score: {score}</p>
            </div>
            }
        </div>
    )
}
export default NavBar