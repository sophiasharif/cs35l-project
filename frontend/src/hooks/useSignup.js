import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export function useSignup() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (name, email, password) => {
    setIsLoading(true);
    setError(null);
    
    let my_body = JSON.stringify({ name, email, password });
    const response = await fetch("https://friemacs-backend.onrender.com/api/user/signup", {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: my_body,
    });
    //console.log('RESPONSE \n', response)

    const json = await response.json();

    //console.log('JSON\n', json)

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update auth context
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };

  //console.log("Error from useSignup.js: ")
  //console.log(error)
  return { signup, isLoading, error };
}
