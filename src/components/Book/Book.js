import { Link } from "react-router-dom";

import Progess from "../Reservation/Progess.js";
import Rdetails from "./Rdetails.js"
import Bform from "./Bform.js"


const Book = () => {

    return (
        <main>
            <Progess/>
            <section>
                Book
                <Rdetails/>
                <Bform/>
                <Link to="/confirmation" className="button-sec">Book</Link>
                <Link to="/reservation" className="button-sec">Back</Link>
            </section>
      </main>
    );
};

export default  Book;