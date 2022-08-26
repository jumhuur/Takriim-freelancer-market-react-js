function Loading({loading}){
    return(
        <>
        <div className={loading ? "over_log Load active":"over_log"} >
        <div class="sk-chase">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        </div>
        </div>
        </>
    )
}

export default Loading