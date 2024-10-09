import Nav from "./Nav.js";
import logo from  "../image/Logo.svg";

const Header = () => {

    return (
        <header>
            <img src={logo}></img>
            <Nav/>
        </header>
    );
};

export default Header;