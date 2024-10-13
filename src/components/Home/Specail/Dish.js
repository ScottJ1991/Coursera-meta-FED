const Dish = ({ name, price, description, imageSrc }) => {

    return (
        <article>
            <img src={imageSrc} alt=""></img>
            <section>
                <header>
                    <h4>{name}</h4>
                    <h4>${price}</h4>
                </header>
                <main>{description}</main>
                <footer>Order a delivery</footer>
            </section>
        </article>
    );
}
export default Dish;
