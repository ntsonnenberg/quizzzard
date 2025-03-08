"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ToggleTheme() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const ls = typeof window !== "undefined" ? window.localStorage : null;
    const initialTheme = ls?.getItem("theme") || "light";
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return <ThemeButton onModeChange={toggleTheme} currentTheme={theme} />;
}

interface Btn10Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  showLabel?: boolean;
  currentTheme: string;
  onModeChange?: (mode: string) => void;
}

function ThemeButton({
  className,
  showLabel = false,
  currentTheme,
  onModeChange,
  ...props
}: Btn10Props) {
  const [mode, setMode] = useState<string>(currentTheme);

  const handleClick = () => {
    const modes: string[] = ["light", "dark"];
    const currentIndex = modes.indexOf(mode);
    const nextMode = modes[(currentIndex + 1) % modes.length];
    setMode(nextMode);
    onModeChange?.(nextMode);
  };

  const getIcon = () => {
    switch (mode) {
      case "light":
        return Sun;
      case "dark":
        return Moon;
    }
  };

  const Icon = getIcon();

  return (
    <button
      className={`primary ${
        mode === "light" ? "outline" : "filled"
      } relative group transition-all duration-200 h-8 px-3 text-sm rounded-full ${className}`}
      onClick={handleClick}
      {...props}
    >
      <div className="flex items-center gap-2 transition-all duration-200">
        <Icon
          className="transition-all duration-200 w-3.5 h-3.5
            group-hover:rotate-[-8deg] group-hover:scale-110
            group-active:scale-95"
        />
        {showLabel && <span className="capitalize">{mode}</span>}
      </div>
      <span className="absolute inset-0 bg-linear-to-r from-zinc-500/0 via-zinc-500/10 to-zinc-500/0 translate-x-[-50%] group-hover:translate-x-[50%] transition-transform duration-500 ease-out" />
    </button>
  );
}
