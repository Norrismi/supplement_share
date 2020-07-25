const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Login Error!");
      return {
        ...state,
        authError: "Login Failed",
      };

    case "LOGIN_SUCCESS":
      console.log("Login Success!");
      return {
        ...state,
        authError: null,
      };

    case "SIGNUP_SUCCESS":
      console.log("Signup success!");
      return{
        ...state,
        authError: null,

      }
    case "SIGNUP_ERROR":
      console.log("Signup error!")
      return {
        ...state,
        authError: action.err.message

      }

      case "SIGNOUT_SUCCESS":
        console.log("Signout Success!");
        return {
            ...state,
            
        }

    default:
      return state;
  }
};

export default authReducer;
