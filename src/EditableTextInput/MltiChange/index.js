import {Component} from "react"
const languageGreetingsList = [
    {
      id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
      buttonText: 'English',
      imageAltText: 'english',
    },
    {
      id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
      buttonText: 'Tamil',
      imageAltText: 'tamil',
    },
    {
      id: '89537778-7a46-4c58-988c-0adc931d087c',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
      buttonText: 'Telugu',
      imageAltText: 'telugu',
    },
  ]
class MltiChange extends Component{
    state={
        languageGreetings:languageGreetingsList[0].id
    }

    onClickValue=(valueId)=>{
        this.setState({languageGreetings:valueId})
    }

    onChangeClick=()=>{
        const {languageGreetings}= this.state
        const filterData=languageGreetingsList.filter((each)=>each.id===languageGreetings)
        console.log("ffff", filterData)
        return filterData
        // this.setState({languageGreetings:filterData})
    }

    render(){
        // const {languageGreetings}=this.state
        const imageUrlType=this.onChangeClick()
        return(
            <div>
                <h1>Multilingual Greetings</h1>
                <ul>
                    {languageGreetingsList.map((demo)=>(
                        <li key={demo.id}>
                            <button onClick={()=>{this.onClickValue(demo.id)}}>{demo.buttonText}</button>
                        </li>
                        // <LanguageImage key={demo.id}
                        //     onClickChange={this.onClickValue}
                        //     buttonTextDetals={demo}
                        //     />
                    ))
                    }
                </ul>                
                    {imageUrlType.map((demo)=>(
                        // <Tabs key={demo.id} imageDetals={demo}/>
                        <div key={demo.id}>
                            <img src={demo.imageUrl} alt={`${demo.imageAltText}`}/>
                        </div>
                    ))}
                               
            </div>
        )
    }
}
export default MltiChange