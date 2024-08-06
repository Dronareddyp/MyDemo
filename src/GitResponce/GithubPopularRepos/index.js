import {Component} from "react"
import LanguageFilterItem from "../LauguageFilterItem"
import RipostitoryItem from "../RipositoryItem"
// import Loader from 'react-loader-spinner'

const languageStatus={
    initial:"INITIAL",
    success:"success",
    failure:"FAILURE",
    inProgress:"IN_PROGRESS"
}
const languageFiltersData = [
    {id: 'ALL', language: 'All'},
    {id: 'JAVASCRIPT', language: 'Javascript'},
    {id: 'RUBY', language: 'Ruby'},
    {id: 'JAVA', language: 'Java'},
    {id: 'CSS', language: 'CSS'},
  ]
  
  // Write your code here
  
class GithubPopularRepos extends Component{
    state={
        languageId:languageFiltersData[0].id,
        getAllData:[],
        isTrue:languageStatus.initial
    }

    componentDidMount(){
        this.getDataOfPapular()
    }
    getDataOfPapular=async()=>{
        const {languageId}= this.state

        this.setState({isTrue:languageStatus.inProgress})
        const options={
            method:"GET"
        }
        const response= await fetch(`https://apis.ccbp.in/popular-repos?language=${languageId}`, options)
        if(response.ok===true){
            const data=await response.json()
            const updataData=data.popular_repos.map((demo)=>({
                avatarUrl:demo.avatar_url,
                forksCount:demo.forks_count,
                id:demo.id,
                issuesCount:demo.issues_count,
                name:demo.name,
                starsCount:demo.stars_count
    
        }))
        console.log("drons",response)
        this.setState({getAllData:updataData, isTrue:languageStatus.success}
            )
        }else{
            this.setState({isTrue:languageStatus.failure})
        }
    }

    setActiveDetails=(id)=>{
        this.setState({languageId:id}, this.getDataOfPapular)
    }

    renderLoading=()=>(
        <div><h1>...Loading</h1></div>
    )
    renderFailures=()=>(
        <div>
            <img src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png" 
            alt="failure view"/>
            <h1>Something Went  Wrong </h1>
        </div>
    )
    renderSuccess=()=>{
        const {getAllData} =this.state
        return (
            <ul>   
                {getAllData.map((demo)=>(
                    <RipostitoryItem key={demo.id} getData={demo} />
                ))}  
                </ul>
        )
    }

    renderRepresentiativeListView=()=>{
        const {isTrue} = this.state
        switch(isTrue){
            case languageStatus.success:
                return this.renderSuccess()
            case languageStatus.failure:
                return this.renderFailures()
            case languageStatus.inProgress:
                return this.renderLoading() 
            default:
                return null           
        }
    }

    renderLanguageFilterId=()=>{
        const {languageId} =this.state
        return(
            <div>
            <h1>Papular</h1>
            <ul>
                {languageFiltersData.map((demo)=>(
                    // <li key={demo.id}>{demo.language}</li>
                    <LanguageFilterItem key={demo.id} 
                    isActive={demo.id===languageId}
                    getData={demo} setActiveDetail={this.setActiveDetails}/>
                ))}
            </ul>
        </div>
        )

    }

    render(){
        const {getAllData, languageId} =this.state
        console.log("ggg",languageId ,getAllData)
        return(
            <div>
                <h1>Papular</h1>
                {this.renderLanguageFilterId()}
                {this.renderRepresentiativeListView()}  
            </div>
        )
    }
}
export default GithubPopularRepos