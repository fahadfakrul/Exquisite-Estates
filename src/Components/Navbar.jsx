import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
            className={({ isActive }) =>
              isActive ? 'font-semibold text-lg  font-playfair  border-t-4 border-[#d2c196]  py-1 rounded-lg ' : ' font-semibold font-playfair text-lg'
            }
            to='/'
          >
            Home
          </NavLink>
        <NavLink
            className={({ isActive }) =>
              isActive ? 'font-semibold text-lg font-playfair  border-t-4 border-[#d2c196]  py-1 rounded-lg ' : ' font-playfair text-lg'
            }
            to='/about'
          >
            About
          </NavLink>
        <NavLink
            className={({ isActive }) =>
              isActive ? 'font-semibold text-lg font-playfair  border-t-4 border-[#d2c196]  py-1 rounded-lg ' : ' font-semibold  font-playfair text-lg'
            }
            to='/updateprofile'
          >
            Update profile
          </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-base lg:text-3xl font-semibold lg:font-bold text-black"><span className="text-[#d2c196] ">Exquisite</span> Estates</a>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  items-center gap-5">
        <NavLink
            className={({ isActive }) =>
              isActive ? 'font-semibold text-lg font-playfair  border-t-4 border-[#d2c196] px-5 py-3 rounded-lg ' : ' font-semibold  font-playfair text-lg'
            }
            to='/'
          >
            Home
          </NavLink>
        <NavLink
            className={({ isActive }) =>
              isActive ? 'font-semibold text-lg  font-playfair  border-t-4 border-[#d2c196] px-5 py-3 rounded-lg ' : 'font-semibold  font-playfair text-lg'
            }
            to='/about'
          >
            About
          </NavLink>
        <NavLink
            className={({ isActive }) =>
              isActive ? 'font-semibold text-lg  font-playfair  border-t-4 border-[#d2c196] px-5 py-3 rounded-lg ' : ' font-semibold  font-playfair text-lg'
            }
            to='/updateprofile'
          >
            Update profile
          </NavLink>
          
        </ul>
      </div>
      <div className="navbar-end">
      <Link to={"/login"}><a className="btn text-[#418397] text-lg">Login</a></Link>
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52  text-lg">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li><a>Settings</a></li>
        <li className="text-[#418397]"><a>Logout</a></li>
      </ul>
    </div>
      </div>
    </div>
  );
};

export default Navbar;
