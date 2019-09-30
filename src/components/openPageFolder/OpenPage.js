import React, { useContext } from "react";
import Nav from "./Nav";
import Signup from "./Signup";
import travelLogo from "./../../assets/brex-travel-logo.svg";
import MyContext from "../../context";

const OpenPage = () => {
  const { state } = useContext(MyContext);
  const { signupSuccess } = state;

  return (
    <div className="open-page">
      <Nav />
      <div className="open-page-image">
        <img
          src={travelLogo}
          alt="this is brex travel logo"
          width="130px"
          height="100px"
        />
      </div>
      <div className="open-page-title">
        Earn 4x on Travel or UsePoints to Pay
      </div>
      <Signup />
      {signupSuccess[0] && (
        <div className="sign-up-success">{signupSuccess[1]}</div>
      )}
    </div>
  );
};

export default OpenPage;
