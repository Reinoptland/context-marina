import React from "react";

export default function ThemeToggle(props) {
  return (
    <button
      onClick={props.toggleTheme}
      style={{ backgroundColor: props.colors.color }}
    >
      {props.theme === "light" ? "🌚" : "🌞"}
    </button>
  );
}
