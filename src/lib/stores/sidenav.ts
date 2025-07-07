import { writable } from "svelte/store";
import { browser } from '$app/environment';

export type NavItem = {
  label: string;
  collapsed?: boolean;
  href?: string;
  children?: NavItem[];
};

const initialNavTree: NavItem[] = [
  {
    label: "Foundations",
    collapsed: true,
    children: [
      {
        label: "Tokens",
        collapsed: true,
        children: [
          { label: "Colors", href: "/" },
          { label: "Spaces", href: "/" }
        ]
      },
      { label: "Typography", href: "/" }
    ]
  },
  {
    label: "Components",
    collapsed: true,
    children: [
      { label: "Buttons", href: "/" },
      { label: "Test", href: "/" }
    ]
  },
  { label: "Home", href: "/" },
  { label: "test", href: "/" }
];

function persistStore<T>(key: string, initialValue: T) {
  let storedValue: T = initialValue;

  if (browser) {
    const initialSerialized = JSON.stringify(initialValue);
    const storedSerialized = localStorage.getItem(key);

    if (storedSerialized !== initialSerialized) {
      localStorage.setItem(key, initialSerialized);
      storedValue = initialValue;
    } else {
      try {
        storedValue = storedSerialized ? JSON.parse(storedSerialized) : initialValue;
      } catch {
        storedValue = initialValue;
      }
    }
  }

  const store = writable<T>(storedValue);

  if (browser) {
    store.subscribe((val) => {
      try {
        localStorage.setItem(key, JSON.stringify(val));
      } catch {
        // ignore errors
      }
    });
  }

  return store;
}

export const navTree = persistStore<NavItem[]>("navTree", initialNavTree);
export const selectedHref = persistStore<string | null>("selectedHref", null);
