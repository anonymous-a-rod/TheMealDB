import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="w-full h-10 border border-gray-400 mt-10">
            <div className="max-w-6xl mx-auto flex justify-between h-full items-center">
                <div>Footer component</div>
                <ul>
                
                <li className="inline p-4"><Link to="/about">About</Link></li>
                    <li className="inline p-4"><Link to="/faq">FAQ</Link></li>  
                </ul>  
            </div>
            
            
        </footer>
     );
}
 
export default Footer;