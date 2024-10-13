import Review from "./Review.js";

const reviews = [
    {
        imageSrc:"https://bit.ly/broken-link",
        name: "Max",
        stars: "5",
        comment: "Excellent service."
    },
    {
        imageSrc:"https://bit.ly/broken-link",
        name: "Sam",
        stars: "3",
        comment: "The wait was 1 hour and oone mela was cool."
    },
    {
        imageSrc:"https://bit.ly/broken-link",
        name: "Sue",
        stars: "5",
        comment: "Enjoy our meal, add this restaurant to our short."
    },
    {
        imageSrc:"https://bit.ly/broken-link",
        name: "Alex",
        stars: "4",
        comment: "Order an meal without extra and got standard meal."
    }
  ];

const Testimonial = () => {

    return (
        <section className="testimonial">
            <h3>Testimonials</h3>
            <section id="T-cards">
            {reviews.map((review) => (
                <Review
                    key={review.name}
                    name={review.name}
                    stars={review.stars}
                    comment={review.comment}
                    imageSrc={review.imageSrc}
                />
            ))}
            </section>
        </section>

    );
};

export default Testimonial;