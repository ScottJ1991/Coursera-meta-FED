//import { useReducer } from "react";

import Rform from "./Rform.js"
import Rhead from "./Rhead.js";

/*const reducer = (state, action) =>{
    /*if(action.type === update){
        return {};
    }
    return state;
}*/

const Reservation = () => {
    const availableTimes = ["17:00","18:00","19:00","20:00","21:00", "22:00"];
    //const [state, dispatch] = useReducer(reducer, availableTimes);

    return (
        <main>
            <Rhead/>
            <Rform aTime={availableTimes}/>
        </main>
    );
};

export default Reservation;