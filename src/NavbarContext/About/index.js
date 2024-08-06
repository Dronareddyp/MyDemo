import ConfigurationContext from "../../context/ConfigurationContext" 
import Navbar from "../Navbar"

const About=()=>(
    <ConfigurationContext.Consumer>
        {(value)=>{
            const {isDarkTheme}=value
        return(
            <div>
                <Navbar/>                
                {isDarkTheme?
                <img src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"/>:
                <img src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"/>                
                }

            </div>
        )
    }}
    </ConfigurationContext.Consumer>
)

export default About