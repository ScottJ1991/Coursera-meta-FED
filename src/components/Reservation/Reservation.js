import { Link } from "react-router-dom";
import Progess from "./Progess.js";
import Rform from "./Rform.js"

const Reservation = () => {

    return (
        <main>
            <Progess/>
            Reservation
            <Rform/>
            <Link to="/book" className="button-sec">Reserve</Link>
        </main>
    );
};

export default Reservation;