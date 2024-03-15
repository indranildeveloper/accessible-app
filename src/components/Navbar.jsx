import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

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
    <nav
      className="flex container mx-auto justify-between items-center border-b py-4"
      role="navigation"
      aria-describedby="The navbar for the application"
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

      <ul className="flex gap-4">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
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
      </ul>
    </nav>
  );
};

export default Navbar;
