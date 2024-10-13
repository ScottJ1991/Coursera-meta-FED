import Home from "./Home/Home.js";
import Reservation from "./Reservation/Reservation.js";
import Book from "./Book/Book.js";
import Confirmation from "./Confirmation/Confirmation.js";

import { Routes, Route } from "react-router-dom";
const Main = () => {

    return (
        <Routes> 
            <Route path="/" element={<Home/>}></Route>
            <Route path="/reservation" element={<Reservation/>}></Route>
            <Route path="/book" element={<Book/>}></Route>
            <Route path="/confirmation" element={<Confirmation/>}></Route>
        </Routes>
    );
};

export default Main;