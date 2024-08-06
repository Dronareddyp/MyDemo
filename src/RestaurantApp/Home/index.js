// import {useState, useEffect} from "react"
// import "./index.css"
// import Header from "../Header"
// import Dashbord from "../Dashbord"

// const Home =()=>{
//     const [isTrue, setIsTrue]= useState(true)
//     const [catageryId, setCatageryId] =useState('')
//     const [dataBase, setDataBase]= useState([])
//     const [cardItem, setCardItem] = useState([])
//     // console.log(dashBordData)
//     console.log(catageryId)

//     const addItemToCart= dish=>{
//         const isAlreadyExists= cardItem.find(item=>item.dishId===dish.dishId)
//         if(!isAlreadyExists){
//             const newdish={...dish, quantity:1}
//             setCardItem(prev=>[...prev, newdish])
//         }else{
//             setCardItem(prev=>prev.map(item=>item.dishId===dish.dishId
//                 ?{...item, quantity:item.quantity+1}:item,)
//                 )
//         }
//     }

//     const removeItemFromCart=dish=>{
//         const isAlreadyExist=cardItem.find((each)=>each.dishId===dish.dishId)
//         if(isAlreadyExist){
//             setCardItem(prev=>prev.map(item=>item.dishId===dish.dishId
//                 ?{...item, quantity: item.quantity-1}:item
//                 )
//                 .filter(item=>item.quantity>0)
                
//                 )
//         }
//     }

//     const getCategeryData=tableMenuList=>
//         tableMenuList.map((demo)=>({
//             menuCategory:demo.menu_category,             
//             menuCategoryId:demo.menu_category_id,
//             menuCategoryImage:demo.menu_category_image,
//             categoryDishes:demo.category_dishes.map((demo)=>({
//                 addonCat:demo.addonCat,
//                 dishAvailability:demo.dish_Availability,
//                 dishType:demo.dish_Type,
//                 dishCalories:demo.dish_calories,
//                 dishCurrency:demo.dish_currency,
//                 dishDescription:demo.dish_description,
//                 dishId:demo.dish_id,
//                 dishImage:demo.dish_image,
//                 dishName:demo.dish_name,
//                 dishPrice:demo.dish_price
//             }))

//         }))

//     const getData=async()=>{
//         const response=await fetch("https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details")
//         const data= await response.json()
//         console.log(data)
//         const updateData=getCategeryData(data[0].table_menu_list)
//         setDataBase(updateData)
//         setCatageryId(updateData[0].menuCategoryId)
//         setIsTrue(false)
        
//     }
//     useEffect(()=>{
//         getData()
//         // rederade()
//     },[])

//     const onUpdateActive=(id)=>{
//         setCatageryId(id)
//     }

//     const renderTabMenuList=()=>
//         dataBase.map((demo)=>{
//             const onClickHandle=()=>
//                 onUpdateActive(demo.menuCategoryId)
//             return (
//                 <li className={`each-tab-item ${demo.menuCategoryId===catageryId?"active-tab-item":""}`} 
                
//                 key={demo.menuCategoryId} onClick={onClickHandle}>
//                     <button type="button" className="tab-category-button">{demo.menuCategory}</button>
//                 </li>
//             )    
//         })
    
//     const renderDish=()=>{
//         const foundCategory=dataBase.find((each)=>each.menuCategoryId===catageryId)
//         if (!foundCategory) {
//             return <p>No dishes found for this category.</p>;
//         }
    
//         const { categoryDishes } = foundCategory;
    
//         if (!categoryDishes || categoryDishes.length === 0) {
//             return <p>No dishes found for this category.</p>;
//         }
//         return (
//             <ul>
//                 {
//                     categoryDishes.map(eacgDash=>(
                        
//                         <Dashbord key={eacgDash.dishId}
//                         detatile={eacgDash}
//                         cardItem={cardItem}
//                         addItemToCart={addItemToCart}
//                         removeItemFromCart={removeItemFromCart}
//                         />
                        
            
//                     ))
//                 }
//             </ul>
//         )
//     }     
        
//     return isTrue?(
//         <div className="spinner-container">
//             <div className="spinner-border" role="status"/>
//         </div>
//     ):(
//         <div className="">
//             <Header cardItems={cardItem}/>
//             <ul className="d-flex tab-container">{renderTabMenuList()}</ul>
           
