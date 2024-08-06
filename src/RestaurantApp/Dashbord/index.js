// import "./index.css";

// const Dashbord = ({ detatile, cardItem, addItemToCart, removeItemFromCart}) => {
//     const { 
//         dishId,
//         dishName, 
//         dishType, 
//         dishPrice,
//         dishAvailability,
//         dishCalories,
//         dishCurrency, dishDescription, dishImage,
//         addonCat,
//     } = detatile

//     const oninclrese=()=>addItemToCart(detatile)
//     const onDecrease=()=>removeItemFromCart(detatile)
    
//     const getQuantity=()=>{
//         const cardItems=cardItem.find(item=>item.dishId===dishId)
//         return cardItems?cardItems.quantity:0
//     }

//     const renderControllerButton=()=>(
//         <div className="controller-container d-flex align-items-center bg-success">
//             <button onClick={onDecrease}>-</button>
//             <p>{getQuantity()}</p>
//             <button onClick={oninclrese}>+</button>
//         </div>
//     )

//     return (
//         <li className="list_item d-flex dish-item-container">
//             <div className={`veg-border ${dishType===1?"non-veg-border":""} me-3`}>
//                 <div className={`veg-round ${dishType===1?'non-veg-round':""}`}/>
//             </div>
//             <div>
//                 <h1 className="dishName">{dishName}</h1>
//                 <p>{dishCurrency} {dishPrice}</p>
//                 <p>{dishDescription}</p>
//                 {dishAvailability&&renderControllerButton()}
//                 {!dishAvailability && (
//                     <p>Not Availabel</p>
//                 )}
//                 {addonCat.length !==0 &&(
//                     <p>Customizations availabel</p>
//                 )}
//             </div>
//             <div>
//                 <p>{dishCalories} calories</p>
//             </div>
//             <div>
//                 <img className="imageDishImage" src={dishImage} alt={dishName} />
//             </div>

//         </li>
//     )
// }
// export default Dashbord


import './index.css'

const Dashbord = ({
  dishDetails,
  cartItems,
  addItemToCart,
  removeItemFromCart,
}) => {
  const {
    dishId,
    dishName,
    dishType,
    dishPrice,
    dishCurrency,
    dishDescription,
    dishImage,
    dishCalories,
    addonCat,
    dishAvailability,
  } = dishDetails

  const onIncreaseQuantity = () => addItemToCart(dishDetails)
  const onDecreaseQuantity = () => removeItemFromCart(dishDetails)

  const getQuantity = () => {
    const cartItem = cartItems.find(item => item.dishId === dishId)
    return cartItem ? cartItem.quantity : 0
  }

  const renderControllerButton = () => (
    <div className="controller-container d-flex align-items-center bg-success">
      <button className="button" type="button" onClick={onDecreaseQuantity}>
        -
      </button>
      <p className="quantity">{getQuantity()}</p>
      <button className="button" type="button" onClick={onIncreaseQuantity}>
        +
      </button>
    </div>
  )

  return (
    <li className="mb-3 p-3 dish-item-container d-flex">
      <div
        className={`veg-border ${dishType === 1 ? 'non-veg-border' : ''} me-3`}
      >
        <div className={`veg-round ${dishType === 1 ? 'non-veg-round' : ''}`} />
      </div>
      <div className="dish-details-container">
        <h1 className="dish-name">{dishName}</h1>
        <p className="dish-currency-price">
          {dishCurrency} {dishPrice}
        </p>
        <p className="dish-description">{dishDescription}</p>
        {dishAvailability && renderControllerButton()}
        {!dishAvailability && (
          <p className="not-availability-text text-danger">Not available</p>
        )}
        {addonCat.length !== 0 && (
          <p className="addon-availability-text">Customizations available</p>
        )}
      </div>

      <p className="dish-calories text-warning">{dishCalories} calories</p>
      <img className="dish-image" alt={dishName} src={dishImage} />
    </li>
  )
}

export default Dashbord
