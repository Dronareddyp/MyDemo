// import React from 'react'
import {Component} from "react"
import JobCardItem from "../JobCardItem"
import {AiOutlineSearch} from "react-icons/ai"
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Cookies from "js-cookie"
// import { BsNutFill } from "react-icons/bs"
import Header from "../Header"
 
const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const apiStatusConstans={
    initial:"INITIAL",
    success:"SUCCESS",
    failure:"FAILURE",
    inProgress:"IN_PROGRESS"
}
class Jobs extends Component{
    state={
        jobCheckBoxDetals:[],
        aciveCheckBox:[],
        profileDetails:{},
        searchInput:'',
        getSearchDetals:apiStatusConstans.initial,
        apiStatusJob:apiStatusConstans.initial,
        activeSalaryRangeId:'',

    }

    componentDidMount(){
        this.getProfileData()
        this.getJobData()
    }
    getProfileData=async()=>{
        this.setState({
            apiStatusJob:apiStatusConstans.inProgress
        })
        const jwtToken=Cookies.get("jwt_token")
        const options={
            method:"GET",
            headers:{ Authorization: `Bearer ${jwtToken}` },
        }
        const response=await fetch("https://apis.ccbp.in/profile", options)
        if(response.ok===true){
            const data= await response.json()
            const demo=data.profile_details
            const updateFilteProgile={
                name:demo.name,
                profileImageUrl:demo.profile_image_url,
                shortBio:demo.short_bio
            }
            this.setState({
                apiStatusJob:apiStatusConstans.success, 
                profileDetails:updateFilteProgile         
            })
        }else{
            this.setState({
            apiStatusJob:apiStatusConstans.failure
            })
        }
    }

    getJobData=async()=>{
        const {activeSalaryRangeId, aciveCheckBox, searchInput}=this.state
        this.setState({
            getSearchDetals:apiStatusConstans.inProgress
        }) 
        const jwtToken=Cookies.get("jwt_token")
        const options={
            method:"GET",
            headers: {Authorization: `Bearer ${jwtToken}`} 
        }
        const type=aciveCheckBox.join(',')
        const response = await fetch(`https://apis.ccbp.in/jobs?employment_type=${type}&minimum_package=${activeSalaryRangeId}&search=${searchInput}`,options)
        if(response.ok===true){
            const data=await response.json()
            const updateDataCheckBox=data.jobs.map((demo)=>({
                companyLogoUrl:demo.company_logo_url,
                employmentType:demo.employment_type,
                id:demo.id,
                jobDescription:demo.job_description,
                location:demo.location,
                packagePerAnnum:demo.package_per_annum,
                rating:demo.rating,
                title:demo.title
            }))

            this.setState({
                getSearchDetals:apiStatusConstans.success,
                jobCheckBoxDetals:updateDataCheckBox
            })
        }else{
            this.setState({
                getSearchDetals:apiStatusConstans.failure
            })
        }
    }

    onChangeGet=(event)=>{
        this.setState({searchInput:event.target.value})
    }

    onEnterSearch=(event)=>{
        if(event.key==="Enter"){
            this.getJobData()
        }
    }
    onSubmitEvent=()=>{
        this.getJobData()
    }
    onClickCheck=(event)=>{
        const {aciveCheckBox}=this.state
        if(aciveCheckBox.includes(event.target.id)){
            const updateList=aciveCheckBox.filter((each)=>(
                each===event.target.id
            ))
            this.setState({aciveCheckBox:updateList}, this.getJobData)
        }else{
            this.setState(prevent=>({aciveCheckBox:[...prevent.aciveCheckBox, event.target.id]}),this.getJobData)
        }
    }

    onChangeRangeId=(event)=>{
        this.setState({activeSalaryRangeId:event.target.id}, this.getJobData)
    }

