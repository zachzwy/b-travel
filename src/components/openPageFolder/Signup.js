import React, { useContext, createRef } from "react";
import axios from "axios";
import MyContext from "../../context";

const Signup = () => {
  const myRef = createRef();
  const { dispatch } = useContext(MyContext);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://brex-website-challenge.herokuapp.com/signup", {
        email: myRef.current.value
      })
      .then(res => {
        console.log(res);
        dispatch({
          type: "SIGNUP_SUCCESS"
        });
      })
      .catch(err => {
        dispatch({
          type: "SIGNUP_FAIL",
          payload: "Not correct format"
        });
      });
    myRef.current.value = "";
  };

  return (
    <form className="open-page-signup" onSubmit={handleSubmit}>
      <input
        type="text"
        className="open-page-signup-text"
        placeholder="Email address"
        ref={myRef}
      />
      <div className="open-page-signup-submit" onClick={handleSubmit}>
        SUBMIT
      </div>
    </form>
  );
};

export default Signup;
