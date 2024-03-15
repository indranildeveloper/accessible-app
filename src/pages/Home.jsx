import { Fragment, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { UserContext } from "../context/UserContext";

const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <Fragment>
      <Helmet>
        <title>Welcome to Home Page</title>
      </Helmet>
      <main className="mt-8 text-center">
        <h1 className="text-4xl" role="heading">
          Welcome to Home Page
        </h1>
        {user ? (
          <p>Please go to Product page to continue.</p>
        ) : (
          <p>Please Register or Log In to continue.</p>
        )}
      </main>
    </Fragment>
  );
};

export default HomePage;
