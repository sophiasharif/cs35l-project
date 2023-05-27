import { useAuthContext } from "./useAuthContext";

export function useSignup() {
  const { dispatch } = useAuthContext;

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({type: 'LOGOUT'})
  };

  return {logout}
}
