"use client"
import { createContext, useState, useContext } from 'react';

type SidebarContextValue = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toogleLightTheme: boolean;
  setToogleLightTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SidebarContext = createContext<SidebarContextValue | undefined>(undefined);

export const useSideBarContext = () => {
  const context = useContext(SidebarContext) 
  if (!context) throw new Error('useSideBar must used within a provider')
  return context;
}

export const SidebarProvider = ({ children }: any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [toogleLightTheme, setToogleLightTheme] = useState(false)

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, toogleLightTheme, setToogleLightTheme}}>
      {children}
    </SidebarContext.Provider>
  );
};
