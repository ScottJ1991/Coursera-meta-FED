import pic1 from "../../image/Mario and Adrian A.jpg";
import pic2 from "../../image/restaurant chef B.jpg";

const About = () => {

    return (
        <section id="About">
            <section>
                <header>
                    <h3>Little Lemon</h3>
                    <h4>Chicago</h4>
                </header>
                <main>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> 
                </main>
            </section>
            <section>
                <img src={pic2} id="pic2" alt=""></img>
                <img src={pic1} id="pic1" alt=""></img>
            </section>
        </section>
    );
}
export default About;