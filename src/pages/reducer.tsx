import { useReducer } from "react"

const reducer = () => {
    const [count,dispatch] = useReducer((state:number,action:number)=>{
        return state + action
    },1)//1は初期値
    return(
        <div>
            <p>{count}</p>
            <button onClick={()=>{dispatch(1)}}>
                PLUS
            </button>
        </div>
    )
}

export default reducer