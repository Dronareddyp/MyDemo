// Write your JS code here
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    isErrorFirstname:false,
    isErrorLastname:false,
    isTrue: false,
  }

  onBluerLastName=()=>{
    const isValidLastname=this.valuedationLastName()
    console.log("iiiiiii", isValidLastname)
    this.setState({isErrorLastname:!isValidLastname})        
  }

  onBluerFirstName=()=>{
    const isValidFirstname=this.valuedationFirstName()
    this.setState({isErrorFirstname:!isValidFirstname})        
  }

  valuedationFirstName=()=>{
    const {firstname} =this.state
    return firstname !==""
  }

  valuedationLastName=()=>{
    const {lastname} =this.state
    return lastname !==""
  }
  onSubmitBack=()=>{
    this.setState((preve)=>({
      isTrue:!preve.isTrue, 
      firstname:"", 
      lastname:""
    }))
  }

  onSubmitForm = event => {
    event.preventDefault()
    // const {firstname, lastname} = this.state
    const isValidFirstname=this.valuedationFirstName()
    const isValidLastname=this.valuedationLastName()
    console.log("Drona",isValidLastname)
    if(isValidFirstname && isValidLastname){
      this.setState({isTrue:true})
    }else{
      this.setState({
        isErrorFirstname:!isValidFirstname,
        isErrorLastname:!isValidLastname,
        isTrue:false
      })
    }
    
  }

  onChangeFirstname = event => {
    this.setState({firstname: event.target.value})
  }
  onChangeLastname = event => {
    this.setState({lastname: event.target.value})
  }
  render() {
    const {firstname, lastname, isTrue, isErrorFirstname, isErrorLastname} = this.state
    console.log(isTrue)
    return (
      <div>
        <h1>Registration</h1>
        {!isTrue?(
        <form onSubmit={this.onSubmitForm}>
          <div>
          <label htmlFor="firstname">FIRST NAME</label>
          <input
            type="text"
            placeholder="First name"
            id="firstname"
            onChange={this.onChangeFirstname}
            onBlur={this.onBluerFirstName}
            value={firstname}
          />
          {isErrorFirstname&& <p>Required</p>}
          {/* <input onBlur={eventHandler} /> */}
          </div>
          <div>
          <label htmlFor="lastname">LAST NAME</label>
          <input
            type="text "
            placeholder="Last name"
            id="lastname"
            onChange={this.onChangeLastname}
            onBlur={this.onBluerLastName}
            value={lastname}
          />
          {isErrorLastname&& <p>Required</p>}
          </div>
          <button type="submit">Submit</button>
        </form>):(
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            alt="success"
          />
          <h1>Submitted Successfully</h1>
          <button type="button" onClick={this.onSubmitBack}>Submit Another Response</button>
        </div>
        )}
      </div>
    )
  }
}
export default RegistrationForm
