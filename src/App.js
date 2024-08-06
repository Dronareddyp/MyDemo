// import './App.css';
// import React from "react"
// import Home from "./Component/Home"

// const destinationsList = [
//     {
//       id: 1,
//       name: 'Melaka Mosque',
//       imgUrl: 'https://assets.ccbp.in/frontend/react-js/melaka-mosque-img.png',
//     },
//     {
//       id: 2,
//       name: 'Shrubland',
//       imgUrl: 'https://assets.ccbp.in/frontend/react-js/shrubland-img.png',
//     },
//     {
//       id: 3,
//       name: 'New York',
//       imgUrl: 'https://assets.ccbp.in/frontend/react-js/new-york-img.png',
//     },
//     {
//       id: 4,
//       name: 'Escarpment',
//       imgUrl: 'https://assets.ccbp.in/frontend/react-js/escarpment-img.png',
//     },
//     {
//       id: 5,
//       name: 'Westminster Abbey',
//       imgUrl:
//         'https://assets.ccbp.in/frontend/react-js/westminster-abbey-img.png',
//     },
//     {
//       id: 6,
//       name: 'South Downs National Park',
//       imgUrl:
//         'https://assets.ccbp.in/frontend/react-js/south-downs-national-park-img.png',
//     },
//     {
//       id: 7,
//       name: 'National Historic Site',
//       imgUrl:
//         'https://assets.ccbp.in/frontend/react-js/national-historic-site-img.png',
//     },
//     {
//       id: 8,
//       name: 'Tower Bridge',
//       imgUrl: 'https://assets.ccbp.in/frontend/react-js/tower-bridge-img.png',
//     },
//     {
//       id: 9,
//       name: 'Arc Here',
//       imgUrl: 'https://assets.ccbp.in/frontend/react-js/arc-here-img.png',
//     },
//     {
//       id: 10,
//       name: 'Steeple',
//       imgUrl: 'https://assets.ccbp.in/frontend/react-js/steeple-img.png',
//     },
//     {
//       id: 11,
//       name: 'Glaciokarst',
//       imgUrl: 'https://assets.ccbp.in/frontend/react-js/glaciokarst-img.png',
//     },
//     {
//       id: 12,
//       name: 'Parco Nazionale delle Cinque Terre',
//       imgUrl:
//         'https://assets.ccbp.in/frontend/react-js/parco-nazionale-delle-cinque-terre-img.png',
//     },
//   ]
// function App() {
//     return ( 
//     <div><Home destinationsList={destinationsList} /> </div>
//     )

// }

// export default App;

// import CashWithdrawal from './CashWithDraw/CashWithdrawal'

// import './App.css'

// const denominationsList = [
//   {
//     id: 1,
//     value: 50,
//   },
//   {
//     id: 2,
//     value: 100,
//   },
//   {
//     id: 3,
//     value: 200,
//   },
//   {
//     id: 4,
//     value: 500,
//   },
// ]

// const App = () => <CashWithdrawal denominationsList={denominationsList} />

// export default App


// import GoogleSuggestions from './GoogleSearch/GoogleSuggestions'

// import './App.css'

// const suggestionsList = [
//   {id: 1, suggestion: 'Price of Ethereum'},
//   {id: 2, suggestion: 'Oculus Quest 2 specs'},
//   {id: 3, suggestion: 'Tesla Share Price'},
//   {id: 4, suggestion: 'Price of Ethereum today'},
//   {id: 5, suggestion: 'Latest trends in AI'},
//   {id: 6, suggestion: 'Latest trends in ML'},
// ]

// const App = () => <GoogleSuggestions suggestionsList={suggestionsList} />

// export default App

// import LettersCalculator from './LettersCalculator'

// import './App.css'

// const App = () => <LettersCalculator />

// export default App


// import './App.css'
// import { Component } from "react"
// // These are the list used in the application. You can move them to any component needed.
// const initialHistoryList = [
//     {
//         id: 0,
//         timeAccessed: '07:45 PM',
//         logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
//         title: 'Instagram',
//         domainUrl: 'instagram.com',
//     },
//     {
//         id: 1,
//         timeAccessed: '05:45 PM',
//         logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
//         title: 'Twitter. It’s what’s happening / Twitter',
//         domainUrl: 'twitter.com',
//     },
//     {
//         id: 2,
//         timeAccessed: '04:35 PM',
//         logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
//         title: 'Facebook – log in or sign up',
//         domainUrl: 'facebook.com',
//     },
//     {
//         id: 3,
//         timeAccessed: '04:25 PM',
//         logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
//         title: 'LinkedIn: Log In or Sign Up',
//         domainUrl: 'linkedin.com',
//     },
//     {
//         id: 4,
//         timeAccessed: '04:00 PM',
//         logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
//         title: 'Hashnode: Everything you need to start blogging as a developer!',
//         domainUrl: 'hashnode.com',
//     },
//     {
//         id: 5,
//         timeAccessed: '03:25 PM',
//         logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
//         title: 'GitHub: Where the world builds software · GitHub',
//         domainUrl: 'github.com',
//     },

