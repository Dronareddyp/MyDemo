import {useState} from "react"

const PasswordValidator=()=>{
    const [password, setPassword]=useState('')
    const inputEvent=(event)=>{
        setPassword(event.target.value)
    }
    return(
        <div>
            <h1>Password Validator</h1>
            <p>Check how strong and secure is your password</p>
            <input type="password" onChange={inputEvent} value={password}/>
            {password.length<8?
                <p>Your password must be at least 8 charectors</p>:""
            }
        </div>
    )
}
export default PasswordValidator