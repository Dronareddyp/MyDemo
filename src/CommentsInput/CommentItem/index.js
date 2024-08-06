import {formatDistanceToNow} from 'date-fns'

const CommentItem=(props)=>{
    const { onDeleteOn,ontoggoleLike, contentList} = props
    const {id, name, comment, initialClassName,isLike, date} = contentList
    // console.log("ddddddddddd",name, comment, isLike)
    const insit = name?name[0].toUpperCase():""

    const onClickEle=()=>{
        onDeleteOn(id)
    }
    const onClickEle1=()=>{
        ontoggoleLike(id)
    }
    const posteDate = formatDistanceToNow(date)

    return(
        <li>
            <div className={initialClassName}>
            <p>{insit}</p>
            </div>
        <h1>{name}</h1>
        <p>{posteDate} ago</p>
        <p>{comment}</p>
        <div>
            <div>
            {isLike?
            <button type="button" onClick={onClickEle1}>
            <img src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png" alt="like"/>Like
            </button>:
            <button type="button" onClick={onClickEle1}>
            <img src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png" alt="like"/>Like
            </button>
           }
            </div>
            <button data-testid="delete" className="button" type="button" onClick={onClickEle}>
            <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" alt="delete"/>
            </button>
        </div>
    </li>   

    )
}
export default CommentItem