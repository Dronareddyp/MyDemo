// import React from 'react'
import { Component } from "react"
import Cookies from "js-cookie"
import { AiFillStar } from "react-icons/ai"
import { MdLocationOn } from "react-icons/md"
import { BiLinkExternal } from "react-icons/bi"
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Header from "../Header"
// import Jobs from "../Jobs"

const apiStatusConstans = {
    initial: "INITIAL",
    sucess: "SUCCESS",
    failure: "FAILURE",
    inProgress: "IN_PROGRESS"
}
class JobItemDetails extends Component {
    state = {
        jsonData: [],
        similarJobsData: [],
        apiStatus: apiStatusConstans.initial
    }

    componentDidMount() {
        this.getDataJonItemDetails()
    }

    getDataJonItemDetails = async () => {
        const { match } = this.props
        const { params } = match
        const { id } = params

        this.setState({ apiStatus: apiStatusConstans.inProgress })
        const jwtToken = Cookies.get("jwt_token")
        const options = {
            headers: { Authorization: `Bearer ${jwtToken}` },
            method: "GET"
        }
        const response = await fetch(`https://apis.ccbp.in/jobs/${id}`, options)
        
        if (response.ok === true) {
            const data = await response.json()
            console.log(data)
            const updateJobDetailsData = [data.job_details].map((demo) => ({
                companyLogoUrl: demo.company_logo_url,
                companyWebsiteUrl: demo.company_website_url,
                employmentType: demo.employment_type,
                id: demo.id,
                jobDescription: demo.job_description,
                skills: demo.skills.map((skill) => ({
                    imageUrl: skill.image_url,
                    name: skill.name
                })),
                lifeAtCompany: {
                    description: demo.life_at_company.description,
                    imageUrl: demo.life_at_company.image_url
                },
                location: demo.location,
                packagePerAnnum: demo.package_per_annum,
                rating: demo.rating,
                // title:demo.title

            }))
            const updateSimilarJobDetails = data.similar_jobs.map((demo1) => ({
                companyLogoUrl: demo1.company_logo_url,
                employmentType: demo1.employment_type,
                id: demo1.id,
                jobDescription: demo1.job_description,
                location: demo1.location,
                rating: demo1.rating,
                title: demo1.title
            }))
            this.setState({
                jsonData: updateJobDetailsData,
                similarJobsData: updateSimilarJobDetails,
                apiStatus: apiStatusConstans.sucess
            })
        } else {
            this.setState({
                apiStatus: apiStatusConstans.failure
            })
        }
    }

    renderDetatileSuccess = () => {
        const { jsonData, similarJobsData } = this.state
        if (jsonData.length >= 1) {
            const {
                companyLogoUrl,
                companyWebsiteUrl,
                employmentType,
                // id,
                jobDescription,
                skills,
                lifeAtCompany,
                location,
                packagePerAnnum,
                rating,
                title
            } = jsonData[0]


            return (
                <>
                    <div>
                        <div>
                            <div>
                                <img src={companyLogoUrl} alt="job details company logo" />
                                <div>
                                    <h1>{title}</h1>
                                    <div>
                                        <AiFillStar className="" />
                                        <p>{rating}</p>
                                    </div>
                                </div>
                                <div>
                                    <MdLocationOn />
                                    <p>{location}</p>
                                </div>
                                <div>
                                    <p>{employmentType}</p>
                                </div>
                                <div>
                                    <p>{packagePerAnnum}</p>
                                </div>
                            </div>

                        </div>

                        <hr />
                        <div>
                            <div>
                                <h1>Description</h1>
                                <a href={companyWebsiteUrl}>Visit <BiLinkExternal /></a>
                            </div>
                            <p>{jobDescription}</p>
                        </div>
                        <h1>Skills</h1>
                        <ul>
                            {
                                skills.map((demo) => (
                                    <li key={demo.name}>
                                        <img src={demo.imageUrl} alt={demo.name} />
                                    </li>
                                ))
                            }
                        </ul>
                        <h1>Life at Company</h1>
                        <div>
                            <p>{lifeAtCompany.description}</p>
                            <img src={lifeAtCompany.imageUrl} alt="life at company" />
                        </div>
                    </div>
                    <h1>Similer Jobs</h1>
                    <ul>
                        {similarJobsData.map((demo) => {
                            return (
                                <li key={demo.id}>
                                    <div>
                                        <img src={demo.companyLogoUrl} alt="similar job company logo" />
                                        <div>
                                            <h1>{demo.title}</h1>
                                            <AiFillStar />
                                            <p>{demo.rating}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h1>Description</h1>
                                            <p>{demo.jobDescription}</p>
                                        </div>
                                        <div>
                                            <MdLocationOn />
                                            <p>{demo.location}</p>
                                        </div>
                                        <div>
                                            {demo.employmentType}
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                        }
                    </ul>
                </>
            )
        }
        return null
    }

    errorRenderClick = () => {
        this.getDataJonItemDetails()
    }

    renderJobsDetailsFilures = () => {
        return (
            <div>
                <img src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
                    alt="failure view" />
                <h1>Oops! Something Went Wrong</h1>
                <p>We cannot seem to find the page you are looking for.</p>
                <button type="button" onClick={this.errorRenderClick}>Retry</button>

            </div>
        )
    }


    renderLoderData = () => {
        return (
            <div className="loader-container" data-testid="loader">
                <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
            </div>
        )
    }

    renderJobdetails = () => {
        const { apiStatus } = this.state
        switch (apiStatus) {
            case apiStatusConstans.sucess:
                return this.renderDetatileSuccess()
            case apiStatusConstans.failure:
                return this.renderJobsDetailsFilures()
            case apiStatusConstans.inProgress:
                return this.renderLoderData()
            default:
                return null
        }
    }

    render() {
        return (
            <div>
                <Header />
                {this.renderJobdetails()}

            </div>
        )
    }
}
export default JobItemDetails
