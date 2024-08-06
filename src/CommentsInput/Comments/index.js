import {Component} from "react"
import {v4 as uuidv4} from "uuid"
import CommentItem from "../CommentItem"
import "./index.css";

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component{
    state={
        contentList:[],
        name:"",
        comment:"",
    }

    onSubmit=(event)=>{
        event.preventDefault()
        const {name, comment} = this.state
        const initialContainerBackgroundClassName=`initial-cintainer ${
          initialContainerBackgroundClassNames[
            Math.ceil(Math.random() * initialContainerBackgroundClassNames.length-1)]
        }`
        const commetList={
            id:uuidv4(),
            name:name,
            comment:comment,
            date:new Date(),
            isLike:false,
            initialClassName:initialContainerBackgroundClassName
        }
        this.setState((preve)=>(
          {contentList:[...preve.contentList, commetList],
          name:"",
          comment:""
          }))
    }

    onChnageName=(event)=>{
        this.setState({name:event.target.value})
    }
    onChnageComment=(event)=>{
        this.setState({comment:event.target.value})
    }

    ontoggoleLike =(id)=>{
      this.setState(prestate=>({
        contentList:prestate.contentList.map((each)=>{
          if(each.id===id){
            return {...each, isLike:!each.isLike}
          }
          return each
        })
      }))
    }

    onDeleteOn=(id)=>{
      const {contentList} = this.state
      const initialData = contentList.filter(each=>{
        return each.id !==id
      })
      console.log(initialData)
      this.setState(({
        contentList:initialData
      }))      
    }

  render(){
      const {name, comment, contentList} = this.state

    return(
      <div>
          <h1>Comments</h1>
          <div className="bodyparts">
          <form className="db_container" onSubmit={this.onSubmit}>
              <p for="tech">Say something about 4.0 Technologies</p>
              <input id="tech" placeholder="Your Name" type="text" 
              className="inputValue" 
              onChange={this.onChnageName} 
              value={name}/>

              <textarea 
              placeholder="Your Comment" 
              onChange={this.onChnageComment} 
              value={comment}/> 
              <button type="submit">Add Comment</button>             
         </form>
         <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" alt="comments"/>
         </div>
         <p><span>{contentList.length}</span> comments</p>  
          
         <ul>{
           contentList.map((demo)=>(
            <CommentItem key={demo.id} 
            contentList={demo} 
            ontoggoleLike={this.ontoggoleLike} 
            onDeleteOn={this.onDeleteOn} />

           ))
        }</ul>
      </div>
    )
  }

}
export default Comments 