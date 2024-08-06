
import FaQItem from "../FaqItem"

const  Faqs =(props)=>{
    const {faqsList} = props 
    return(
        <div>
            <h1>FAQs</h1>
            <ul>
                {faqsList.map((demo)=>(
                    <FaQItem key={demo.id} faqsLists={demo}/> 
                    ))    
                    }
            </ul>               
            </div>
        )
}
export default Faqs