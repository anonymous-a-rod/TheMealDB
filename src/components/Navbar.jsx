import { Link } from "react-router-dom";
import logo from "../images/logo-mealDB.svg";
import SearchBar from "./SearchBar";
import { RiTeamLine, RiHome2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <header className='h-36 px-10 sm:px-16 shadow-sm'>
      <div className='max-w-6xl h-full mx-auto flex items-center justify-center sm:justify-between'>
        <div>
          <Link to='/'>
            <img
              className='sm:h-16 lg:h-18'
              src={logo}
              alt='branding for the mealdb'
            />
          </Link>
        </div>
        <nav className='flex flex-reverse-row items-center gap-1'>
          <div className="mr-8 sm:mr-2">
            <SearchBar />
          </div>
          <ul className='flex items-center'>
            <li className='p-2'>
              <Link to='/'>
                <RiHome2Line className='text-2xl' />
              </Link>
            </li>
            <li className='p-2'>
              <Link to='/team'>
                <RiTeamLine className='text-2xl' />
              </Link>
            </li>
          </ul> 
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
