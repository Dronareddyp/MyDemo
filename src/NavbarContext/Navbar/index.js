import ConfigurationContext from "../../context/ConfigurationContext" 
import {Link} from "react-router-dom"

const Navbar =()=>(
    <ConfigurationContext.Consumer>
        {(value)=>{
            const {isDarkTheme, toggleTheme}=value
            const onClickevent=()=>{
                toggleTheme()
            }
        return(
            <div>
                <div>
                {isDarkTheme?(
                    <div>
                        <img src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                        alt="website logo"/> 
                    </div>):
                    (<div>
                        <img src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                        alt="website logo"/>
                    </div>)
                }
                </div>
                <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                </ul>
                <div>{isDarkTheme?
                    <button onClick={onClickevent}>
                        <img src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                        alt="theme"/>
                    </button>:
                    <button onClick={onClickevent}>
                        <img src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                        alt="theme"/>
                    </button>
                }</div>

            </div>
        )
    }}
    </ConfigurationContext.Consumer>
)
export default Navbar