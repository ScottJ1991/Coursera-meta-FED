
const Review = ({name, stars, comment, imageSrc}) => {

    return (

        <article id="T-card">
            <header>
                <h4>{stars} stars</h4>
            </header>
            <main>
                <img src={imageSrc} alt=""></img>
                <p>{name}</p>
            </main>
            <footer>{comment}</footer>
        </article>
    );
}

export default Review;