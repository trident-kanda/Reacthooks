import { useEffect, useState } from "react"

const effect = () => {
    const [count,setCount] = useState<number>(0)
    const [state,changeState] = useState<boolean>(false)
    useEffect(()=>{
        console.log("render毎")
    })
    useEffect(()=>{
        console.log("初回実行")
    },[])
    useEffect(()=>{
        console.log("State変更時")
    },[state])
    return(
        <div>
            <p>{count}</p>
            <button onClick={()=>{
                setCount(count + 1)
            }}>PLUS</button>
            <p>{String(state)}</p>
            <button onClick={()=>{
                changeState(!state)
            }}>CHANGE</button>
        </div>
    )
    
}

export default effect