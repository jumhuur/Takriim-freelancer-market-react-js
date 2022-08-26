function Loading({loading}){
    return(
        <>
        <div className={loading ? "over_log Load active":"over_log"} >
        <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
        </div>
        </div>
        </>
    )
}

export default Loading