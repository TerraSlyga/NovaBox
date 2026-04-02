import { createContext, useContext, useState, useEffect } from "react";

// Створюємо контекст теми
const ThemeContext = createContext();

// Визначаємо кольори для кожної теми
const themes = {
  light: {
    background: "#ffffff",
    text: "#1a1a1a",
    accent: "#dc143c",
    accentDark: "#b91c1c",
    accentLight: "#f5f5f5",
    header: "linear-gradient(135deg, #dc143c 0%, #b91c1c 100%)",
    headerBorder: "#8b0000",
    card: "#f9f9f9",
    cardText: "#333333",
    cardBorder: "#e0e0e0",
    footerBg: "#f5f5f5",
    buttonHover: "#f0f0f0",
    shadow: "rgba(0, 0, 0, 0.15)",
  },
  dark: {
    background: "#1a1a1a",
    text: "#ffffff",
    accent: "#ff6b6b",
    accentDark: "#ff5252",
    accentLight: "#2a2a2a",
    header: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)",
    headerBorder: "#444444",
    card: "#2a2a2a",
    cardText: "#e0e0e0",
    cardBorder: "#444444",
    footerBg: "#2a2a2a",
    buttonHover: "#3a3a3a",
    shadow: "rgba(0, 0, 0, 0.5)",
  },
};

// Провайдер теми
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Завантажуємо тему з localStorage або використовуємо 'light' за замовчуванням
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  // Зберігаємо вибір теми в localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    // Також застосовуємо тему до document для змін на рівні CSS
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = {
    theme,
    toggleTheme,
    colors: themes[theme],
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// Кастомний хук для використання контексту теми
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useTheme мусить використовуватися всередині ThemeProvider",
    );
  }
  return context;
}
