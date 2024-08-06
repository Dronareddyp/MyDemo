import {Component} from "react"
import {v4 as uuidv4} from "uuid"
import "./index.css"

const colorList=["yellow", "green","orange", "brown", "blue"]
class PasswordManager extends Component{
    state={
        passwordManage:[],
        isTrue:false,
        websiteText:"",
        username:"",
        password:"",
        isShow:false
    }


    onSubmitForm=(event)=>{
        event.preventDefault()
        const {websiteText, username, password} =this.state
        const initial = websiteText.slice(0,1).toUpperCase()
        const clasValue = colorList[Math.floor(Math.random()*5)]
        const passwordlist={
            id:uuidv4(),
            websiteText:websiteText,
            username:username,
            password:password,
            initialValue:initial,
            classAdd:clasValue
        }
        this.setState((prove)=>(
            {passwordManage:[...prove.passwordManage, passwordlist],
            websiteText:"",
            username:"",
            password:"",
            isTrue:true,
            isInputText:"",
            }            
            ))              
        }

    showPassword=(e)=>{
        if(e.target.checked){
            this.setState({isShow:true})
        }else{
            this.setState({isShow:false})
        }
    }

    onTextChange=(event)=>{
        this.setState({isInputText:event.target.value})
    }
    onOnchange=(event)=>{
        this.setState(({websiteText:event.target.value}))
    }
    onUsername=(event)=>{
        this.setState(({username:event.target.value}))
    }
    onPassword=(event)=>{
        this.setState(({password:event.target.value}))
    }

    onFilterValue=()=>{
        const {isInputText, passwordManage} =this.state
        const filterConstant = passwordManage.filter((each)=>
        each.websiteText.toLowerCase().includes(isInputText.toLowerCase()))
        return filterConstant
    }
    onDeleteEle=(id)=>{
        const {passwordManage}= this.state
        const filterEledelte= passwordManage.filter((each)=>each.id!==id)
        const caseOf = filterEledelte.length!==0
        this.setState(({passwordManage:filterEledelte, isTrue:caseOf}))
    }

    render(){
        const {isInputText, passwordManage,websiteText,isShow, username, password} =this.state
        let {isTrue} = this.state
        const lengthOf = passwordManage.length
        const onFilterValue=this.onFilterValue()
        if(onFilterValue.length===0){
            isTrue=false
        }else{
            isTrue = true
        }
        return(
            <div className="db_container">
                <img className="images" src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png" 
                alt="app logo"/>
                <div className="card_image">
                    <form onSubmit={this.onSubmitForm} className="cardInputs">    
                    <h1>Add New Password</h1>                     
                        <div>
                        <img className="imagesIcons" src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                         alt="website"/>
                        <input placeholder="Enter Website" type="text" onChange={this.onOnchange} value={websiteText}/>
                        </div>
                        <div>
                        <img className="imagesIcons" src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                         alt="username"/>
                        <input placeholder="Enter Username" type="text" onChange={this.onUsername} value={username}/>
                        </div>
                        <div>
                        <img className="imagesIcons" src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                         alt="password"/>
                        <input placeholder="Enter Password" type="password" onChange={this.onPassword} value={password}/>
                        </div>
                        <button type="submit">Add</button>
                    </form>
                    <div className="passwords">
                        <img className="password_manager" 
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                         alt="password manager"/>
                    </div>
                </div>
                <div className="db_card2">
                    <div>
                    <h1>Your Passwords</h1>
                    <p>{lengthOf}</p>
                    </div>
                    <img className="imagesIcons" 
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"/>
                    <input placeholder="Search" type="search" onChange={this.onTextChange} value={isInputText}/>
                    <hr/>
                    <input type="checkbox" id="check" onChange={this.showPassword}/>
                    <label htmlFor="check">Show passwords</label>
                    <div className="card_image">
                        {!isTrue &&(
                            <div>
                            <img className="password_manager" 
                            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png" alt="no passwords"/>
                            <p>No Passwords</p>
                        </div>
                       )}  
                       {isTrue && (
                    <ul>
                    {onFilterValue.map((demo)=>(
                        <li className="item-list" key={demo.id}>
                            <p className={`initial ${demo.classAdd}`}>{demo.initialValue}</p>
                            <div>
                            <p>{demo.websiteText}</p>
                            <p>{demo.username}</p>
                            {!isShow &&(
                                <img className=""
                                 src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png" 
                                alt="stars"/>
                            )}
                            {isShow && <p>{demo.password}</p>}
                            </div>
                            
                            <button data-testid="delete"  type="button" onClick={()=>this.onDeleteEle(demo.id)}>
                            <img className="imagesIcons"
                            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                            alt="delete"/>
                            </button>
                       </li>
                    ))}
                    </ul> 
                       )}                  
                    </div>             
                    </div>

            </div>
        )
    }
}
export default PasswordManager