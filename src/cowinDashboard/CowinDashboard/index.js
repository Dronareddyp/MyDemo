// Write your code here
import {Component} from 'react'
import VaccinationByAge from "../VaccinationByAge"
import VaccinationCoverage from "../VaccinationCoverage"
import VaccinationByGender from "../VaccinationByGender"

import "./index.css"
import Loader from 'react-loader-spinner'

const apiStatusConstant={
  initial:"INITIAL",
  success:"SUCCESS",
  failure:"FAILURE",
  inProgress:'IN_PROGRESS',
}
class CowinDashboard extends Component {
  state = {
    dataChart: {},
    apiStatus:apiStatusConstant.initial
  }

  componentDidMount() {
    this.getData()
  }
  getData = async () => {
    this.setState({
      apiStatus:apiStatusConstant.inProgress
    }) 
    const response = await fetch(
      'https://apis.ccbp.in/covid-vaccination-data')
    if(response.ok){
      const data =await response.json()
      const updateData={
      last7DayVaccination: data.last_7_days_vaccination.map((demo)=>({
        vaccineDate:demo.vaccine_date,
        dose1:demo.dose_1,
        dose2:demo.dose_2
      })), 
      vaccinationByAge:data.vaccination_by_age.map((demo)=>({
        age:demo.age,
        count:demo.count
      })),
      vaccinationByBender:data.vaccination_by_gender.map((demo)=>({
        count:demo.count,
        gender:demo.gender
      }))
      }
      this.setState({
      dataChart: updateData,
      apiStatus:apiStatusConstant.success
    })
    }else{
      this.setState({
        apiStatus:apiStatusConstant.failure
      })
    }  
  }
  renderVaccination7dayaSuccess=()=>{
    const {dataChart}=this.state
    return(
      <>
      <VaccinationCoverage 
      vaccinationCoverageDetails={dataChart.last7DayVaccination}/>
       <VaccinationByGender 
      vaccinationByGender={dataChart.vaccinationByBender}/>
      <VaccinationByAge 
      vaccinationAgeDetails={dataChart.vaccinationByAge}/>
     
      </>
    )
  }
  renderVaccinationFailure=()=>{
    return(
      <div>
        <img src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png" 
        alt="failure view"/>
        <h1>Something went wrong</h1>
      </div>
    )
  }
  renderVaccinationInProgress=()=>{
    return(
      <div data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
      </div>
    )
  }
  vaccinationDataRecived=()=>{
    const {apiStatus}=this.state
    switch(apiStatus){
      case apiStatusConstant.success:
        return this.renderVaccination7dayaSuccess()
      case apiStatusConstant.failure:
        return this.renderVaccinationFailure()  
      case apiStatusConstant.inProgress:
        return this.renderVaccinationInProgress()  
      default:
        return null  
  }
}

  render() {
    
    return (
    <div className="containerEle">
      <div>
      <img className="imageLogo"
       src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png" alt="website logo"/>
       <h1>co-WIN</h1>
       </div>
       <h1>CoWIN Vaccination in India</h1>
       {this.vaccinationDataRecived()}
    </div>
    )
  }
}
export default CowinDashboard
