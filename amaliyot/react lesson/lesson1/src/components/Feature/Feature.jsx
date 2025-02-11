import "./Feature.css"
import featureImg from "./img/Rectangle.png"
import gr21 from "./img/Group 21.png"
function Feature() {
    return (
        <section>
            <div className=" feature_div">
                <img className="imgage1" src={featureImg} alt=""></img>
                <div className="feature_title">
                    <p className="feature_txt">Long Label text as headline</p>
                    <h2>
                        Headline of Modern and Digital Lending Platform In a Few Seconds for You
                    </h2>
                    <p className="span">Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending process Gorgeous, high-quality design system for mobile, tablet & desktop devices a few reasons digital</p>
                    <p className="logtio"><img src={gr21} alt=""></img> Play Tutorial</p>
                </div>
            </div>
        </section>
    )
}

export default Feature;