//     {
//         id: 6,
//         timeAccessed: '02:45 PM',
//         logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
//         title: 'React – A JavaScript library for building user interfaces',
//         domainUrl: 'reactjs.org',
//     },
//     {
//         id: 7,
//         timeAccessed: '01:25 PM',
//         logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
//         title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
//         domainUrl: 'stackoverflow.com',
//     },

//     {
//         id: 8,
//         timeAccessed: '09:25 AM',
//         logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
//         title: 'Gmail',
//         domainUrl: 'mail.google.com',
//     },
//     {
//         id: 9,
//         timeAccessed: '09:00 AM',
//         logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
//         title: 'Google',
//         domainUrl: 'google.com',
//     },
// ]

// // Replace your code here
// class App extends Component {
//     state = {
//         searchInput: "",
//         initialDetals: initialHistoryList,
//         isTrue:false
//     }

//     onChangeEvent = event => {
//         this.setState({ searchInput: event.target.value })
//     }
//     onDelete = id => {
        
//         const { initialDetals,isTrue } = this.state
//         const delteContent = initialDetals.filter(del => del.id !== id)
//         console.log(delteContent)
//         if(delteContent.length===0){
//             this.setState(({initialDetals:delteContent, isTrue:true}))
//         }else{
//             this.setState({
//                 initialDetals: delteContent
//             })
//         }
        
//     }

//     render() {
//         const { searchInput } = this.state
//         let {isTrue}=this.state
//         const { initialDetals } = this.state
//         const getNameDetals = initialDetals.filter(each =>
//             each.domainUrl.includes(searchInput),
//         )
//         if(getNameDetals.length===0){
//             isTrue=true
//           }
//         return (
//             <div>

//                 <div className="header">
//                     <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" 
//                     alt="app logo" />
//                     <div>
//                         <img src="https://assets.ccbp.in/frontend/react-js/search-img.png" alt="search" />
//                         <input type="search" onChange={this.onChangeEvent} value={searchInput} />
//                     </div>

//                 </div>
//                 {!isTrue&&(
//                 <div className="bodyCard">
//                     <ul className="listItemd">
//                         {getNameDetals.map(demo => (
//                             <li key={demo.id}>
//                                 <p>{demo.timeAccessed}</p>
//                                 <img src={demo.logoUrl} alt={demo.title} />
//                                 <p>{demo.title} {demo.domainUrl}</p>
//                                 <button data-testid ="delete" onClick={()=>{this.onDelete(demo.id)}}>
//                                 <img
//                                     src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
//                                     alt="delete"
//                                 />
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 )}
//                 {isTrue&&(
//                 <div className="bodyCard">
//                     <p>There is no history to show</p>
//                 </div>
//                 )}


//             </div>

//         )
//     }

// }

// export default App


// import FruitsCounter from './Fruite'

// import './App.css'

// const App = () => <FruitsCounter />

// export default App


// import Feedback from './Feedback'

// import './App.css'

// const resources = {
//   emojis: [
//     {
//       id: 0,
//       name: 'Sad',
//       imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
//     },
//     {
//       id: 1,
//       name: 'None',
//       imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
//     },
//     {
//       id: 2,
//       name: 'Happy',
//       imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
//     },
//   ],
//   loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
// }

// const App = () => <Feedback resources={resources} />

// export default App

// import {Component} from 'react'


// class App extends Component {
//   state={
//     isActive:true
//   }
//   onChangeValue=()=>{
//     this.setState((prove)=>({isActive:!prove.isActive}))
//   }

//   render(){
//     const {isActive}=this.state
//     const buttonEle=isActive?"True":"False"
//     return(
//       <div>
//         <h1>{buttonEle}</h1>
//         <button onClick={this.onChangeValue}>Click</button>
//       </div>

//     )
//   }
// }

// export default App

// import DeleteE from './Delete'

