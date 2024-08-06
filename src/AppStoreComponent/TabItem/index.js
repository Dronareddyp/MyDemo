
const TabItem=(props)=>{
    const {listItem, clickItems} = props

    const onClickEvent=()=>{
        clickItems(listItem.tabId)
        console.log(listItem.tabId)
    }    
    return(
        <div>
            <li>
                <button type="button" onClick={onClickEvent}>
            {listItem.displayText}
            </button>
            </li>

        </div>
    )
}
export default TabItem