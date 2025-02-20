import { Link } from "react-router-dom";

const Nav = () => {

    return (
      <nav>
        <ul>
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/" className="nav-item">About</Link></li>
            <li><Link to="/" className="nav-item">Menu</Link></li>
            <li><Link to="/reservation" className="nav-item">Reservations</Link></li>
            <li><Link to="/" className="nav-item">Order Online</Link></li>
            <li><Link to="/" className="nav-item">Login</Link></li>
        </ul>
      </nav>
    );
};

export default Nav;