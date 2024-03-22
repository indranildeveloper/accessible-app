import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";

const Product = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Product Page</title>
      </Helmet>
      <main className="flex w-full">
        <Sidebar />
        <div className="w-full h-full">
          <ChatWindow />
          <ChatInput />
        </div>
      </main>
    </Fragment>
  );
};

export default Product;
