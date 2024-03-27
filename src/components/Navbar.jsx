import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { user, handleLogout } = useContext(UserContext);

  return (
    <header className="border-b px-4 sm:px-0">
      <nav className="flex container mx-auto justify-between items-center h-16">
        <Link to="/" className="flex justify-center items-center gap-2">
          <img
            src="/logo.svg"
            alt="Company Logo"
            role="img"
            aria-label="Company Logo"
          />
          <h4 className="font-semibold">Company Name</h4>
        </Link>

        {user.email ? (
          <ul
            className="flex justify-center items-center gap-4"
            aria-label="Main Navigation"
          >
            <li className="flex">
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  `text-sm font-semibold px-4 py-2 rounded-md  transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white hover:bg-blue-500"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`
                }
              >
                Product
              </NavLink>
            </li>
            <li className="flex gap-2 items-center">
              <button
                type="button"
                onClick={handleLogout}
                className="text-sm text-white font-semibold px-4 py-2 rounded-md  transition-all duration-300 bg-rose-600"
                role="button"
                aria-label="Log Out Button"
              >
                Log Out
              </button>
              <button className="border rounded-full h-8 w-8 flex items-center justify-center">
                {user.email.split("")[0].toUpperCase()}
              </button>
            </li>
          </ul>
        ) : (
          <ul
            className="flex justify-center items-center gap-4"
            aria-label="Main Navigation"
          >
            <li className="flex">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-sm font-semibold px-4 py-2 rounded-md  transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white hover:bg-blue-500"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`
                }
              >
                Login
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `text-sm font-semibold px-4 py-2 rounded-md  transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white hover:bg-blue-500"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
