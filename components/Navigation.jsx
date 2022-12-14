import React, { useContext } from "react";
import { themeContext } from "../pages";
import ThemeToggle from "./ThemeToggle";

export default function Navigation(props) {
  const themeData = useContext(themeContext);
  return (
    <nav style={{ backgroundColor: themeData.colors.backgroundColor }}>
      <ThemeToggle />
    </nav>
  );
}
