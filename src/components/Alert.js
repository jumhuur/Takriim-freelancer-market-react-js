function Alert_sucsess({add , alert}){
    return(
        <div className={alert ? "alert pyment_succsuss active" : "alert pyment_succsuss"} >
        <div className="sawir">
        <img src='/images/taw_seccse.svg' className='svg_compl'  alt='complate'/>
        </div>
        <div className="macluumaad">
            <p> {add} </p>
        </div>
    </div>
    )


}

export default Alert_sucsess