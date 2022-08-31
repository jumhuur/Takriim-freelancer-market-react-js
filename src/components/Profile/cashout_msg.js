import  NavHolder from "../NavHolder";
import  Footer from "../Footer";
import AsideUser from "./Aside_Profile"
function Labxaday(){
    return(
    <div>
        <NavHolder />
        <section class="orders invocs">
        <div class="xajiye kala_qayb">
            <AsideUser />
            {/* <!---------------biloga foomka labixida -------------------> */}
            <div class="tranding_haye">
                <div class="rasiid_tamplate">
                    <div class="rasiid">
                        <div class="sax">
                            <p>Dalbashadada Lacagta Waad soo Gudbisay Mahadsanid</p>
                            <img src="/images/pay.svg" alt="lacag_labixid" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!---------------dhamaadka  foomka labixida -------------------> */}
        </div>
    </section>
    <Footer />
    </div>
    )
}
export default Labxaday