// import {format} from 'date-fns'
const AppointmentItem=(props)=>{
    const {appointment, onChangeValue} =props
    const {title, date, isTure, id} = appointment
    console.log("isTrue", isTure)

    const onClickEvent = ()=>{
        onChangeValue(id)
    }

    const isStateImage= isTure?
    "https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png":
    "https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"


    // const formatee = format(new Date(date), 'dd MMMM yyyy, EEEE') // 19 July 2021, Monday
    return(
        <li>
            <div>
            <p>{title}</p>
            <button data-testid="star" type="button" onClick={onClickEvent}>
            <img src={isStateImage} className="star" alt="star"/>
            </button>            
            </div>
            <p>Date: {date}</p>            
        </li>
    )
}
export default AppointmentItem