// import './App.css'
// import {Component} from 'react'

// const tabsList = [
//     {tabId: 'STATIC', displayText: 'Static'},
//     {tabId: 'RESPONSIVE', displayText: 'Responsive'},
//     {tabId: 'DYNAMIC', displayText: 'Dynamic'},
//   ]

// class App extends Component {
//   state = {
//     activeTabId: tabsList[0].tabId,
//   }

//   clickTabItem = tabValue => {
//     this.setState({activeTabId: tabValue})
//   }

  
//   render(){
//     const {activeTabId} = this.state
//     console.log(activeTabId)
//     return(
//       <div>
//         {
//           tabsList.map((tabDelete)=>(
//             <DeleteE key={tabDelete.tabId} activeTabId={tabDelete} clickTabItem={this.clickTabItem}/>
//           ))
//         }
      
//       </div>
//     )
//   }

// }
// export default App

// import Gallery from './GallaryE/Gallery/'

// import './App.css'

// const App = () => <Gallery />

// export default App

// import Capitals from './Capitals'

// import './App.css'

// const App = () => <Capitals />

// export default App


// import AppStore from './AppStoreComponent/AppStore'

// import './App.css'

// const App = () => <AppStore />

// export default App

// import CoinToss from './CoinToss'

// import './App.css'

// const App = () => <CoinToss />

// export default App

/////////////////////////////////////////////

// import ReviewsCarousel from './ReviewsCarousel'

// import './App.css'

// const reviewsList = [
//   {
//     imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
//     username: 'Wade Warren',
//     companyName: 'Rang',
//     description:
//       'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
//   },
//   {
//     imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
//     username: 'Adrian Williams',
//     companyName: 'WheelO',
//     description:
//       'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
//   },
//   {
//     imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
//     username: 'Sherry Johnson',
//     companyName: 'MedX',
//     description:
//       'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
//   },
//   {
//     imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
//     username: 'Ronald Jones',
//     companyName: 'Infinos Tech',
//     description:
//       'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
//   },
// ]

// const App = () => <ReviewsCarousel reviewsList={reviewsList} />

// export default App

// import Comments from './CommentsInput/Comments'

// import './App.css'

// const App = () => <Comments />

// export default App

// import Appointments from './AppointmentsTimeTitle/Appointments'

// import './App.css'

// const App = () => <Appointments />

// export default App

// import MoneyManager from './MoneyManagerTrasection/MoneyManager'

// import './App.css'

// const App = () => <MoneyManager />

// export default App

// import EmojiGame from './EmojiGameWonOrLoss/EmojiGame'

// import './App.css'

// const emojisList = [
//   {
//     id: 0,
//     emojiName: 'Face with stuck out tongue',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
//   },
//   {
//     id: 1,
//     emojiName: 'Face with head bandage',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
//   },
//   {
//     id: 2,
//     emojiName: 'Face with hugs',
//     emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
//   },
//   {
//     id: 3,
//     emojiName: 'Face with laughing',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
//   },
//   {
//     id: 4,
//     emojiName: 'Laughing face with hand in front of mouth',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
//   },
//   {
//     id: 5,
//     emojiName: 'Face with mask',
//     emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
//   },
//   {
//     id: 6,
//     emojiName: 'Face with silence',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
//   },
//   {
//     id: 7,
//     emojiName: 'Face with stuck out tongue and winked eye',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
//   },
//   {
//     id: 8,
//     emojiName: 'Grinning face with sweat',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
//   },
//   {
//     id: 9,
//     emojiName: 'Smiling face with heart eyes',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
//   },
//   {
//     id: 10,
//     emojiName: 'Grinning face',
//     emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
//   },
//   {
//     id: 11,
//     emojiName: 'Smiling face with star eyes',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
//   },
// ]

// const App = () => <EmojiGame emojisList={emojisList} />

// export default App

// import StopWatch from "./StopWatch"

// const App = () => <StopWatch/>

// export default App 

// import DigitalTimer from "./DigitalTimer"

// const App = () => <DigitalTimer/>

// export default App 


// import Faqs from './FaqsComponent/Faqs'

// import './App.css'

// const faqsList = [
//   {
//     id: 0,
//     questionText: 'What is IRC?',
//     answerText:
//       'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
//   },
//   {
//     id: 1,
//     questionText: 'What is the medium of instruction?',
//     answerText:
//       'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
//   },
//   {
//     id: 2,
//     questionText:
//       'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
//     answerText:
//       'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
//   },
//   {
//     id: 3,
//     questionText: 'How will my doubts be cleared? What is the mechanism?',
//     answerText:
//       'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',
//   },
// ]

