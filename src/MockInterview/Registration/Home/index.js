import ResistationContext from "../../../Zcontext/ResistationContext"
import {Link} from "react-router-dom"

const Home =(props)=>{
    const onRigister=()=>{
        const {history}=props
        history.replace("/register")
    }
    return(
        
    <ResistationContext.Consumer>

    {(value)=>{
        const {
            name, 
            topicsLists,
            isRegistration,
            
        }=value
        console.log(isRegistration)
        return(
            <div>
                <img 
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"/>
                {isRegistration===true?
                (<div>
                    <h1>Hello {name}</h1>
                    <p>Welocome to {topicsLists}</p>
                    <img src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"/>
                </div>
                ):(
               <div>
                <h1>Welocome to Meetup</h1>
                <p>Please register for the topic</p>
                <Link to="/register">
                    <button onClick={onRigister}>Register</button></Link>
                <div>
                    <img src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"/>
                </div>
                </div>)
                 }
                
            </div>
        )
    }
}
</ResistationContext.Consumer>
    )
}
export default Home