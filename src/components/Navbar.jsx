import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../config";

const Navbar = () => {
  return (
    <nav className="flex container mx-auto justify-between items-center border-b py-4">
      <div className="flex justify-center items-center gap-2">
        <img src="/logo.svg" alt="Company Logo" />
        <h4 className="font-semibold">Company Name</h4>
      </div>

      <ul className="flex gap-4">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.id}
            to={item.link}
            className={({ isActive }) =>
              `text-sm font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "bg-gray-100"
              }`
            }
          >
            {item.title}
          </NavLink>
        ))}
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
