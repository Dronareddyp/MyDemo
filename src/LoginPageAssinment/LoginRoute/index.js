import { Component } from "react"
import  Cookies from "js-cookie"
import {Redirect, withRouter} from 'react-router-dom'

class LoginRoute extends Component {
    state = {
        userName: "",
        password: "",
        showPasswordStatus:false,
        showErrorMessage:false,
        errorMessage:""
    }

    onchangeCheckBox=()=>{
        this.setState(prev=>({showPasswordStatus:!prev.showPasswordStatus}))
    }

    onChangeUserName = (event) => {
        this.setState({ userName: event.target.value })
    }

    onChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    onSubmitForm = async (event) => {
        // const jwtToken = Cookies.get('jwt_token')
        // const {username, password}=this.state
        const userDetails = { username: 'rahul', password: 'rahul@2021' }
        event.preventDefault()
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
        }
        const responsive = await fetch("https://apis.ccbp.in/login", options)
        const data = await responsive.json()
        if(responsive.ok===true){
            Cookies.set("jwt_token", data.jwt_token, {expires:1})
            const {history}=this.props
            history.replace("/")
            // this.successFild(data.jwt_token)
        }
        if(!responsive.ok){
            this.setState({errorMessage:data.error_msg, showErrorMessage:true})
        }

    }

    render() {
        const { userName, password, showPasswordStatus} = this.state
        if(Cookies.get("jwt_token")!==undefined){
            return <Redirect to="/"/>
        }
        const showTime=showPasswordStatus?"text":"password"
        return (
            <div>
                <form onSubmit={this.onSubmitForm}>
                    <div>
                        <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt="" />
                    </div>
                    <div>
                        <label htmlFor="username">USERNAME</label>
                        <input id="username" type="text"
                            onChange={this.onChangeUserName}
                            value={userName} />
                    </div>
                    <div>
                        <label htmlFor="password">PASSWORD</label>
                        <input id="password" type={showTime}
                            onChange={this.onChangePassword} 
                            value={password} />
                    </div>
                    <div>
                        <input type="checkbox" 
                        onChange={this.onchangeCheckBox}/>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}
export default withRouter(LoginRoute)