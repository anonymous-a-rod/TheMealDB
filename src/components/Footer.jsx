import { Link } from "react-router-dom";
import logo from "../images/logo-mealDB.svg";

const Footer = () => {
  return (
    <footer className='w-full h-48 border-t-[1px] border-gray-400 my-10 py-2 flex flex-col items-center'>
      <Link to='/'>
        <img className='h-16 my-8' src={logo} alt='the mealdb' />
      </Link>

      <div className='max-w-6xl mx-auto mb-16 flex justify-between h-full items-center text-xs'>
        <ul>
          <li className='inline p-4'>
            <Link to='/about'>About</Link>
          </li>
          <li className='inline p-4'>
            <Link to='/faq'>FAQ</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
