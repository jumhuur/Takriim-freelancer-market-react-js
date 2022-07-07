import React , {useState , useContext, useEffect} from "react";
const datacontext = React.createContext()

export function useDatacontext(e){
    return useContext(datacontext)
}
export function  ContextProvader({children}){
    const [mudada, setmudada] = useState("")
    const [qiimaha, setqiimaha] = useState("")
    const [xadiga, setxadiga] = useState("")

    function data(mudada, qiimaha, xadiga){
        setqiimaha(qiimaha)
        setmudada(mudada)
        setxadiga(xadiga)
    }

    const sedata = (mudada, qiimaha, xadiga) => {
        return data(mudada, qiimaha, xadiga)
    }

    const value = {
        sedata,
        mudada,
        qiimaha,
        xadiga

    }


    return(
        <datacontext.Provider value={value}>
            {children}
        </datacontext.Provider>
    )
}