// const App = () => <Faqs faqsList={faqsList} />

// export default App

// import PasswordManager from "./PasswordManager"

// const App = () => <PasswordManager/>

// export default App 

// import MatchGame from "./MatchGame"

// const App = () => <MatchGame/>

// export default App 


// import { Route, Switch } from 'react-router-dom'

// import LoginForm from "./Authentication/LoginForm"
// import Home from "./Authentication/Home"
// import NotFound from "./Authentication/NotFound"
// import './App.css'

// const App = () => (
//   <Switch>
//     <Route exact path="/login" component={LoginForm} />
//     <Route exact path="/" component={Home} />
//     <Route component={NotFound} />
//   </Switch>
// )

// export default App

// import RegistrationForm from './RegistrationForm'
// import './App.css'

// const App = () => <RegistrationForm />

// export default App


// import { Route, Switch } from 'react-router-dom'

// import Home from "./AuthenticationFunction/Home"
// import About from "./AuthenticationFunction/About"
// import Login from "./AuthenticationFunction/Login"
// import NotFound from "./AuthenticationFunction/NotFound"
// import ProtectedRoute from "./AuthenticationFunction/ProtectedRoute"
// import './App.css'

// const App = () => (
//   <Switch>
//     <Route exact path="/login" component={Login} />
//     <ProtectedRoute exact path="/" component={Home} />
//     <ProtectedRoute exact path="/about" component={About}/>
//     <Route component={NotFound} />
//   </Switch>
// )

// export default App

// import Events from "./EventComp/Events"
// import "./index.css"

// const App=()=>{
//   return <Events />
// }
// export default App


// import './App.css'

// import GithubPopularRepos from './GitResponce/GithubPopularRepos'

// const App = () => <GithubPopularRepos />

// export default App

// import "./App.css"

// import CowinDashboard from "./cowinDashboard/CowinDashboard"

// const App=()=> <CowinDashboard/>

// export default App

// import TimelineView from './ccbpTimeline/TimelineView'

// import './App.css'

