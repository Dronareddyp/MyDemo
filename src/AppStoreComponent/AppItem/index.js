import "./index.css"
const AppItem=(props)=>{
    const {listItems}=props
    return(
        <div className="db-container">
            <li >
           <img className="images" src={listItems.imageUrl} alt={listItems.appName}/>
           <p>{listItems.appName}</p>                    
                   
            </li>

        </div>
    )
}
export default AppItem