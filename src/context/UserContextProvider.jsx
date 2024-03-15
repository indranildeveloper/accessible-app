import { useState } from "react";
import { UserContext } from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const handleSubmit = () => {
    console.log("context");
    // Save data to local storage
  };

  return (
    <UserContext.Provider value={{ user, setUser, handleSubmit }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
