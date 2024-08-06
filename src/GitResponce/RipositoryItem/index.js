import "./index.css"
const RipostitoryItem=(props)=>{
    const {getData}=props
    const {name, avatarUrl, forksCount, issuesCount, starsCount}= getData
    return(
        <li>
            <img className="images" src={avatarUrl} alt={name}/>
            <h1>{name}</h1>
            <div>
            <img className="imageIcons" src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"/><p>{starsCount} stars</p>
            </div>
            <div>
            <img className="imageIcons" src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"/><p>{forksCount} forks</p>
            </div>
            <div>
            <img className="imageIcons" src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"/><p>{issuesCount} open issues</p>
            </div>
        </li>
    )

}
export default RipostitoryItem