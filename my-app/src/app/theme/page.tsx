"use client";

import { useTheme } from "../components/contextoTheme";

export default function Page() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <h1 className="text-2xl mb-4">Usando context para cambiar modo oscuro y claro</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700"
      >
        Cambiar a {theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
}
