const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_FEATURELIST":
      return {
        ...state,
        featureList: action.payload
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        signupSuccess: [true, "Sign up successfully"]
      };
    case "SIGNUP_FAIL":
      return {
        ...state,
        signupSuccess: [true, action.payload]
      };
    default:
      return new Error();
  }
};

export default reducer;
