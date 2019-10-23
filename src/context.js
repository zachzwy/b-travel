import { createContext } from "react";

const MyContext = createContext({
  featureList: [],
  signup: [false, ""]
});

export default MyContext;
