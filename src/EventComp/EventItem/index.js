import "./index.css"
const EventItem=(props)=>{
    const {listEventItems, setActive}=props
    const {id, imageUrl, name, location}=listEventItems
    const onClickActive=()=>{
        setActive(id)
    }

    return(
        <li>
            <button type="button" onClick={onClickActive}>
            <img className="eventImage" src={imageUrl} alt="event"/>
            </button>
            <p>{name}</p>
            <p>{location}</p>
        </li>
    )
  

}
export default EventItem