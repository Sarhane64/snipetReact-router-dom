import { Link } from "react-router-dom";
import Card from "../components/Card";
import Nav from "../components/Nav";
import  {useLoaderData} from "react-router-dom"

const About = () => {
    const people = useLoaderData()
    return (
        <div>
            <Nav />
            <h1>Card</h1>
            <div className="container" >
            {people.map((person) => (
                <Link to={`/about/${person.id}`} key={person.id}>
                <Card 
                key={person.id} {...person}/>
                </Link>
            ))}
            </div>
        </div>
    );
};

export default About;