//             {renderDish()}
//         </div>
//     )
// }
// export default Home

import {useState, useEffect} from 'react'

import Header from '../Header'
import Dashbord from '../Dashbord'

import './index.css'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [response, setResponse] = useState([])
  const [activeCategoryId, setActiveCategoryId] = useState('')

  const [cartItems, setCartItems] = useState([])

  const addItemToCart = dish => {
    const isAlreadyExists = cartItems.find(item => item.dishId === dish.dishId)
    if (!isAlreadyExists) {
      const newDish = {...dish, quantity: 1}
      setCartItems(prev => [...prev, newDish])
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.dishId === dish.dishId
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      )
    }
  }

  const removeItemFromCart = dish => {
    const isAlreadyExists = cartItems.find(item => item.dishId === dish.dishId)
    if (isAlreadyExists) {
      setCartItems(prev =>
        prev
          .map(item =>
            item.dishId === dish.dishId
              ? {...item, quantity: item.quantity - 1}
              : item,
          )
          .filter(item => item.quantity > 0),
      )
    }
  }

  const getUpdatedData = tableMenuList =>
    tableMenuList.map(eachMenu => ({
      menuCategory: eachMenu.menu_category,
      menuCategoryId: eachMenu.menu_category_id,
      menuCategoryImage: eachMenu.menu_category_image,
      categoryDishes: eachMenu.category_dishes.map(eachDish => ({
        dishId: eachDish.dish_id,
        dishName: eachDish.dish_name,
        dishPrice: eachDish.dish_price,
        dishImage: eachDish.dish_image,
        dishCurrency: eachDish.dish_currency,
        dishCalories: eachDish.dish_calories,
        dishDescription: eachDish.dish_description,
        dishAvailability: eachDish.dish_Availability,
        dishType: eachDish.dish_Type,
        addonCat: eachDish.addonCat,
      })),
    }))

  const fetchRestaurantApi = async () => {
    const api = 'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'
    const response = await fetch(api)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    const updatedData = getUpdatedData(data[0].table_menu_list)
    setResponse(updatedData)
    setActiveCategoryId(updatedData[0].menuCategoryId)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchRestaurantApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onUpdateActiveCategoryIdx = menuCategoryId =>
    setActiveCategoryId(menuCategoryId)

  const renderTabMenuList = () =>
    response.map(eachCategory => {
      const onClickHandler = () =>
        onUpdateActiveCategoryIdx(eachCategory.menuCategoryId)

      return (
        <li
          className={`each-tab-item ${
            eachCategory.menuCategoryId === activeCategoryId
              ? 'active-tab-item'
              : ''
          }`}
          key={eachCategory.menuCategoryId}
          onClick={onClickHandler}
        >
          <button
            type="button"
            className="mt-0 mb-0 ms-2 me-2 tab-category-button"
          >
            {eachCategory.menuCategory}
          </button>
        </li>
      )
    })

  const renderDishes = () => {
    // const {categoryDishes} = response.find(
    //   eachCategory => eachCategory.menuCategoryId === activeCategoryId,
    // )
    const foundCategory = response.find(
      each => each.menuCategoryId === activeCategoryId,
    )
    if (!foundCategory) {
      return <p>No dishes found for this category.</p>
    }

    const {categoryDishes} = foundCategory

    if (!categoryDishes || categoryDishes.length === 0) {
      return <p>No dishes found for this category.</p>
    }

    return (
      <ul className="m-0 d-flex flex-column dishes-list-container">
        {categoryDishes.map(eachDish => (
          <Dashbord
            key={eachDish.dishId}
            dishDetails={eachDish}
            cartItems={cartItems}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
          />
        ))}
      </ul>
    )
  }

  const renderSpinner = () => (
    <div className="spinner-container">
      <div className="spinner-border" role="status" />
    </div>
  )

  return isLoading ? (
    renderSpinner()
  ) : (
    <div className="home-background">
      <Header cartItems={cartItems} />
      <ul className="m-0 ps-0 d-flex tab-container">{renderTabMenuList()}</ul>
      {renderDishes()}
    </div>
  )
}

export default Home
