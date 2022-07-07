function Alert_wrong({msg , alert,}){
    return(
        <div className={alert ? "alert wrninig active" : "alert wrninig"} >
        <div className="sawir">
        <img src='/images/wrong_taw.svg' className='svg_compl'  alt='complate'/>
        </div>
        <div className="macluumaad">
            <p> {msg} </p>
        </div>
    </div>
    )
}

export default Alert_wrong