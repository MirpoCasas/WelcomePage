'use client'

import React , { useContext, useState } from "react";
type LangContextProviderProps = {
  children: React.ReactNode;
};

type Lang = "en" | "es";

type LangContextType = {
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
};


const LangContext = React.createContext<LangContextType | null>(null);

export function LangProvider({ children } : LangContextProviderProps) {
  
  const [lang, setLang] = useState<Lang>("en");
  
  
  return (
    <LangContext.Provider value={{lang, setLang}}>
        {children}
    </LangContext.Provider>
  );
}

export function useLangContext() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLangContext must be used within a LangProvider");
  }
  return context;
}