// const timelineItemsList = [
//   {
//     id: 'c6aad2fb-7673-45cf-9606-a335acc0cf4b',
//     categoryId: 'COURSE',
//     title: '10 DECEMBER 2020',
//     courseTitle: 'Static Website',
//     description:
//       'Build your own personal portfolio website and a website to host conferences and events.  Publish your website and share it with your friends, family and beyond.',
//     duration: '10 days',
//     tagsList: [
//       {
//         id: 'c31b2ad8-f766-11eb-9a03-0242ac130003',
//         name: 'HTML Elements',
//       },
//       {
//         id: 'c31b2d08-f766-11eb-9a03-0242ac130003',
//         name: 'Class Attribute',
//       },
//       {
//         id: 'c31b2dee-f766-11eb-9a03-0242ac130003',
//         name: 'Text Properties',
//       },
//       {
//         id: 'c31b2eb6-f766-11eb-9a03-0242ac130003',
//         name: 'Bootstrap',
//       },
//       {
//         id: 'c31b2f6a-f766-11eb-9a03-0242ac130003',
//         name: 'Box Properties',
//       },
//       {
//         id: 'c31b347e-f766-11eb-9a03-0242ac130003',
//         name: 'Layout',
//       },
//       {
//         id: 'c31b358c-f766-11eb-9a03-0242ac130003',
//         name: 'Flexbox',
//       },
//     ],
//   },
//   {
//     id: 'a19d93d6-bdac-479e-b554-974ef9e6e66c',
//     categoryId: 'PROJECT',
//     title: '21 DECEMBER 2020',
//     projectTitle: 'Tourism Website',
//     description:
//       'A tourism website enables the user to browse through the images of popular destinations.',
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
//     duration: '1 hr',
//     projectUrl: 'https://tourismapp.ccbp.tech/',
//   },
//   {
//     id: '40b82899-fdf7-4a3e-a43a-41a9917b4582',
//     categoryId: 'COURSE',
//     title: '5 JANUARY 2021',
//     courseTitle: 'Responsive Website',
//     description:
//       'Build a responsive website that appears beautifully on the screen of any size. Develop a personal portfolio website, an E-commerce product listing website and a website to host conferences and events.',
//     duration: '12 days',
//     tagsList: [
//       {
//         id: '551e2b7e-f767-11eb-9a03-0242ac130003',
//         name: 'Responsive Web Design',
//       },
//       {
//         id: '551e2de0-f767-11eb-9a03-0242ac130003',
//         name: 'Multiple Layouts',
//       },
//       {
//         id: '551e3114-f767-11eb-9a03-0242ac130003',
//         name: 'Column Wrapping',
//       },
//       {
//         id: '551e31e6-f767-11eb-9a03-0242ac130003',
//         name: 'Navbar',
//       },
//       {
//         id: '551e32a4-f767-11eb-9a03-0242ac130003',
//         name: 'Designing Layouts',
//       },
//       {
//         id: '551e334e-f767-11eb-9a03-0242ac130003',
//         name: 'Inheritance',
//       },
//       {
//         id: '551e3402-f767-11eb-9a03-0242ac130003',
//         name: 'CSS Gradients',
//       },
//     ],
//   },
//   {
//     id: 'ae2ede68-af77-427c-817c-0ce4beeb69c7',
//     categoryId: 'PROJECT',
//     title: '7 JANUARY 2021',
//     projectTitle: 'Food Munch',
//     description: 'Food Much Website is a user-centric food tech website.',
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
//     duration: '2 hrs',
//     projectUrl: 'https://fm.ccbp.tech/',
//   },
//   {
//     id: '4938c3d1-81cd-4729-9d2c-dcd50796aa4d',
//     categoryId: 'COURSE',
//     title: '30 JANUARY 2021',
//     courseTitle: 'Dynamic Website',
//     description:
//       'Learn the fundamental concepts in JavaScript and apply them to build dynamic and interactive web applications like Counter, Guessing Game, Chat Web app, E-commerce web app, etc.',
//     duration: '20 days',
//     tagsList: [
//       {
//         id: 'd4743c06-f767-11eb-9a03-0242ac130003',
//         name: 'Declaring Variables',
//       },
//       {
//         id: 'd4743ecc-f767-11eb-9a03-0242ac130003',
//         name: 'Comparison Operator',
//       },
//       {
//         id: 'd4743fe4-f767-11eb-9a03-0242ac130003',
//         name: 'Functions',
//       },
//       {
//         id: 'd47440d4-f767-11eb-9a03-0242ac130003',
//         name: 'Object',
//       },
//       {
//         id: 'd474434a-f767-11eb-9a03-0242ac130003',
//         name: 'DOM Manipulations',
//       },
//       {
//         id: 'd474443a-f767-11eb-9a03-0242ac130003',
//         name: 'Loops',
//       },
//       {
//         id: 'd4744516-f767-11eb-9a03-0242ac130003',
//         name: 'Local Storage',
//       },
//     ],
//   },
//   {
//     id: 'd6c4b3a5-7b1d-4906-aca8-823f44129004',
//     categoryId: 'PROJECT',
//     title: '6 FEBRUARY 2021',
//     projectTitle: 'Todos Application',
//     description:
//       'This app helps users to track the day to day tasks. Users can create, edit, track the status of each todo item and able to persist them over page reloads.',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png',
//     duration: '3 hrs',
//     projectUrl: 'https://todossapp.ccbp.tech/',
//   },
//   {
//     id: '0a35abbe-22ca-40a1-81da-613f656b7702',
//     categoryId: 'PROJECT',
//     title: '15 FEBRUARY 2021',
//     projectTitle: 'Wikipedia Search Application',
//     description:
//       'Using this Wikipedia Search Application users can search and view curated results and can see detailed explanations in Wikipedia by clicking on the specific result.',
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/wiki-logo-img.png',
//     duration: '4 hrs',
//     projectUrl: 'https://wikiseaarch.ccbp.tech/',
//   },
//   {
//     id: 'd80781c3-980e-4ab9-96ca-9ad1a9cdf93d',
//     categoryId: 'COURSE',
//     title: '15 MARCH 2021',
//     courseTitle: 'RWD using Flexbox',
//     description:
//       'Learn to develop responsive layouts using CSS Flexbox and CSS Media Queries.',
//     duration: '7 days',
//     tagsList: [
//       {
//         id: '34e6b208-f768-11eb-9a03-0242ac130003',
//         name: 'Sizing Elements',
//       },
//       {
//         id: '34e6b460-f768-11eb-9a03-0242ac130003',
//         name: 'Flexbox Layout',
//       },
//       {
//         id: '34e6b76c-f768-11eb-9a03-0242ac130003',
//         name: 'Min & Max sizes',
//       },
//       {
//         id: '34e6b83e-f768-11eb-9a03-0242ac130003',
//         name: 'Media Query Syntax',
//       },
//       {
//         id: '34e6b8fc-f768-11eb-9a03-0242ac130003',
//         name: 'Logical Operators',
//       },
//       {
//         id: '34e6ba28-f768-11eb-9a03-0242ac130003',
//         name: 'CSS box-sizing property',
//       },
//       {
//         id: '34e6baf0-f768-11eb-9a03-0242ac130003',
//         name: 'Media Features',
//       },
//     ],
//   },
//   {
//     id: '7bc3f006-f0f1-4574-924b-17c480556727',
//     categoryId: 'PROJECT',
//     title: '20 MARCH 2021',
//     projectTitle: 'Move Messenger',
//     description:
//       'The landing page of Move Messenger gives you a brief intro of Move Messenger. The landing page is responsive enabling to view it across various devices.',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/intermediate-rwd/move-messenger-img.png',
//     duration: '5 hr',
//     projectUrl: 'https://movemessengers.ccbp.tech/',
//   },
//   {
//     id: 'e681e826-260c-4540-9ee5-f53d0e6ecba0',
//     categoryId: 'COURSE',
//     title: '30 APRIL 2021',
//     courseTitle: 'React JS - Getting Started',
//     description:
//       'Learn how to build dynamic web applications with the React JS library. When you finish this course, you will be comfortable in creating a modern, clean, and maintainable application in React JS, from scratch.',
//     duration: '18 days',
//     tagsList: [
//       {
//         id: '94947ad2-f768-11eb-9a03-0242ac130003',
//         name: 'Components',
//       },
//       {
//         id: '94947d52-f768-11eb-9a03-0242ac130003',
//         name: 'Lists',
//       },
//       {
//         id: '94947e4c-f768-11eb-9a03-0242ac130003',
//         name: 'Conditional Rendering',
//       },
//       {
//         id: '94947f14-f768-11eb-9a03-0242ac130003',
//         name: 'setState()',
//       },
//       {
//         id: '94948270-f768-11eb-9a03-0242ac130003',
//         name: 'Updating Phase',
//       },
//       {
//         id: '94948342-f768-11eb-9a03-0242ac130003',
//         name: 'Routing',
//       },
//       {
//         id: '94948400-f768-11eb-9a03-0242ac130003',
//         name: 'API Calls',
//       },
//     ],
//   },
//   {
//     id: 'e093c08a-a2ae-413a-814b-e7c83f5f2ac3',
//     categoryId: 'PROJECT',
//     title: '26 MAY 2021',
//     projectTitle: 'Nxt Trendz',
//     description:
//       'Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.',
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png',
//     duration: '6 hrs',
//     projectUrl: 'https://nxtz.ccbp.tech/',
//   },
// ]

