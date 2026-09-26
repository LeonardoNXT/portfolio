"use client";

import { useSyncExternalStore } from "react";

const storageKey = "portfolio-theme";
const changeEvent = "portfolio-theme-change";
type Theme = "light" | "dark";

function getTheme(): Theme {
  const preference = document.documentElement.dataset.theme;
  if (preference === "light" || preference === "dark") return preference;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function subscribe(onChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const syncStorage = (event: StorageEvent) => {
    if (event.key !== storageKey && event.key !== null) return;
    if (event.newValue === "light" || event.newValue === "dark") {
      document.documentElement.dataset.theme = event.newValue;
    } else {
      delete document.documentElement.dataset.theme;
    }
    onChange();
  };

  media.addEventListener("change", onChange);
  window.addEventListener(changeEvent, onChange);
  window.addEventListener("storage", syncStorage);
  return () => {
    media.removeEventListener("change", onChange);
    window.removeEventListener(changeEvent, onChange);
    window.removeEventListener("storage", syncStorage);
  };
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light" as Theme);
  const toggleTheme = () => {
    const next = getTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      // The current page still changes theme when browser storage is unavailable.
    }
    window.dispatchEvent(new Event(changeEvent));
  };
  return { theme, toggleTheme };
}
