import {Component} from "react"
import Loader from 'react-loader-spinner'
import Header from "../Header"
import {Link} from "react-router-dom"

const initialStatus = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    inProgress: "IN_PROGRESS"
}
class Home extends Component{
    state={
        status: initialStatus.initial,
        techData: [],
        textInput:[]
    }

    componentDidMount(){
        this.renderComponent()
    }

    renderComponent=async ()=>{
        this.setState({status:initialStatus.inProgress})

        const options={
            method:"GET"
        }
        const response= await fetch("https://apis.ccbp.in/te/courses", options)
        if(response.ok===true){
            const data=await response.json()
            const updateData=data.courses.map(demo=>({
                id:demo.id,
                name:demo.name,
                logoUrl:demo.logo_url
            }))
            this.setState({techData:updateData, status:initialStatus.success})
        }else{
            this.setState({status:initialStatus.failure})
        }
    }

    onClickChange=(id)=>{
        const {techData}=this.state
        const filtering=techData.filter((each)=>each.id===id)
        this.setState({textInput:filtering})
    }

    renderSuccess=()=>{
        const {techData}=this.state
        console.log("techhhhhh", techData)
        return(
            <ul>
                {
                    techData.map((demo)=>(
                        <li key={demo.id}>
                            <Link type="button" to={`/courses/${demo.id}`}>
                            <img src={demo.logoUrl} alt={demo.name}/>
                            <h1>{demo.name}</h1>
                            </Link>
                        </li>
                    ))
                }                
            </ul>
        )
    }
    failView = () => (
        <div>
          
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
              alt="failure view"
            />
            <h1>Oops! Something Went wRONG</h1>
            <p>We cannot seem to find the page you are looking for</p>
            <button type="button" onClick={this.renderComponent}>
              Retry
            </button>
          </div>
        </div>
      )

    renderLoader=()=>{
        return(
            <div data-testid="loader">
                <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
            </div>
        )
    }

    renderHomePage=()=>{
        const {status}=this.state
        switch(status){
            case initialStatus.success:
                return this.renderSuccess()
            case initialStatus.inProgress:
                return this.renderLoader() 
            case initialStatus.failure:
                return this.failView()    
            default:
                return null       
        }
    }
    render(){
        return(
            <div>
                <Header/>
                {this.renderHomePage()}
            </div>
        )
    }
}
export default Home