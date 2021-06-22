import { createContext, useContext } from "react"
const textContext = createContext("")

const context = () =>{
    
    return(
        <div>
            <textContext.Provider value={"contextText"}>
            <Child1/>
            </textContext.Provider>
        </div>
    )
}

export default context

export const Child1 = () => {
    return(
        <div>
            <Child2/>
        </div>
    )
}

export const Child2 = () => {
    const text = useContext(textContext)
    return(
        <div>
            {text}
        </div>
    )
}