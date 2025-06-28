import {   useContext, createContext, useEffect, useState } from "react";
import {
  loadAuth,
  saveAuth,
  clearAuth,
} from "../services/authStorageService";



type GlobalContextType = {
  token: string | null;
  user: any;
  login: (token: string, user: any) => void;
  logout: () => void;
};

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

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
  