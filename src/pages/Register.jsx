import { useState, Fragment, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserToLocalStorage } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserToLocalStorage("registered-user", { name, email, password });
    navigate("/login");
  };

  return (
    <Fragment>
      <Helmet>
        <title>Register Page</title>
      </Helmet>
      <main className="p-8 border mt-8 h-fit w-[90vw] md:w-[40vw] mx-auto rounded-md">
        <h1 className="text-center text-3xl mt-4" tabIndex="0">
          Register
        </h1>
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
              aria-label="Please enter your name."
              aria-required="true"
              autoComplete="name"
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
              aria-label="Please enter your email."
              aria-required="true"
              autoComplete="email"
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
              aria-label="Please enter your password."
              aria-required="true"
              autoComplete="new-password"
            />
          </div>
          <button
            type="submit"
            className="text-sm font-semibold px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300"
            role="button"
          >
            Register
          </button>
        </form>

        <p className="mt-4" tabIndex="0">
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
      </main>
    </Fragment>
  );
};

export default Register;