// const App = () => <TimelineView timelineItemsList={timelineItemsList} />

// export default App



// import { Route, Switch } from 'react-router-dom'
// import Login from "./jobbyApp/Login"
// import Home from "./jobbyApp/Home"
// import Jobs from "./jobbyApp/Jobs"
// import NotFound from "./jobbyApp/NotFound"
// import JobItemDetails from './jobbyApp/JobItemDetails'

// const App = () =>{
// return(
//   <div>
//     <Switch>
//       <Route exact path="/login" component={Login}/>
//       <Route exact path="/" component={Home}/>
//       <Route exact path="/jobs" component={Jobs}/>
//       <Route exact path="/jobs/:id" component={JobItemDetails}/>
//       <Route component={NotFound}/>
//     </Switch>

//   </div>

// )  
// }

// export default App

// import {Component} from 'react'
// import ConfigurationContext from "./context/ConfigurationContext"
// import ConfigurationController from './layoutBuilder/ConfigurationController'
// import Layout from './layoutBuilder/Layout'

// import './App.css'

// class App extends Component {
//   state = {
//     showContent: true,
//     showLeftNavbar: true,
//     showRightNavbar: true,
//   }

//   onToggleShowContent = () => {
//     this.setState(provi => ({showContent: !provi.showContent}))
//   }

