import { createContext } from "react";

const MyContext = createContext({
  featureList: [],
  signupSuccess: [false, ""]
});

export default MyContext;
