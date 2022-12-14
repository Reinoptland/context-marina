import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navigation(props) {
  return (
    <nav style={{ backgroundColor: props.colors.backgroundColor }}>
      <ThemeToggle
        colors={props.colors}
        toggleTheme={props.toggleTheme}
        theme={props.theme}
      />
    </nav>
  );
}