    onSuccessProfile=()=>{
        const {profileDetails} =this.state
        const {name, profileImageUrl, shortBio}=profileDetails
        return(
            <div>
                <img src={profileImageUrl} alt="profile"/>
                <h1>{name}</h1>
                <p>{shortBio}</p>
            </div>
        )
    }
    onSuccessCheckBox=()=>{
        const {jobCheckBoxDetals}=this.state
        const noOfJobs=jobCheckBoxDetals.length>0
        return noOfJobs?(
            <ul>
                {jobCheckBoxDetals.map((demo)=>(
                        <JobCardItem key={demo.id} jobDetails={demo}/>
                ))}
            </ul>
        ):(
            <div>
                <img src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png" alt="no jobs"/>
                <h1>No jobs found</h1>
                <p>We could not find any jobs. Try other filters.</p>
            </div>
        )
    }

    onRetryProfile=()=>this.getProfileData()
    onRetryJobs=()=>this.getJobData()

    onFailProfileReviwe=()=>(
        <>
        <h1>Profile Fail</h1>
        <button type="button" onClick={this.onRetryProfile}>Retry</button>
        </>
    )

    onFailJobsView=()=>(
        <>
        <div>
            <img src="https://assets.ccbp.in/frontend/react-js/failure-img.png" alt="failure view"/>
            <h1>Oops! Something Went Wrong</h1>
            <p>we cannot seem to find the page you are looking for </p>
            <div>
                <button type="button" onClick={this.onRetryJobs}></button>
            </div>
        </div>
        </>
    )

    renderLoderData = () => {
        return (
            <div className="loader-container" data-testid="loader">
                <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
            </div>
        )
    }

    onCheckBoxInput=()=>{      
        return(
            <ul>
                {employmentTypesList.map((demo)=>(
                <li key={demo.employmentTypeId}>
                <input type="checkbox" id={demo.employmentTypeId} onChange={this.onClickCheck}/>
                <label htmlFor={demo.employmentTypeId}>{demo.label}</label>
                </li>
                ))
                }
            </ul>
        )
    }

    onRadioButtonText=()=>{
        return(
            <ul>
                {salaryRangesList.map((demo)=>(
                    <li key={demo.salaryRangeId}>
                        <input type="radio" id={demo.salaryRangeId} 
                        onChange={this.onChangeRangeId}/>
                        <label htmlFor={demo.salaryRangeId}>{demo.label}</label>
                    </li>
                ))
                }
            </ul>
        )
    }

    onRangeJobProfile=()=>{
        const {apiStatusJob}=this.state
        switch(apiStatusJob){
            case apiStatusConstans.success:
                return this.onSuccessProfile()
            case apiStatusConstans.inProgress:
                return this.onFailProfileReviwe()
            case apiStatusConstans.failure:
                return this.renderLoderData()
            default:
                return null            
        }
    }

    onRangeJobDetailCheck=()=>{
        const {getSearchDetals}= this.state
        switch(getSearchDetals){
            case apiStatusConstans.success:
                return this.onSuccessCheckBox()
            case apiStatusConstans.failure:
                return this.onFailJobsView()
            case apiStatusConstans.inProgress:
                return this.renderLoderData()
            default:
                return null           

        }
    }

    onRenderSearch=()=>{
        const {searchInput}=this.state
        return(
            <>
            <input type="text"
            onChange={this.onChangeGet} 
            onKeyDown={this.onEnterSearch}
             value={searchInput} />
            <button type="button" 
            data-testid="searchButton"
            onClick={this.onSubmitEvent}><AiOutlineSearch/> </button>
            </>
        )
    }


    render(){
    return (
        <div>
            <Header/>
              <div>{this.onRenderSearch()}</div> 
              <div>
                  {this.onRangeJobProfile()}
                  <hr/>
                  <h1>Type of Employment</h1>
                  {this.onCheckBoxInput()}
                  <hr/>
                  <h1>Salary Range</h1>
                  {this.onRadioButtonText()}
              </div> 
              <div>
                  <div>{this.onRenderSearch()}</div>
                  {this.onRangeJobDetailCheck()}
            </div>        
        </div>
    )
    }
}

export default Jobs