//   onToggleShowLeftNavbar = () => {
//     this.setState(provi => ({showLeftNavbar: !provi.showLeftNavbar}))
//   }
//   onToggleShowRightNavbar = () => {
//     this.setState(provi => ({showRightNavbar: !provi.showRightNavbar}))
//   }
//   render() {
//     const {showContent, showLeftNavbar, showRightNavbar} = this.state
//     return (
//       <ConfigurationContext.Provider
//         value={{
//           showContent,
//           showLeftNavbar,
//           showRightNavbar,
//           onToggleShowContent: this.onToggleShowContent,
//           onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
//           onToggleShowRightNavbar: this.onToggleShowRightNavbar,
//         }}
//       >
//         <ConfigurationController />
//         <Layout />
//       </ConfigurationContext.Provider>
//     )
//   }
// }

// export default App

// import {Switch, Route} from 'react-router-dom'
// import {Component} from 'react'
// import Home from './NavbarContext/Home'
// import About from './NavbarContext/About'
// import NotFound from './NavbarContext/NotFound'
// import ConfigurationContext from "./context/ConfigurationContext"

// import './App.css'

// class App extends Component {
//   state = {
//     isDarkTheme: false,
//   }
//   toggleTheme = () => {
//     this.setState(prove => ({isDarkTheme: !prove.isDarkTheme}))
//   }

//   render() {
//     const {isDarkTheme} = this.state
//     return (
//       <ConfigurationContext.Provider
//         value={{isDarkTheme, toggleTheme: this.toggleTheme}}
//       >
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/about" component={About} />
//           <Route component={NotFound} />
//         </Switch>
//       </ConfigurationContext.Provider>
//     )
//   }
// }

// export default App


// import MemeGenerator from './MemeGenerator'

// import './App.css'

// const App = () => <MemeGenerator />

// export default App


// import RockPaperScissor from './RockPaperScissor'

// import './App.css'

// const App = () => <RockPaperScissor />

// export default App

// import {Switch, Route} from 'react-router-dom'
// import LoginRoute from './LoginPageAssinment/LoginRoute'
// import HomeRoute from "./LoginPageAssinment/HomeRoute"

// import './App.css'

// const App = () => {
//     return(
//         <Switch>
//             <Route exact path="/" component={LoginRoute}/>
//             <Route exact path="/home" component={HomeRoute}/>

//         </Switch>
//     )
// }

// export default App

// import EditableTextInput fro./EditableTextInput/EditTextput/EditText"
// import './App.css'
// const App=()=>{
//     return <EditableTextInput/>
// }
// export default App

// import MusicPlaylist from "./EditableTextInput/MusicPlaylist"
// import './App.css'
// const App=()=>{
//     return <MusicPlaylist/>
// }
// export default App

// import Tabs from "./EditableTextInput/Tabs"
// import './App.css'
// const App=()=>{
//     return <Tabs/>
// }
// export default App

// import VisitCountries from "./EditableTextInput/VisitCountries"
// import './App.css'
// const App=()=>{
//     return <VisitCountries/>
// }
// export default App

// import MyTask from "./EditableTextInput/MyTask"
// import './App.css'
// const App=()=>{
//     return <MyTask/>
// }
// export default App 

// import TravelGuide from "./EditableTextInput/TravelGuide"
// import './App.css'
// const App=()=>{
//     return <TravelGuide/>
// }
// export default App

// import {Switch, Route} from 'react-router-dom'
// import Home from "./EditableTextInput/TechEra/Home"
// import TechDisplay from "./EditableTextInput/TechEra/TechDisplay"
// import NotFound from "./EditableTextInput/TechEra/NotFound"
// // import Header from "./EditableTextInput/TechEra/Header"

// import './App.css'
// const App=()=>{
//     return (
//         <>
//         {/* <Header/> */}
//         <Switch>  
//             <Route exact path="/" component={Home}/>
//             <Route exact path="/courses/:id" component={TechDisplay}/>
//             <Route component={NotFound}/>
//     </Switch> 
//     </>
//     )
// }
// export default App

// import {Switch, Route} from 'react-router-dom'
// import Home from "./MockInterview/LoginForm/Home"
// import Login from "./MockInterview/LoginForm/Login"
// import NotFound from "./MockInterview/LoginForm/NotFound"
// // import Header from "./EditableTextInput/TechEra/Header"

// import './App.css'
// const App=()=>{
//     return (
//         <>
//         {/* <Header/> */}
//         <Switch> 
//             <Route exact path="/ebank/login" component={Login}/> 
//             <Route exact path="/" component={Home}/>
//             <Route component={NotFound}/>
//         </Switch> 
//     </>
//     )
// }
// export default App

// import "./App.css"
// import ProjectShowCase from "./MockInterview/Mock2/ProjectShowCase"

