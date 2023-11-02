import "../components/Card.css"

const Card = ({first_name,last_name,gender}) => {

    return (
        <figcaption className="container-card">
            <div className="card-container" >
            <h1>{first_name}</h1>
            <h2>{last_name}</h2>
            <p>{gender}</p>
            </div>
        </figcaption>
    );
};

export default Card;