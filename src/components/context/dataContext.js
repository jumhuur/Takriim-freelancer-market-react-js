import React , {useState , useContext, useEffect} from "react";
const datacontext = React.createContext()

export function useDatacontext(e){
    return useContext(datacontext)
}
export function  ContextProvader({children}){
    const [mudada, setmudada] = useState("")
    const [qiimaha, setqiimaha] = useState("")
    const [xadiga, setxadiga] = useState("")
    const [Progress_now,setProgress_now ] = useState('')

    function data(mudada, qiimaha, xadiga){
        setqiimaha(qiimaha)
        setmudada(mudada)
        setxadiga(xadiga)
    }

    const sedata = (mudada, qiimaha, xadiga) => {
        return data(mudada, qiimaha, xadiga)
    }

    function Prog_now (Progress_now){
        setProgress_now(Progress_now)
    }

    const setPROG_now = () => {
        return Prog_now(Progress_now)
    }

    const value = {
        sedata,
        mudada,
        qiimaha,
        xadiga,
        Prog_now,
        Progress_now
    }


    return(
        <datacontext.Provider value={value}>
            {children}
        </datacontext.Provider>
    )
}