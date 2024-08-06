import {Component} from "react"
import "./index.css"
import {v4 as uuidv4} from "uuid"

const tagsList = [
    {
      optionId: 'HEALTH',
      displayText: 'Health',
    },
    {
      optionId: 'EDUCATION',
      displayText: 'Education',
    },
    {
      optionId: 'ENTERTAINMENT',
      displayText: 'Entertainment',
    },
    {
      optionId: 'SPORTS',
      displayText: 'Sports',
    },
    {
      optionId: 'TRAVEL',
      displayText: 'Travel',
    },
    {
      optionId: 'OTHERS',
      displayText: 'Others',
    },
  ]
class MyTask extends Component{
    state={
        taskName:"",
        tagsListName:tagsList[0].optionId,
        taskList:[], 
        isTrue:false,
        activeTags:"INITIAL"
    }
    onChangenasthe=(event)=>{
        this.setState({taskName:event.target.value})
    }

    onChangeSelector=(event)=>{
        this.setState({tagsListName:event.target.value})
    }

    onSubmitForm=(event)=>{
        const {taskName, tagsListName,}=this.state
        event.preventDefault()
        const newData={
            id:uuidv4(),
            item:taskName,
            filter:tagsListName, 
            isTrue:false
        }
        if(taskName.length!==0){
            this.setState(prev=>({taskList:[...prev.taskList, newData], taskName:"", 
            tagsListName:tagsList[0].optionId}))
        }        
    }

    onClickListItem=(event)=>{
        this.setState(prevState => ({
            activeTags:
              prevState.activeTags === event.target.value
                ? 'INITIAL'
                : event.target.value,
          }))  
                
    }
    render(){
        const {taskName, tagsListName, taskList, activeTags} = this.state
        console.log("tagsListName", tagsListName)
        const filteringList= activeTags==="INITIAL"?
        taskList:taskList.filter(each=>(each.filter===activeTags))
        return(
            <div className="containerEle">
                <div>
                    <h1>Create a task!</h1>
                    <form onSubmit={this.onSubmitForm}>
                        <div>
                        <label htmlFor="Task">Task</label>
                        <input id="Task" placeholder="Enter the task here" 
                        type="test" onChange={this.onChangenasthe} value={taskName}/>
                        </div>
                         
                         <div>
                        <label htmlFor="select">Tags</label>
                        <select id="sleect" value={tagsListName} onChange={this.onChangeSelector}>
                            {tagsList.map(demo=>(
                                <option key={demo.optionId} value={demo.optionId}>
                                    {demo.displayText}                                    
                                </option>
                            ))}
                        </select>
                        </div>
                        <button type="submit">Add Task</button>
                    </form>
                </div>
                <div>
                <h1>Tags</h1>
                <ul className="tagaButton">
                    {tagsList.map((demo)=>(
                    <li key={demo.optionId}>
                        <button type="button" value={demo.optionId} onClick={this.onClickListItem}>
                        {demo.displayText}
                        </button>
                    </li>
                ))}
                </ul>
                <h1>Tasks</h1>
                {filteringList.length===0?
                    <h1>No Tasks Added Yet</h1>:
                    <ul>
                        {
                            filteringList.map((demo)=>(
                                <li key={demo.id}>
                                    <p>{demo.item}</p>
                                    <p type="button">{demo.filter}</p>
                                </li>
                            ))
                        }
                    </ul>
                }
                </div>
            </div>
        )
    }
}
export default MyTask