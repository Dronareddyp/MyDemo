import Header from "../Header"
import {Link} from "react-router-dom"

const Home=(props)=>{
    const onClickHomeJob=()=>{
        const {history}=props
        history.push("/jobs")
    }

    return (
        <div>
            <Header/>
            <div>
                <h1>Find The Job That Fits YourLife</h1>  
                <p>Millions of pepole are searching for jobs, salary information, company reviews.Find the job
                    that fits your abilities and potential
                </p>
                <Link to="/jobs">
                <button type="button" onClick={onClickHomeJob}>Find Jobs</button>
                </Link>
                </div>          
        </div>
    )
}

export default Home
