"use client"; // Ensure this runs on the client

import { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface ThemeContextType {
  theme: string;
  popup: string;
  handlePopup: (value: string) => void;
  toggleTheme: () => void;
}

// Create Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create Provider
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");
  const [popup, setpopup] = useState("");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handlePopup = (value: string) => {
    setpopup(value);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, popup, handlePopup }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook to use ThemeContext
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
