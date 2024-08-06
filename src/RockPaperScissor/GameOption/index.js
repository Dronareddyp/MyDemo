import React from 'react'

const GaneOption=(props)=> {
    const {optionDetails, onClickChange}=props
    const {id, imageUrl}= optionDetails
    const onClickChangeId=()=>{
        onClickChange(id)
    }
    return (
        <li>
            <button onClick={onClickChangeId} data-testid={`${id.toLowerCase()}Button`}>
                <img className="images" src={imageUrl} alt={id}/>
            </button>            
        </li>
    )
}

export default GaneOption
