// import React from 'react'
import Cookies from "js-cookie";
import { Link, withRouter } from "react-router-dom"

const Header = (props) => {
    const onClickEvent = () => {
        const { history } = props
        Cookies.remove("jwt_token");
        history.replace("/login")
    }
    return (
        <nav>
            <div>
                <img className="website-logo"
                    src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                    alt="website logo" />
                    <ul>
                <Link to="/">
                    <li>Home </li>
                </Link>
                <Link to="/jobs">
                    <li>Jobs</li>
                </Link>
                <button type="button" onClick={onClickEvent}>logout</button>
            </ul>
            </div>
        </nav>
    )
}

export default withRouter(Header)
