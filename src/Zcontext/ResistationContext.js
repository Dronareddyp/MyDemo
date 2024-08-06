import React from "react"

const ResistationContext = React.createContext({
    name:"", 
    topicsLists:"Arts and Culture", 
    isRegistration:false, 
    showError:false,
    registerName:()=>{},
    updateErr:()=>{}, 
    ChangeName:()=>{},
    ChangeSelect:()=>{}

})
export default ResistationContext