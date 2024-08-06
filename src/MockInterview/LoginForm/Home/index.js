import {Component} from "react"
// import Cookies from "js-cookie"
// import {Redirect} from "react-router-dom"
import Header from "../Header"

class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <h1>Your Flexibility, Our Excellence</h1>
                <div>
                    <img 
                    src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png" 
                    alt="digital card"/>
                </div>
            </div> 
        )
    }
}
export default Home