import React , {useContext, useState} from "react";

const TypeContext = React.createContext()

export function useType(){
    return useContext(TypeContext)
}

export default function TypeProvider({children}){
    const [type , setType] = useState("")
    return (
        <TypeContext.Provider value={{type,setType}}  >
            {children}
        </TypeContext.Provider>
    )
}