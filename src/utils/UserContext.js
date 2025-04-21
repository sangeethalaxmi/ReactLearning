// context is used to overcome issue of prop drilling
// create context with inital value of global data to be passed

import { createContext } from "react";

const UserContext = createContext({
  loggedUser: "Test User",
});
export default UserContext;
