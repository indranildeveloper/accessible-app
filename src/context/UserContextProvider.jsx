import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const initialUser = JSON.parse(localStorage.getItem("user")) ?? {};
    setUser(initialUser);
  }, []);

  const setUserToLocalStorage = (userData) => {
    if (!userData) return;
    // Saving users to localStorage for mock backend
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser({});
    localStorage.setItem("user", "{}");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        setUserToLocalStorage,
        handleLogout,
        chatMessages,
        setChatMessages,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
