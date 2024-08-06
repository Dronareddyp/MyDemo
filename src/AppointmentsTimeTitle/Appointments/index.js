// Write your code here
import {Component} from 'react'
import {v4} from "uuid"
import AppointmentItem from "../AppointmentItem"
import {format} from 'date-fns'


class Appointments extends Component {
    state={
        conmmentList:[],
        title:"",
        date:"",  
        isFilterStars:false      
    }

    onSubmited=(event)=>{
        event.preventDefault()
        const {title, date} = this.state
        const formstttime = date ? 
        format(new Date(date), 'dd MMMM yyyy, EEEE'):
        ""
        const onComment={
            id:v4(),
            title: title,
            date: formstttime,
            isTure: false
        }
        this.setState((prevent)=>({
            conmmentList:[...prevent.conmmentList, onComment], 
            title:"",
            date:""
        }))
    }
    onToggleChangeValue=(id)=>{
        this.setState(preve=>({
            conmmentList:preve.conmmentList.map((demo)=>{
                if(id===demo.id){
                    return {...demo, isTure:!demo.isTure}
                }
                return demo
            })
        }))
    }

    onFilterStars=()=>{
        const {isFilterStars} = this.state
        this.setState(({
            isFilterStars:!isFilterStars
        }))
    }

    onChangeTitle=(event)=>{
        this.setState({title:event.target.value})
    }
    onChangeDate=(event)=>{
        this.setState({date:event.target.value})
    }

    onGetFilterAppointmentList=()=>{
        const {conmmentList, isFilterStars} = this.state
        if(isFilterStars){
            return  conmmentList.filter(each=>(each.isTure===true))
        }
        return conmmentList
    }

  render() {

      const {title,date, isFilterStars} = this.state
      
      const filterStar = isFilterStars ? 'filter-filled' : 'filter-empty'
      const filterActiveStar = this.onGetFilterAppointmentList()
    return (
    <div className="db_container">
        <div className="card_container">
        <h1>Add Appointment</h1>
        <div className="formElement">
        <form onSubmit={this.onSubmited}>
            <label for="title">TITLE</label>
            <input id="title"
            type="text" 
            placeholde="Title"
            value={title} 
            onChange={this.onChangeTitle} 
            className="inputElement"/>
            <br/>

            <label for="date">DATE</label>
            <input id="date" type="date" 
            value={date} 
            onChange={this.onChangeDate} 
            className="inputElement"/>
            <button type="submit">Add</button>
        </form>
        <div>
            <img 
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png" 
            alt="appointments"/>
        </div>
        <hr/>
        <div>
        <h1>Appointments</h1>
        <button className={`filter-style ${filterStar}`}
         onClick={this.onFilterStars} 
         type="button">Starred</button>
        </div>        
        <ul>
        {
            filterActiveStar.map((demo)=>(
            <AppointmentItem key={demo.id} 
            onChangeValue={this.onToggleChangeValue}  
            appointment={demo}/>
            ))
        }
        </ul>
        </div>
        </div>
    </div>
    )
  }
}
export default Appointments
