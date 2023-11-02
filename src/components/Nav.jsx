import {Link} from "react-router-dom"
import "../components/Nav.css"

const Nav = () => {
    return (
        <ul>
          <Link to="/"><li>Home</li></Link>  
          <Link to="/about"><li>About</li></Link>  
        </ul>
    );
};

export default Nav;