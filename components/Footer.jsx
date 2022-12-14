import React from "react";
import styles from "../styles/Home.module.css";
import ThemeToggle from "./ThemeToggle";

export default function Footer({ colors }) {
  return (
    <footer className={styles.footer} style={{ color: colors.color }}>
      Made with ❤️ by Rein
      <ThemeToggle />
    </footer>
  );
}
