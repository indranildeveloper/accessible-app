import { useContext, useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailMatch, setEmailMatch] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const navigate = useNavigate();

  const { setUser, setUserToLocalStorage } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(localStorage.getItem("registered-user"));

    if (registeredUser.email !== email) {
      console.log("Email do not match.");
      setEmailMatch(false);
      return;
    }

    if (registeredUser.password !== password) {
      console.log("Password do not match.");
      setPasswordMatch(false);
      return;
    }

    setUser({ email, password });
    setUserToLocalStorage("logged-in-user", { email, password });
    navigate("/product");
  };

  return (
    <Fragment>
      <Helmet>
        <title>Login Page</title>
      </Helmet>

      <main className="p-8 border mt-8 h-fit w-[90vw] md:w-[40vw] mx-auto rounded-md">
        <h1 className="text-center text-3xl mt-4" role="heading" tabIndex="0">
          Log In
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="border mt-1 p-2 rounded-md outline-blue-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Please enter email for login."
              aria-required="true"
              autoComplete="email"
            />
            {!emailMatch && (
              <p
                className="text-rose-600"
                id="submitMessage"
                aria-live="polite"
              >
                Email can not be found in database.
              </p>
            )}
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
              aria-label="Please enter password for login."
              aria-required="true"
              autoComplete="current-password"
            />
            {!passwordMatch && (
              <p
                className="text-rose-600"
                id="submitMessage"
                aria-live="polite"
              >
                Password do not match.
              </p>
            )}
          </div>
          <button
            type="submit"
            className="text-sm font-semibold px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300"
            role="button"
            aria-controls="submitMessage"
            aria-label="Register Button"
          >
            Log In
          </button>
        </form>

        <p className="mt-4" tabIndex="0">
          Do not have an account?{" "}
          <span>
            <Link
              to="/register"
              className="text-blue-600 hover:underline underline-offset-2"
            >
              Register
            </Link>
          </span>
        </p>
      </main>
    </Fragment>
  );
};

export default Login;
