import logo from  "../image/footer-logo.png";

const Footer = () => {

    return (
      <footer>
        <img src={logo}></img>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
        <ul>
            <li>Adress</li>
            <li>phone number</li>
            <li>email</li>
        </ul>
        <ul>
            <li>Adress</li>
            <li>phone number</li>
            <li>email</li>
        </ul>
      </footer>
    );
};

export default Footer;