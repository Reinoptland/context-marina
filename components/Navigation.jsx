import React from "react";
import { useTheme } from "../pages";
import ThemeToggle from "./ThemeToggle";

export default function Navigation(props) {
  const { colors } = useTheme();

  return (
    <nav style={{ backgroundColor: colors.backgroundColor }}>
      <ThemeToggle />
    </nav>
  );
}