// const App=()=>{
//     return(
//         <div>
//             <ProjectShowCase/>
//         </div>
//     )
// }
// export default App

// import "./App.css"
// import Item from "./MockInterview/Mock2/Items"

// const App=()=>{
//     return(
//         <div>
//             <Item/>
//         </div>
//     )
// }
// export default App

// import "./App.css"
// import {Component} from "react"
// import {Switch, Route} from 'react-router-dom'
// import Home from "./MockInterview/Registration/Home"
// import Login from "./MockInterview/Registration/Login"
// import NotFound from "./MockInterview/Registration/NotFound"
// import ResistationContext from "./Zcontext/ResistationContext"


// class App extends Component{
//     state = {
//         name: "",
//         topicsLists: "Arts and Culture",
//         isRegistration: false,
//         showError:false
//     }

//     registerName=()=>{
//         this.setState({isRegistration:true})
//     }

//     updateErr=()=>{
//         this.setState({showError:true})
//     }
    
//     onChangeName = (name) => {
//         this.setState({ name })
//     }
//     onChangeSelect = (topicsLists) => {
//         this.setState({ topicsLists })
//     }
//     render(){
//         const {name, topicsLists, isRegistration, showError}=this.state
//     return(
//         <ResistationContext.Provider value={{
//             name, 
//             topicsLists, 
//             isRegistration, 
//             showError,
//             registerName:this.registerName,
//             updateErr:this.updateErr, 
//             ChangeName:this.onChangeName,
//             ChangeSelect:this.onChangeSelect
//         }}>
//         <Switch>
//             <Route exact path="/register" component={Login}/>
//             <Route exact path="/" component={Home}/>
//             <Route component={NotFound}/>
//         </Switch>
//         </ResistationContext.Provider>
//     )
//     }
// }
// export default App

// import UnlockApp from "./ReactHook/UnlockApp"

// const App=()=>{
//     return <UnlockApp/>
// }
// export default App

// import CraditCard from "./ReactHook/CraditCard"

// const App=()=>{
//     return <CraditCard/>
// }
// export default App

// import ReadMore from "./ReactHook/ReadMore"

// const App=()=>{
//     return <ReadMore/>
// }
// export default App

// import NotesApp from "./ReactHook/NotesApp"

// const App=()=>{
//     return <NotesApp/>
// }
// export default App


// import Home from "./RestaurantApp/Home"

// const App=()=>{
//     return <Home/>
// }
// export default App

import {useState} from "react"
import {Switch, Route} from 'react-router-dom'

import Popular from "./MovieDatabaseApp/Popular"
import TopRated from "./MovieDatabaseApp/TopRated"
import Upcoming from "./MovieDatabaseApp/Upcoming"
import SearchQuery from "./MovieDatabaseApp/SearchQuery"

import ConfigurationContext from "./context/ConfigurationContext"

const API_KEY="655214fece85c7e86e4179dc2063d5e2"


const App=()=>{
    const [searchResponse, setSearchResponse]= useState({})
    const [apiStatus, setApiStatus]=useState("INITIAL")
    const [searchInput, setSearchInput] = useState("")

    const onChangeSearchInput=text=>setSearchInput(text)

    const getUpdateData=(responseData)=>({
        totalPages:responseData.total_pages,
        totalResults:responseData.total_results,
        results: responseData.results.map(eachMovie=>({
            id:eachMovie.id,
            posterPath:`https://image.tmdb.org/t/p/w500${eachMovie.poster_path}`,
            voteAverage:eachMovie.vote_average,
            title:eachMovie.title,
        }))

    })

    const onTriggerSearchingQuery=async(page=1)=>{
        setApiStatus("IN_PROGRESS")
        const apiUrl=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchInput}&page=${page}`
        const response=await fetch(apiUrl)
        const data=await response.json()
        // console.log(data)
        setSearchResponse(getUpdateData(data))
        setApiStatus("SUCCESS")
    }

    return (
        <ConfigurationContext.Provider 
        value={{
            searchResponse, 
            apiStatus,
            searchInput, 
            onTriggerSearchingQuery,
            onChangeSearchInput
        }}>
        <Switch> 
            <Route exact path="/" component={Popular}/>
            <Route exact path="/top-rated" component={TopRated}/>
            <Route exact path="/upcoming" component={Upcoming}/>
            <Route exact path="/search" component={SearchQuery}/>
        </Switch>

       </ConfigurationContext.Provider>
        )    
}
export default App