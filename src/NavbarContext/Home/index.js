import ConfigurationContext from "../../context/ConfigurationContext" 
import Navbar from "../Navbar"
const Home=()=>(
    <ConfigurationContext.Consumer>
        {(value)=>{
            const{isDarkTheme}=value 
        return(
            <div>
                <Navbar/>
                {
                    isDarkTheme?
                    <img src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                    alt="home"/>:
                    <img src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png" 
                    alt="about"/>
                }

            </div>
        )
    }}
    </ConfigurationContext.Consumer>
)

export default Home