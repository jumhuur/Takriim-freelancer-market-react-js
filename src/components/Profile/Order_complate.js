import AllNav from '../NavHolder';
import Footer from '../Footer';

function ComplatedOrder(){
    const cls1 = {
        fill: "#fff",
        stroke: "#fff",
        strokeWidth: "2px"
    };
    const cls2_IN_cls1 = {
        fillRule: "evenodd"
    };

    const cols2 = {
        fill: "#2196f3"
    };
    return(
        <div>
        <AllNav />
        <section className="complate">
        <section className="xajiye">
            <div className="dhamaad">
                <img src='/images/taw.svg' className='svg_compl'  alt='complate'/>
                <p className='Complate'>Dalabkaaga waa lagu guulaystay</p>
                <p className="dajin_nafta">
                    Lacagata aad ku bixisay dalabkan  waxaa masuul kaaga ah shabkada
                    anagaana kuu damaanad qaadanay <span>100%</span> inaad helayso 
                    lacagtaada hadii shaqada aad dalbatay laguu qaban waayo Qaabka aad dalbatay iyo mudada ku qoran
                    kaarka dalabka Mahadasanid macmiil raali galintaadu waa muhiimadayada ku xidhnow mar walba suuqa takriim <span><i className="fa-solid fa-face-smile"></i></span>

                </p>

            </div>
        </section>
        </section>
        <Footer/>
        </div>

    )
}


export default ComplatedOrder