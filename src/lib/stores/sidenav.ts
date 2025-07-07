import { writable } from "svelte/store";
import { browser } from '$app/environment';

export type NavItem = {
  label: string;
  collapsed: boolean;         // niet optioneel, altijd boolean
  href?: string;
  children?: NavItem[];
  navigateOnToggle?: boolean; // nieuw, default false
};

const initialNavTree: NavItem[] = [
  { label: "Home", collapsed: false, href: "/" },
  { label: "Get started", collapsed: false, href: "/get-started/" },
  {
    label: "Foundations",
    collapsed: true,
    href: "/foundations",
    children: [
      {
        label: "Tokens",
        collapsed: true,
        children: [
          { label: "Colors", collapsed: false, href: "/" },
          { label: "Spaces", collapsed: false, href: "/" }
        ]
      },
      { label: "Typography", collapsed: false, href: "/" }
    ]
  },
  {
    label: "Components",
    collapsed: true,
    children: [
      { label: "Buttons", collapsed: false, href: "/" },
      { label: "Test", collapsed: false, href: "/" }
    ]
  }
];

type WithTimestamp<T> = {
  value: T;
  timestamp: number;
};

function persistStore<T>(key: string, initialValue: T, maxAgeMs = 24 * 60 * 60 * 1000) {
  let storedValue: T = initialValue;

  if (browser) {
    const raw = localStorage.getItem(key);
    if (raw) {
      try {
        const parsed: WithTimestamp<T> = JSON.parse(raw);
        const age = Date.now() - parsed.timestamp;
        if (age <= maxAgeMs) {
          storedValue = parsed.value;
        }
      } catch {
        // malformed → ignore
      }
    }
  }

  const store = writable<T>(storedValue);

  if (browser) {
    store.subscribe((val) => {
      try {
        const toSave: WithTimestamp<T> = {
          value: val,
          timestamp: Date.now()
        };
        localStorage.setItem(key, JSON.stringify(toSave));
      } catch {
        // ignore errors
      }
    });
  }

  return store;
}

export const navTree = persistStore<NavItem[]>("navTree", initialNavTree);
export const selectedHref = persistStore<string | null>("selectedHref", null);
