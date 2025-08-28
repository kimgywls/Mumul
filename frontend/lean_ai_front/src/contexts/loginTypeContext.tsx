// contexts/loginTypeContext.js
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type LoginType = 'store' | 'corporation' | 'public' | null;

interface LoginTypeContextType {
  loginType: LoginType;
  setLoginType: (type: LoginType) => void;
  resetLoginType: () => void;
}

const LoginTypeContext = createContext<LoginTypeContextType | undefined>(undefined);

interface LoginTypeProviderProps {
  children: ReactNode;
}

export const LoginTypeProvider = ({ children }: LoginTypeProviderProps) => {
  const [loginType, setLoginType] = useState<LoginType>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("loginType");
    if (saved) setLoginType(saved as LoginType);
  }, []);

  useEffect(() => {
    if (loginType) {
      sessionStorage.setItem("loginType", loginType);
    }
  }, [loginType]);

  const resetLoginType = () => {
    setLoginType(null);
    sessionStorage.removeItem("loginType");
  };

  return (
    <LoginTypeContext.Provider value={{ loginType, setLoginType, resetLoginType }}>
      {children}
    </LoginTypeContext.Provider>
  );
};

export const useLoginType = (): LoginTypeContextType => {
  const context = useContext(LoginTypeContext);
  if (context === undefined) {
    throw new Error('useLoginType must be used within a LoginTypeProvider');
  }
  return context;
};
