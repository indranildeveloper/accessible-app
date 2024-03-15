import { Fragment, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user, handleLogout } = useContext(UserContext);

  return (
    <Fragment>
      <Helmet>
        <title>Dashboard Page</title>
      </Helmet>
      <main className="mt-8 flex flex-col gap-4">
        <h1 className="text-4xl text-center" role="heading">
          Welcome {user.email}
        </h1>
        <p className="text-center text-lg mt-4">
          You are logged in successfully!
        </p>
        <button
          type="button"
          onClick={handleLogout}
          className="bg-rose-600 text-white w-fit mx-auto mt-4 px-4 py-2 rounded-md hover:bg-rose-500 transition-all"
          role="button"
          aria-describedby="Log Out Button"
        >
          Log Out
        </button>
      </main>
    </Fragment>
  );
};

export default Dashboard;
