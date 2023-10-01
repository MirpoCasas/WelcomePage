'use client'

import React , { useEffect, useContext, useState, use } from "react";
type OverflowContextProviderProps = {
  children: React.ReactNode;
};


type OverflowContextType = {
  overflow: boolean;
  setOverflow: React.Dispatch<React.SetStateAction<boolean>>;
};


const OverflowContext = React.createContext<OverflowContextType | null>(null);

export function OverflowProvider({ children } : OverflowContextProviderProps) {
  
  const [overflow, setOverflow] = useState<boolean>(true);


  useEffect(() => {
    const body :HTMLBodyElement | null = document.querySelector("body");
    if (!body) {
      console.log('No body')
      return
    };
    if (overflow) {
      body.style.overflow = "hidden";
    } else if (!overflow){
      body.style.overflow = "auto";
    }
   }, [overflow]);
  
  
  return (
    <OverflowContext.Provider value={{overflow, setOverflow}}>
        {children}
    </OverflowContext.Provider>
  );
}

export function useOverflowContext() {
  const context = useContext(OverflowContext);
  if (!context) {
    throw new Error("useOverflowContext must be used within a OverflowProvider");
  }
  return context;
}

