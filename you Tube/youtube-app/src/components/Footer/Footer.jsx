import "../Footer.css"
import footerImg from  "./img/Vector.svg"
function Footer() {
    return(
        <footer className={"bg-secondary py-5 mt-5"}>
            <div className={"container"}>
                <ul className={"list-unstyled d-flex gap-5"}>
                    <li>
                        <h6>Uzbekistan</h6>
                        <p className={"footer_text"}>Uzbekistan, 100021, Tashkent, Shayhontohur, <br/> Furqat str., bld. 6A. </p>
                        <p className={"footer_text"}>+998 (71) 203-50-00 +998 (71) 203-00-55</p>
                        <p className={"footer_text"}> info@meritkimyo.uz </p>
                    </li>
                    <li>
                        <h6>Kazakhstan</h6>
                        <p className={"footer_text"}>Kazakhstan, Almaty, Krasnogvardeyskytract 419. </p>
                        <p className={"footer_text"}>+998 (71) 203-50-00 +998 (71) 203-00-55</p>
                        <p className={"footer_text"}> info@meritkimyo.uz </p>
                    </li>
                </ul>
                <p>© 2023 Merit Chemicals, Inc.</p>
                <div>
                    <img src={footerImg} alt={"footer img"}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;