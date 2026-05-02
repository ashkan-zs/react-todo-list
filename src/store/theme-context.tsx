import React, { PropsWithChildren, useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

type themeContextType = {
  theme: ThemeMode;
  toggleThemeMode: () => void;
};

export const ThemeContext = React.createContext<themeContextType>({
  theme: "light",
  toggleThemeMode: () => {},
});

const ThemeContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode === "light" || savedMode === "dark") {
      setThemeMode(savedMode);
    }
  }, []);

  const toggleThemeModeHandler = () => {
    const newMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newMode);
    localStorage.setItem("themeMode", newMode);
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
