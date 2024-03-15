import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user, handleLogout } = useContext(UserContext);

  return (
    <>
      <Helmet>
        <title>Dashboard Page</title>
      </Helmet>
      <div className="mt-8 flex flex-col gap-888">
        <h1 className="text-4xl text-center">Welcome {user.email}</h1>
        <p className="text-center text-lg mt-4">
          You are logged in successfully!
        </p>
        <button
          type="button"
          onClick={handleLogout}
          className="bg-rose-500 text-white w-fit mx-auto mt-4 px-4 py-2 rounded-md hover:bg-rose-400 transition-all"
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default Dashboard;
