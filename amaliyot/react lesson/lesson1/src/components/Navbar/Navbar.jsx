import "./Navbar.css"
import navLogo from "./img/Group 2.svg"
function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar_wrapper">
                    <p className="navbar-brand">
                        <img src={navLogo} alt="logo" />
                        LOGOTYPE </p>
                    <ul>
                        <li>Home</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>About Us</li>
                        <li>Help</li>
                    </ul>
                    <div>
                        <div className="navbar_btn_list">
                            <button>Sign In</button>
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;