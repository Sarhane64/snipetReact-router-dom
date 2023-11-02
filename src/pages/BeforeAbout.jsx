import { useLoaderData } from "react-router-dom";
import CardComplete from "../components/CardComplete";

const BeforeAbout = () => {
    const people = useLoaderData()
    return (
        <div>
            <CardComplete {...people}/>
        </div>
    );
};

export default BeforeAbout;