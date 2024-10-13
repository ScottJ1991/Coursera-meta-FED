import Nav from "./Nav.js";
import logo from  "../image/Logo.svg";

const Header = () => {

    return (
        <header id="header">
            <img src={logo} alt="Company logo"></img>
            <Nav/>
        </header>
    );
};

export default Header;