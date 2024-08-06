import {Component} from "react"
import "./index.css"
import Loader from 'react-loader-spinner'

const initiaStus={
    initial:"INITIAL",
    inProgres:"INPROGRESS",
    failure:"FAILURE",
    success:"SUCCESS"
}
class TravelGuide extends Component{
    state={
        travelGuide:[],
        initiaStatus:initiaStus.initial
    }

    componentDidMount(){
        this.onChangeContainer()
    }

    onChangeContainer= async()=>{
        // const {travelGuide}=this.state
        this.setState({initiaStatus:initiaStus.inProgres})
        const option={
            medthod:"GET"
        }
        const response= await fetch("https://apis.ccbp.in/tg/packages", option)
        const data=await response.json()
        if(response.ok===true){
            const updateData=data.packages.map((demo)=>({
                id:demo.id,
                name:demo.name,
                imageUrl:demo.image_url,
                description:demo.description
            }))
            this.setState({travelGuide:updateData, initiaStatus:initiaStus.success})
        }else{
            this.setState({initiaStatus:initiaStus.failure})
        }
    }

    renderSuccess=()=>{
        const {travelGuide}=this.state
        return(
            <ul>
                {travelGuide.map((demo)=>(
                    <li key={demo.id}>
                        <img className="images" src={demo.imageUrl} alt={demo.name}/>
                        <h1>{demo.name}</h1>
                        <p>{demo.description}</p>

                    </li>
                ))

                }
            </ul>
        )
    }

    returnFailloading=()=>{
        return(
            <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
        )
    }

    renderElement=()=>{
        const {initiaStatus}=this.state
        switch(initiaStatus){
            case initiaStus.success:
                return this.renderSuccess()
            case initiaStus.inProgres:
                return this.returnFailloading()
            default:
                return null       
        }
    }
    render(){
        const {travelGuide}=this.state
        console.log("ttttt", travelGuide)
        return(
            <div>
            <h1>Travel Guide</h1>
            {this.renderElement()}

            </div>
        )
    }
}
export default TravelGuide