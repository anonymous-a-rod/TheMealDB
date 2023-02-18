import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="h-12 shadow-md mb-10">
            <div className="max-w-6xl h-full mx-auto flex items-center justify-between">
                <div className="">
                    <Link to="/">logo here</Link>
                </div>
                <ul className="">
                    <li className="inline p-4"><Link to="/">Home</Link></li>
                    <li className="inline p-4"><Link to="/team">Team</Link></li> 
                </ul>                 
            </div>
        </nav>
     );
}
 
export default Navbar;