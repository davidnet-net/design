import { writable } from "svelte/store";

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
      { label: "Colors", href: "/foundations/colors" },
      { label: "Typography", href: "/foundations/typography" }
    ]
  },
  {
    label: "Components",
    collapsed: true,
    children: [
      { label: "Buttons", href: "/components/buttons" },
      { label: "Test", href: "/components/test" }
    ]
  },
  {
    label: "Home",
    href: "/"
  }
];

// Helper to persist store in localStorage
function persistStore<T>(key: string, initialValue: T) {
  let storedValue: T;
  try {
    const json = localStorage.getItem(key);
    storedValue = json ? JSON.parse(json) : initialValue;
  } catch {
    storedValue = initialValue;
  }

  const store = writable<T>(storedValue);

  store.subscribe((val) => {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch {
      // ignore
    }
  });

  return store;
}

export const navTree = persistStore<NavItem[]>("navTree", initialNavTree);
export const selectedHref = persistStore<string | null>("selectedHref", null);
