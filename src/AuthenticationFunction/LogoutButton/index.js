import {withRouter} from "react-router-dom"
import Cookies from "js-cookie"
const LogoutButton =(props)=>{

    const logOutClick=()=>{
        Cookies.remove("jwt_token") 
        const { history } = props;
        history.replace("/login");
    }
    
    return(
        <div>
            <button type="button" onClick={logOutClick}>Logout</button>
        </div>
    )

}
export default withRouter(LogoutButton)