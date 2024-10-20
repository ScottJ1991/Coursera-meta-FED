import {useState} from "react";

const Rform = (props) => {
    const[form, setForm] = useState({
        date: "",
        time: "17:00",
        diners: "2",
        area: "",
        occasion: "None",
        message: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
    
        console.log(form);

        /*setForm = ({
            date: "",
            time: "17:00",
            diners: "2",
            area: "",
            occasion: "None",
            message: ""
        });*/
        
      }

    return (
        <form className="formSet" onSubmit={handleSubmit}>
            <label htmlFor="date">Date*:</label>
            <input
                id="date"
                type="date"
                onChange={e => {
                    setForm({
                      ...form,
                      date: e.target.value
                    });
                }}
                required
            />
            <label htmlFor="time">Time*:</label>
            <select
                id="time"
                value={form.time}
                onChange={e => {
                    setForm({
                      ...form,
                      time: e.target.value
                    });
                }}
            >
                {props.aTime.map((time) => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="diners">Number of diners*:</label>
            <input
                id="diners"
                type="number"
                min="1"
                value={form.diners}
                onChange={e => {
                    setForm({
                      ...form,
                      diners: e.target.value
                    });
                }}
                required
            ></input>
            <label>Seating area*:</label>
            <div>
                <input
                    id="inside"
                    type="radio"
                    value="Inside"
                    name="seating_area"
                    onClick={e => {
                        setForm({
                          ...form,
                          area: e.target.value
                        });
                    }}
                    required
                />
                <label htmlFor="inside">Inside</label>
                <br/>
                <input
                    id="outside"
                    type="radio"
                    value="Outside"
                    name="seating_area"
                    onClick={e => {
                        setForm({
                          ...form,
                          area: e.target.value
                        });
                    }}
                    required/>
                <label htmlFor="outside">Outside</label>
            </div>
            <label htmlFor="occasion">Occasion*:</label>
            <select
                id="occasion"
                value={form.occasion}
                onChange={e => {
                    setForm({
                      ...form,
                      occasion: e.target.value
                    });
                }}
            >
                <option value="None">None</option>
                <option value="Birthday">Birthday</option>
                <option value="Engagement">Engagement</option>
                 <option value="Anniversary">Anniversary</option>
            </select>

            <label htmlFor="addition">Addition information:</label>
            <textarea
                id="addition"
                rows="10"
                cols="30"
                value={form.message}
                onChange={e => {
                    setForm({
                      ...form,
                      message: e.target.value
                    });
                }}
            ></textarea>
            <button type="Submit" className="button-sec">Reserve</button>
        </form>
    )
}

export default Rform;
