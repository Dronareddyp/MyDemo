import {Component} from "react"
import Cookies from "js-cookie";
import {Redirect} from 'react-router-dom'

class Login extends Component{
    state={
        username:"",
        password:"",
        showSubmitError:false,
        errorMsg:""
    }

    onSuccess=(jwtToken)=>{
        const {history}=this.props
        console.log(typeof(history))
        Cookies.set("jwt_token", jwtToken,{expires:30,path: '/',})
        history.replace("/")
    }

    onSubmitFaild=(errorMsg)=>{
        this.setState({showSubmitError:true, errorMsg})
    }

    onChangeUsername=(event)=>{
        this.setState({username:event.target.value})
    }
    onChangePassword=(event)=>{
        this.setState({password:event.target.value})
    }

    onSubmitForm=async (event)=>{
        event.preventDefault()
        const {username, password} = this.state
        const userDetails={username, password}
        const options={
            method:"POST",
            body:JSON.stringify(userDetails)
        }
        const response=await fetch('https://apis.ccbp.in/login', options)
        const data= await response.json()
        if(response.ok===true){
            this.onSuccess(data.jwt_token)
        }else{
            this.onSubmitFaild(data.error_msg)
        }
        
    }
    render(){
        const {username, password, showSubmitError, errorMsg} = this.state
        console.log(username, password)
        const jwtToken = Cookies.get("jwt_token")
        if(jwtToken !==undefined){
           return <Redirect to="/"/>            
        }
    return (
        <div>
            <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" 
            alt="website logo"/>
        <form onSubmit={this.onSubmitForm}>
            <div>
            <label htmlFor="username">USERNAME</label>    
            <input id="username" type="text" placeholder="Username" 
            onChange={this.onChangeUsername} value={username}/>
            </div>
            <div>
                <label htmlFor="password" >PASSWORD</label>
                <input id="password" type="password" placeholder="Password"
                onChange={this.onChangePassword} value={password}/>
            </div>
            <button type="submit">Login</button>
            {showSubmitError&&<p>*{errorMsg}</p>} 
            
        </form>

        </div>
    )
    }
} 

export default Login
