import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import {
  loadAuth,
  saveAuth,
  clearAuth,
} from "../services/authStorageService";
const GlobalContext = createContext(undefined);

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { token, user } = loadAuth();
    setToken(token);
    setUser(user);
  }, []);

  useEffect(() => {
    if (token && user) {
      saveAuth({ token, user });
    }
  }, [token, user]);

  const login = (token, user) => {
    setToken(token);
    setUser(user);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    clearAuth();
  };

  return (
    <GlobalContext.Provider value={{ token, user, login, logout }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const ctx = useContext(GlobalContext);
  if (!ctx) throw new Error("useGlobal debe usarse dentro de <GlobalProvider>");
  return ctx;
}