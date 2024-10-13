import { Link } from "react-router-dom";

import Dish from "./Dish.js";

const dishes = [
    {
        getImageSrc: () => require("../../../image/greek-salad.jpg"),
        name: "Greek salad",
        price: "12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        getImageSrc: () => require("../../../image/bruchetta.svg"),
        name: "Bruchetta",
        price: "5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },
    {
        getImageSrc: () => require("../../../image/lemon-dessert.jpg"),
        name: "Lemon Dessert",
        price: "5.00",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    },
  ];

const Specails = () => {

    return (
        <section>
            <header id="specialHead">
                <h3>This week specials!</h3>
                <section>
                    <Link to="/" id="menuButton" className="button-pri">Online Menu</Link>
                </section>
            </header>

            <section id="specails">
            {dishes.map((dish) => (
                <Dish
                    key={dish.name}
                    name={dish.name}
                    price={dish.price}
                    description={dish.description}
                    imageSrc={dish.getImageSrc()}
                />
            ))}
        </section>
    </section>

    );
};

export default Specails;