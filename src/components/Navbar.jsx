import { Link } from "react-router-dom";
import logo from "../images/logo-mealDB.svg";
import { RiTeamLine, RiHome2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <header className='h-36 px-16 shadow-sm'>
      <div className='max-w-6xl h-full mx-auto flex items-center justify-between'>
        <div className=''>
          <Link to='/'>
            <img
              className='sm:h-16 lg:h-18'
              src={logo}
              alt='branding for the mealdb'
            />
          </Link>
        </div>
        <nav>
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
