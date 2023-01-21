import { createContext, useContext } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebase";

// localStorage.setItem("lastname", "Smith");
// localStorage.getItem("lastname");

const UserContext = createContext();

const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  // const [user] = useAuthState(auth);
  const user = localStorage.getItem("user");

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export { useUserContext, UserContextProvider };
