import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export function useResults() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { user } = useAuthContext();

  const result = async () => {
    setIsLoading(true);
    setError(null);

    const responses = await fetch("https://friemacs-backend.onrender.com/api/survey/", {
      method: "GET",
      headers: { "Content-Type": "application/json",
                 "Authorization": `Bearer ${user.token}`,
            },
    });

    const json = await responses.json();
    console.log("RESPONSES: ", json);
    return json;
  };
  return { result, isLoading, error };
}
