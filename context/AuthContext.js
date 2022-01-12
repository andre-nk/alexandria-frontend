import { onAuthStateChanged } from "firebase/auth";
import { createContext, useReducer, useEffect } from "react";
import { projectAuth } from "../firebase/config";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "AUTH_IS_READY":
      return {
        user: action.payload,
        authIsReady: true,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(projectAuth, (user) => {
      //CALL NATIVE API AND FORM A DESIRED USER STRUCT THEN PASS IT AS A PAYLOAD

      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsubscribe();
    });
  }, []);

  console.log(state.user.photoURL);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
