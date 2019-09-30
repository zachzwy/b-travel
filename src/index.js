import React, { useContext, useReducer, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import MyContext from "./context";
import reducer from "./reducer";
import OpenPage from "./components/openPageFolder/OpenPage";
import FeatureList from "./components/featureListFolder/FeatureList";
import "./style.scss";

const App = () => {
  const initState = useContext(MyContext);
  const [state, dispatch] = useReducer(reducer, initState);

  console.log(state);

  useEffect(() => {
    axios
      .get("https://brex-website-challenge.herokuapp.com/travel-assets")
      .then(res =>
        dispatch({
          type: "FETCH_FEATURELIST",
          payload: res.data
        })
      );
  }, []);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <div className="app">
        <OpenPage />
        <FeatureList />
      </div>
    </MyContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
