import {useState} from "react"

const CraditCard=()=>{
    const [cardId, setCardId] =useState("")
    const [cardName, setCardName]=useState("")

    const onChangeId=(event)=>{
        setCardId(event.target.value)
    }
    const onChangeName=(event)=>{
        setCardName(event.target.value)
    }
    return(
        <div>
            <div>
                <h1>CREDIT CARD</h1>
                <hr/>
                <div>
                {/* <img src="https://assets.ccbp.in/frontend/hooks/credit-card-bg.png" alt="credit card"/> */}
                {cardId}
                <h1>CARDHOLDER NAME</h1>
                {cardName.toUpperCase()}
                </div>

            </div>
            <div>
                <h1>Payment Method</h1>
                
                <input type="text" placeholder="Card Number" onChange={onChangeId} value={cardId}/>
                <input type="text" placeholder="Cardholder Name" onChange={onChangeName} value={cardName}/>

            </div>

        </div>
    )
}
export default CraditCard