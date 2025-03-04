// createContext useContext 的使用 以及自定义hook的使用
import { User, getToken } from "api/auth-provider";
import { createContext, useContext, ReactNode, useState } from "react";

import * as auth from "api/auth-provider";
import { useMount } from "utils/use";
export interface AuthForm {
  username: string;
  password: string;
  remember: boolean;
}

// 全局共享的数据
const AuthContext = createContext<
  | {
      user: User | null;
      login: (form: AuthForm) => Promise<void>;
      register: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<null | User>(null);
  useMount(async () => {
    const token = getToken();
    token && auth.getCurrentUser().then(setUser);
  });

  return (
    <AuthContext.Provider
      children={children}
      value={{
        user,
        login: (form: AuthForm) => auth.login(form).then(setUser),
        register: (form: AuthForm) => auth.register(form).then(setUser),
        logout: () => auth.logout().then(() => setUser(null)),
      }}
    />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
