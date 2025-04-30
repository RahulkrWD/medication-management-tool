import React, { createContext, useCallback, useEffect, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const saveTheme = JSON.parse(localStorage.getItem("theme")) || false;
  const [theme, setTheme] = useState(saveTheme);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  const themeChanger = useCallback(() => {
    setTheme((prev) => !prev);
  });
  return (
    <ThemeContext.Provider value={{ theme, themeChanger }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
