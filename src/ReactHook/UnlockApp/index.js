import {useState} from "react"
const UnlockApp =()=>{
    const [lock, setLock]=useState(false)

    const onClickLock=()=>{
        setLock(prev=>!prev)
    }
    return(
        <div>
            {
                lock?
                <div>
                <img src="https://assets.ccbp.in/frontend/hooks/unlock-img.png" alt=""/>
                <p>Your Devise is Unlocked</p>
                </div>
                :
                <div>
                <img src="https://assets.ccbp.in/frontend/hooks/lock-img.png" alt=""/>
                <h1>Your Devise is Locked</h1>
                </div>
            }

            {lock?
            <button onClick={onClickLock}>Lock</button>                
                :
                <button onClick={onClickLock}>Unlock</button>
                
                }
        </div>
    )
}
export default UnlockApp