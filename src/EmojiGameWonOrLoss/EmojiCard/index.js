import "./index.css"
const EmojiCard =(props)=>{
    const {emojiImages, filtterEmojis} = props
    const {emojiName, emojiUrl, id} =emojiImages
    const clickEmoji=()=>{
        filtterEmojis(id)
    }
    return(
        <li className="dg-container">
            <button type="button" className="button" onClick={clickEmoji}>
                <img className="images" src={emojiUrl} alt={emojiName}/>
            </button>
        </li>
    )
}
export default EmojiCard