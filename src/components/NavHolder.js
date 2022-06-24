import Nav from "../components/Nav";
import LinksQaybo from "./Links_qaybo";
function Holder(){
    const mystyle = {
        marginTop: "82px",
    };
    return(
        <div>
        <section className="nav_bar">
            <div className="head" style={{backgroundImage :"linear-gradient(205deg, #7400b8,#2196f3)"}}>
                <Nav />
            </div>
        </section>
        <LinksQaybo margin={mystyle}/>
        </div>
    )
}

export default Holder