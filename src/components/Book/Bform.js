import {useState} from "react";

const Bform = () => {
    const[name, setName] = useState("");
    const[phone, setPhone] = useState("");
    const[email, setEmail] = useState("");
    const[card, setCard] = useState("");
    const[cvs, setCvs] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const dataToSubmit = {
            name,
            phone,
            email,
            card,
            cvs
        };
        console.log(dataToSubmit)
        
      }

    return (
        <form className="formSet" onSubmit={handleSubmit}>
            <label>Booking name*:</label>
            <input
                type="text"
                minLength="2"
                required
                value={name}
                onChange={e => setName(e.target.value)}/>

            <label>Phone number:</label>
            <input
                type="tel"
                minLength="11"
                maxLength="11"
                value={phone}
                onChange={e => setPhone(e.target.value)}/>

            <label>E-mail*:</label>
            <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}/>

            <label>Card number*:</label>
            <input
                type="number"
                minLength="16"
                maxLength="16"
                required
                value={card}
                onChange={e => setCard(e.target.value)}/>

            <label>CVS number*:</label>
            <input
                type="number"
                minLength="3"
                maxLength="3"
                required
                value={cvs}
                onChange={e => setCvs(e.target.value)}/>

            <button type="Submit" className="button-sec">Book</button>
        </form>
    );
};

export default Bform;