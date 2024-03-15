import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="mt-8 flex flex-col gap-4">
      <h1 className="text-4xl text-center font-bold">404, Not Found!</h1>
      <p className="text-lg text-center">
        The page you are looking for does not exists!
      </p>
      <Link
        to="/"
        className="px-4 py-2 mx-auto bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-all"
      >
        Go to Home
      </Link>
    </main>
  );
};

export default NotFoundPage;
