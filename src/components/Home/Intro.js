import { Link } from "react-router-dom";
import pic from "../../image/restauranfood.jpg"

const Intro = () => {

    return (
        <section className="intro">
            <div>
            <header className="yellow">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
            </header>
            <main className="intro">
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </main>
            <footer>
                    <Link to="/Reservation" className="button-pri">Reserve a table</Link>
            </footer>
            </div>
            <img src={pic} id="intro-img" alt=""></img>
        </section>
    );
};

export default Intro;