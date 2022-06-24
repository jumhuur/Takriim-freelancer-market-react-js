import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function Bugscroll(){
    const path = useLocation()
    useEffect (function(){
        window.scrollTo(0,0)
    },[path])
}

export default Bugscroll