import { Component } from "react"
import Cookies from "js-cookie"
import {Redirect} from "react-router-dom"
// import { MdEventRepeat } from "react-icons/md"


const apiStatusConstans = {
    initial: "INITIAL",
    sucess: "SUCCESS",
    failure: "FAILURE",
    inProgress: "IN_PROGRESS"
}
class Login extends Component {
    state = {
        user_id: "",
        pin: "",
        isTrue: false,
        errorMsg: "",
    }

    successData = (jwtToken) => {
        const { history } = this.props
        Cookies.set("jwt_token", jwtToken, { expires: 30 })
        history.replace("/")

    }

    getdatFromLogin = async (event) => {
        event.preventDefault()
        this.setState({ apiStatus: apiStatusConstans.inProgress })
        const { user_id, pin } = this.state
        const userDetails = { user_id, pin }

        const options = {
            method: "POST",
            body: JSON.stringify(userDetails)
        }
        const response =await fetch("https://apis.ccbp.in/ebank/login", options)
        const data = await response.json()
        if (response.ok === true) {
            this.successData(data.jwt_token)
        } else {
            this.setState({ isTrue: true, errorMsg: data.error_msg })
        }
    }

    onChangeUserId = (event) => {
        this.setState({ user_id: event.target.value })
    }
    onChangePin = (event) => {
        this.setState({ pin: event.target.value })
    }


    render() {
        const { user_id, pin,isTrue, errorMsg} = this.state

        const jwtToken=Cookies.get("jwt_token")
        if(jwtToken!==undefined){
            return <Redirect to="/"/>
        }         
        return (
            <div className="successContainer">
                <div>
                    <img src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
                        alt="website login" />
                </div>
                <div>
                    <h1>Welcome Back!</h1>
                    <form onSubmit={this.getdatFromLogin}>
                        <div>
                            <label htmlFor="userId">User ID</label>
                            <input id="userId" type="text" onChange={this.onChangeUserId} value={user_id} />
                        </div>
                        <div>
                            <label htmlFor="pin">PIN</label>
                            <input id="pin" type="password" onChange={this.onChangePin} value={pin} />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    {isTrue&&<p>*{errorMsg}</p>}
                </div>
            </div>

        )
    }
}
export default Login