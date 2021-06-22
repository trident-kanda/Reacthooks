import { useState } from "react"

const state = () => {
    const [count,setCount] = useState<number>(0)
    return(
        <div>
            <p>{count}</p>
            <button onClick={()=>{
                setCount(count + 1)
            }}>PLUS</button>
        </div>
    )
}

export default state