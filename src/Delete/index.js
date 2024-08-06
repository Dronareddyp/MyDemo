


const DeleteE =(props)=> {
    const {clickTabItem, activeTabId}=props
    const {tabId, displayText}=activeTabId
    const onClcickc=()=>{
        clickTabItem(tabId)
        console.log("drona",tabId)
    }
    return(
        <div>
            <button onClick={onClcickc}>{displayText}</button>

        </div>
    )

  }
  
  export default DeleteE