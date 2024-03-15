import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard Page</title>
      </Helmet>
      <div className="mt-8">
        <h1 className="text-4xl text-center">Welcome User</h1>
        <p className="text-center mt-4">You are logged in successfully!</p>
        {/* TODO: Logout */}
      </div>
    </>
  );
};

export default Dashboard;
