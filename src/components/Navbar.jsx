import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { user, handleLogout } = useContext(UserContext);

  const NAV_ITEMS = user.email
    ? [
        {
          id: 1,
          title: "Product",
          link: "/product",
        },
      ]
    : [
        {
          id: 2,
          title: "Log In",
          link: "/login",
        },
        {
          id: 3,
          title: "Register",
          link: "/register",
        },
      ];

  return (
    <header className="border-b px-4 sm:px-0">
      <nav
        className="flex container mx-auto justify-between items-center h-16"
        role="navigation"
        aria-description="The navbar for the application"
      >
        <Link to="/" className="flex justify-center items-center gap-2">
          <img
            src="/logo.svg"
            alt="Company Logo"
            role="img"
            aria-label="Company Logo"
          />
          <h4 className="font-semibold">Company Name</h4>
        </Link>

        <ul
          className="flex justify-center items-center gap-4"
          role="navigation"
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="flex">
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `text-sm font-semibold px-4 py-2 rounded-md  transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white hover:bg-blue-500"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
          {user.email && (
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
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
