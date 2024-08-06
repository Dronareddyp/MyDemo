import "./index.css";


const TransactionItem=(props)=>{
    const {transection, onTarsDelete} = props
    const {title, amount, id, transactionTypeDrop} = transection

    const onClcikcEvent = ()=>{
        onTarsDelete(id)
    }
    return(
        <li className="itemsList2">
        <p className="">
            {title}            
        </p>
        <p className="">
            RS {amount}            
        </p>
        <p className="">
            {transactionTypeDrop}            
        </p>
        <div className="">
            <button type="button" data-testid="delete" className="button" onClick={onClcikcEvent}>
                <img className="deleteImage"
                src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png" alt="delete"/>
            </button>            
        </div>
        </li>
        
    )

}
export default TransactionItem;