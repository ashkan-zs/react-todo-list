import React, { PropsWithChildren, useEffect, useState } from "react";

type themeContextType = {
  theme: string;
  toggleThemeMode: () => void;
};

export const ThemeContext = React.createContext<themeContextType>({
  theme: "",
  toggleThemeMode: () => {},
});

const ThemeContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [themeMode, setThemeMode] = useState<string>("light");

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setThemeMode(savedMode);
    }
  }, []);

  const toggleThemeModeHandler = () => {
    const newMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  const contextValue: themeContextType = {
    theme: themeMode,
    toggleThemeMode: toggleThemeModeHandler,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
