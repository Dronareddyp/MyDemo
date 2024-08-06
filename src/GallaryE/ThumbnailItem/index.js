// Write your code here.
// import './index.css'

const ThumbnailItem = props => {
  const {imagesList, imageElement} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesList
  const onClickElevent = () => {
    imageElement(id)
    console.log("ppppp", id)
  }

  return (
    <div>
      <p>Nature Photography by Rahul</p>
      <li>
        <button type="button" onClick={onClickElevent}>
          <img src={thumbnailUrl} alt={thumbnailAltText} />
        </button>
      </li>
    </div>
  )
}
export default ThumbnailItem
