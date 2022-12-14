import React, { useContext } from "react";
import { themeContext } from "../pages";

export default function ThemeToggle() {
  const themeData = useContext(themeContext);

  return (
    <button
      onClick={themeData.toggleTheme}
      style={{ backgroundColor: themeData.colors.color }}
    >
      {themeData.theme === "light" ? "🌚" : "🌞"}
    </button>
  );
}
