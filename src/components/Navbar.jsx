import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="h-12 shadow-md flex items-center justify-end pr-12 mb-10">
            <ul>
                <li className="inline p-4"><Link to="/">Home</Link></li>
                <li className="inline p-4"><Link to="/team">Team</Link></li>
                <li className="inline p-4"><Link to="/about">About</Link></li>
                
            </ul>                 
        </nav>
     );
}
 
export default Navbar;