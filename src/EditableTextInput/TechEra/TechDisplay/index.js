import { Component } from "react"
import Loader from 'react-loader-spinner'
import Header from "../Header"

const initialStatus = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    inProgress: "IN_PROGRESS"
}
class TechDisplay extends Component {
    state = {
        status: initialStatus.initial,
        techData: []
    }

    componentDidMount(){
        this.onChangeContent()
    }
    onChangeContent = async () => {
        const { match } = this.props
        const { params } = match
        const { id } = params
        this.setState({ state: initialStatus.inProgress })

        const options = {
            method: "GET"
        }
        const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`, options)
        if (response.ok === true) {
            const data = await response.json()
            const updateData = [data.course_details].map((demo) => ({
                id: demo.id,
                name: demo.name,
                imageUrl: demo.image_url,
                description: demo.description
            }))
            this.setState({ techData: updateData, status: initialStatus.success })
        } else {
            this.setState({ status: initialStatus.failure })
        }
    }

    renderSuccess = () => {
        const { techData } = this.state
        console.log("techhhhhh", techData)
        return (
            <ul>
                {techData.map(demo => (
                    <li key={demo.id}>
                        <div>
                            <img src={demo.imageUrl} alt={demo.name} />
                        </div>
                        <div>
                            <h1>{demo.name}</h1>
                            <p>{demo.description}</p>
                        </div>
                    </li>
                ))

                }
            </ul>
        )
    }

    renderFailure = () => {
        return (
            <div>
                <img
                    src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
                    alt="failure view" />
                <h1>Oops! Somthing Went Wrong</h1>
                <p>We cannot seem to find you are looking for</p>
                <button type="button" onClick={this.onChangeContent}>Retry</button>
            </div>
        )
    }

    renderLoader = () => {
        return (
            <div data-testid="loader">
                <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
            </div>
        )
    }
    renderCourece=()=>{
        const {status}=this.state
        switch(status){
            case initialStatus.success:
                return this.renderSuccess()
            case initialStatus.failure:
                return this.renderFailure()
            case initialStatus.inProgress:
                return this.renderLoader()
            default:
                return null            
        }
    }

    render() {
        return (
            <div>
                <Header/>
                {this.renderCourece()}
            </div>
        )
    }
}
export default TechDisplay