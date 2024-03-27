import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const initialUser =
      JSON.parse(localStorage.getItem("logged-in-user")) ?? {};
    setUser(initialUser);
  }, []);

  const setUserToLocalStorage = (name, userData) => {
    if (!userData) return;
    // Saving users to localStorage for mock backend
    localStorage.setItem(name, JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser({});
    localStorage.setItem("logged-in-user", "{}");
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
