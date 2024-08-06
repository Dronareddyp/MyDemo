import "./index.css"
import { Link, withRouter } from "react-router-dom"

const Header=()=>{
    return(
        <div>
            <Link to="/">
                <img className="images"
                src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png" alt=""/>
            </Link>
        </div>
    )
}
export default withRouter(Header)