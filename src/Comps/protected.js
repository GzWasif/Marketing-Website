import { useUserContext } from "../Context/userContext";

const Protected = ({ children }) => {
  const user = useUserContext();
  console.log(user);
  if (!user) {
  } else {
    return children;
  }
};

export default Protected;
