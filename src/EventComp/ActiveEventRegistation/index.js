import "./index.css"

const registrate={
    yetToRegister:"YET_TO_REGISTER",
    registered:"REGISTERED",
    registrationsClosed:"REGISTRATIONS_CLOSED"
}
const ActiveEventRegistation=(props)=>{
    const {registration}=props

    const resistrationNull=()=>{
        return(
            <div>
                <p>Click on an event, to view its regitration details</p>
            </div>

        )
    }
    const resgiserYetToRegister=()=>{
        return(
            <div>
                <img className="eventImage" src="https://assets.ccbp.in/frontend/react-js/events-register-img.png" 
                alt="yet to register"/>
            </div>
        )

    }
    const registerResister=()=>{
        return(
            <div>
                <img className="eventImage" src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
                alt="registered"/>
            </div>
        )
    }
    const registerResistratioCloser=()=>{
        return(
            <div>
                <img className="eventImage" src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
                alt="registrations closed"/>
            </div>
        )
    }

    const countSwitch=()=>{
        switch(registration){
        case registrate.yetToRegister:
            return resgiserYetToRegister()
        case registrate.registered:
            return registerResister()
        case registrate.registrationsClosed:
            return registerResistratioCloser()
        default:
            return  resistrationNull()           
        }
    }
    return(
        <div>
            {countSwitch()}
        </div>
    )
}
export default ActiveEventRegistation