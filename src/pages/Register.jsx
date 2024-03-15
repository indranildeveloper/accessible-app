import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { setUser, setUserToLocalStorage } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, email, password });
    setUserToLocalStorage({ name, email, password });
    navigate("/dashboard");
  };

  return (
    <>
      <Helmet>
        <title>Register Page</title>
      </Helmet>
      <div className="p-8 border mt-8  w-[40vw] mx-auto rounded-md">
        <h1 className="text-center text-3xl mt-4">Register</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="border mt-1 p-2 rounded-md outline-blue-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="border mt-1 p-2 rounded-md outline-blue-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="border mt-1 p-2 rounded-md outline-blue-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="text-sm font-semibold px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300"
          >
            Submit
          </button>
        </form>

        <p className="mt-4">
          Already have an account?{" "}
          <span>
            <Link
              to="/login"
              className="text-blue-600 hover:underline underline-offset-2"
            >
              Log In
            </Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default Register;
