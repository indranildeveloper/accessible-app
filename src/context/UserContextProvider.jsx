import { useState } from "react";
import { UserContext } from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const setUserToLocalStorage = (userData) => {
    console.log(userData);
    if (Object.keys(user).length === 0) return;

    localStorage.setItem("user", JSON.stringify(userData));
  };

  return (
    <UserContext.Provider value={{ user, setUser, setUserToLocalStorage }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
