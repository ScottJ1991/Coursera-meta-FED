import table from  "../../image/Floor-plan.png";

const Rhead = () => {

    return (
        <section id="rhead">
            <h1 className="yellow appMargin">Reservation a table</h1>
            <img className="appMargin" src={table} alt="floor plan"></img>
        </section>
    );
};

export default Rhead;