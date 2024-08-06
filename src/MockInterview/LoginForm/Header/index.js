import {Link, withRouter} from "react-router-dom"
import Cookies from "js-cookie"

const Header=(props)=>{
    const onClickHomeJob=()=>{
        const { history } = props
        Cookies.remove("jwt_token")
        history.replace("/ebank/login")
    }
    return(
        <div>
            <Link to="/" className="link-el">
            <img 
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"/>
            </Link>
            <button onClick={onClickHomeJob}>Logout</button>

        </div>
    )
}
export default withRouter(Header)