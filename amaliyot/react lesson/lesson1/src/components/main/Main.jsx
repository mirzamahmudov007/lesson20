import "./Main.css"
import mainImg1 from "./img/Phone.png"
import logitech from "./img/Logitech.png"
import amazon from "./img/Amazon.png"
import facebook from "./img/Facebook.png"
import google from "./img/Google.png"
function Main() {
    return (
        <>
            <main className="main">
                <div className="container">
                    <div className="main_wrapper">
                        <div className="main_img">
                            <img src={mainImg1} alt="phone1" />
                        </div>
                        <div className="main_title">
                            <h1>Headline of Modern and Digital Lending Platform Seconds</h1>
                            <p>Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending process</p>
                            <button>Get Started</button>
                            <ul className="logotip_list">
                                <li><img src={logitech} alt=""></img></li>
                                <li><img src={amazon} alt=""></img></li>
                                <li><img src={facebook} alt=""></img></li>
                                <li><img src={google} alt=""></img></li>

                                
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>)
}

export default Main;