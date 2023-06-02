import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export function useResponse() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { user } = useAuthContext();

  const response = async () => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`http://localhost:3000/api/survey/${user.email}`, {
      method: "GET",
      headers: { "Content-Type": "application/json",
                 "Authorization": `Bearer ${user.token}`,
            },
    });

    const json = await response.json();
    return json;
  };
  return { response, isLoading, error };
}
