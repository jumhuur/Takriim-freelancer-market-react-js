function Alert_wrong({add , alertw}){
    return(
        <div className={alertw ? "alert wrninig active" : "alert wrninig"} >
        <div className="sawir">
        <img src='/images/taw_seccse.svg' className='svg_compl'  alt='complate'/>
        </div>
        <div className="macluumaad">
            <p> {add} </p>
        </div>
    </div>
    )


}

export default Alert_wrong