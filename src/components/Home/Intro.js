import { Link } from "react-router-dom";
import pic from "../../image/restauranfood.jpg"

const Intro = () => {

    return (
        <section id="intro-grid">
            <section className="intro">
                <header>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                </header>
                <main className="intro">
                    <p className="intro">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </main>
            </section>
            <img src={pic} id="intro-img" alt=""></img>
            <Link to="/Reservation" className="button-pri">Reserve a table</Link>
        </section>
    );
};

export default Intro;