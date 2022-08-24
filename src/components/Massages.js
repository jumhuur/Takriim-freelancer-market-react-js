function Massages({massageHold}){
    return(
        <div id="massages_nav" className={massageHold ? 'active': ''}>
        <div className="footer_msg top">
            <a href="">
            </a>
        </div>
        <div className="all_massage">
            <a href="">
                <div className="msg">
                    <h2>Fariin cusub ayaad ka heshay <span>Ixsaan maxamad</span></h2>
                    <p>Waktiga: <span>1 Day Ago</span>  <span className="Xaalad"><i className="fa-solid fa-envelope"></i></span></p>
                </div>
            </a>
            <a href="">
                <div className="msg">
                    <h2>Fariin cusub ayaad ka heshay <span>Ixsaan maxamad</span></h2>
                    <p>Waktiga: <span>1 Day Ago</span>  <span className="Xaalad"><i className="fa-solid fa-envelope"></i></span></p>
                </div>
            </a>
            <a href="">
                <div className="msg">
                    <h2>Fariin cusub ayaad ka heshay <span>cimaraan idir</span></h2>
                    <p>Waktiga: <span>1 Day Ago</span>  <span className="Xaalad"><i className="fa-solid fa-envelope"></i></span></p>
                </div>
            </a>
            <a href="">
                <div className="msg">
                    <h2>Fariin cusub ayaad ka heshay <span>nasriin xamse</span></h2>
                    <p>Waktiga: <span>1 Day Ago</span>  <span className="Xaalad"><i className="fa-solid fa-envelope"></i></span></p>
                </div>
            </a>
            <a href="">
                <div className="msg">
                    <h2>Fariin cusub ayaad ka heshay <span>Ixsaan maxamad</span></h2>
                    <p>Waktiga: <span>1 Day Ago</span>  <span className="Xaalad"><i className="fa-solid fa-envelope"></i></span></p>
                </div>
            </a>
            <a href="">
            <div className="msg">
                <h2>Fariin cusub ayaad ka heshay <span>Ixsaan cumar</span></h2>
                <p>Waktiga: <span>1 Day Ago</span>  <span className="Xaalad"><i className="fa-solid fa-envelope"></i></span></p>
            </div>
            </a>
        </div>
        <div className="footer_msg">
            <a href="/massages.html">
                <i className="fa-solid fa-message"></i> dhamaan fariimahaaga
            </a>
        </div>
    </div>
    )
}


export default Massages