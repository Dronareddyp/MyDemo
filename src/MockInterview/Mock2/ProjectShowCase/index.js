import {Component} from "react"
import Loader from 'react-loader-spinner'
import "./index.css"

const categoriesList = [
    {id: 'ALL', displayText: 'All'},
    {id: 'STATIC', displayText: 'Static'},
    {id: 'RESPONSIVE', displayText: 'Responsive'},
    {id: 'DYNAMIC', displayText: 'Dynamic'},
    {id: 'REACT', displayText: 'React'},
  ]

const apiStatusConstans = {
    initial: "INITIAL",
    sucess: "SUCCESS",
    failure: "FAILURE",
    inProgress: "IN_PROGRESS"
}
class ProjectShowCase extends Component{
    state={
        dropCategories:categoriesList[0].id,
        itemsIndex:[],
        status:apiStatusConstans.initial
    }

    componentDidMount(){
        this.getDataItems()
    }

    getDataItems=async()=>{
        const {dropCategories}=this.state
        this.setState({status:apiStatusConstans.inProgress})
        
        const options={
            method:"GET"
        }
        const response=await fetch(`https://apis.ccbp.in/ps/projects?category=${dropCategories}`, options)
        
        const data=await response.json()
        if(response.ok===true){
            const updateDaa=data.projects.map(demo=>({
                id:demo.id,
                name:demo.name,
                imageUrl:demo.image_url
            }))
            this.setState({itemsIndex:updateDaa, status:apiStatusConstans.sucess})
        }else{
            this.setState({status:apiStatusConstans.failure})
        }  
    }

    renderSuccess=()=>{
        const {itemsIndex} = this.state
        console.log(itemsIndex)
        return(
            <ul className="containers">
                {itemsIndex.map((demo)=>(
                        <li key={demo.id}>
                            <img className="projectImages" src={demo.imageUrl} alt={demo.name}/>
                            <h1>{demo.name}</h1>
                        </li>
                    ))}  
            </ul>
        )
    }

    renderFailure=()=>{
        return(
            <div>
                <img src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
                alt="failure view"/>
                <h1>Oops! Something Went Wrong</h1>
                <p>we</p>
                <button onClick={this.getDataItems}></button>
            </div>
        )
    }

    renderInProgetss=()=>{
        return(
            <div data-testid="loader">
                <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
            </div>
        )
    }

    renderShow=()=>{
        const {status}=this.state
        switch(status){
            case apiStatusConstans.sucess:
                return this.renderSuccess()
            case apiStatusConstans.failure:
                return this.renderFailure()
            case apiStatusConstans.inProgress:
                return this.renderInProgetss()
            default:
                return null            
        }
    }

    onChangeSelect=(event)=>{
        this.setState({dropCategories:event.target.value}, this.getDataItems)
    }

    render(){
        const {dropCategories}=this.state
        console.log(dropCategories)
        return(
            <div>
                <div>
                    <img className="images"
                    src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
                    alt="website logo"/>
                </div>
                <select onChange={this.onChangeSelect} value={dropCategories}>
                    {categoriesList.map((demo)=>(
                        <option key={demo.id} value={demo.id}>
                            {demo.displayText}
                        </option>
                    ))}                   
                </select>
                {this.renderShow()}
            </div>
        )
    }
}
export default ProjectShowCase