import React from "react";

type ThemeT = "light" | "dark";

const updateDocumentClass = (theme: ThemeT) => {
  const root = window.document.documentElement;
  root.classList.remove(theme === "light" ? "dark" : "light");
  root.classList.add(theme);
};

const useDarkTheme = () => {
  const [theme, setTheme] = React.useState<ThemeT>("light");
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };
  React.useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme && localTheme !== theme) {
      updateDocumentClass(localTheme as ThemeT);
      setTheme(localTheme as ThemeT);
      return;
    }
    updateDocumentClass(theme);
  }, [theme]);
  return { theme, toggle };
};

export default useDarkTheme;
