import { useTheme } from "../pages";

export default function ThemeToggle() {
  const { colors, toggleTheme, theme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{ backgroundColor: colors.color }}>
      {theme === "light" ? "🌚" : "🌞"}
    </button>
  );
}
