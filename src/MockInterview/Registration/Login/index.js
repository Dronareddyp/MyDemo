// import { Component } from "react"
import ResistationContext from "../../../Zcontext/ResistationContext"
import "./index.css"

const topicsList = [
    {
        id: 'ARTS_AND_CULTURE',
        displayText: 'Arts and Culture',
    },
    {
        id: 'CAREER_AND_BUSINESS',
        displayText: 'Career and Business',
    },
    {
        id: 'EDUCATION_AND_LEARNING',
        displayText: 'Education and Learning',
    },
    {
        id: 'FASHION_AND_BEAUTY',
        displayText: 'Fashion and Learning',
    },
    {
        id: 'GAMES',
        displayText: 'Games',
    },
]
const Login = (props) => (
    <ResistationContext.Consumer >
        {(value) => {
            const {
                name, 
                topicsLists,
                showError,
                registerName,
                updateErr,
                ChangeName,
                ChangeSelect,
            }=value
            console.log(name, topicsLists)

            const onSubmitForm = (event) => {
                event.preventDefault()
                
                if(name!=="" && topicsLists!==""){
                    const {history}=props
                    history.replace("/")
                    registerName()
                }else{
                    updateErr()
                }
               
            }

            const onChangeName = (event) => {
                ChangeName(event.target.value)
            }
            const onChangeSelect = (event) => {
                console.log()
                ChangeSelect(event.target.value)
            }

            return (
                <div>
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                        alt="website logo" />
                    <div className="loginContainer">
                        <div>
                            <img src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                                alt="website register" />
                        </div>
                        <form onSubmit={onSubmitForm}>
                            <h1>Let us join</h1>
                            <div>
                                <label htmlFor="name">NAME</label>
                                <input id="name" placeholder="Your name"
                                type="text" onChange={onChangeName} value={name} />
                            </div>
                            <div>
                                <label htmlFor="topics">TOPICS</label>
                                <select id="topics" onChange={onChangeSelect} value={topicsLists}>
                                    {
                                        topicsList.map((demo) => (
                                            <option key={demo.id} value={demo.id}>
                                                {demo.displayText}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button type="submit">Registret Now</button>
                            {showError===true?
                            <p>Please enter your name</p>:""

                            }
                        </form>
                    </div>

                </div>
            )

        }}
    </ResistationContext.Consumer>
)
export default Login