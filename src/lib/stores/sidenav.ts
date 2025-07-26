import { writable } from "svelte/store";
import { browser } from "$app/environment";

export type NavItem = {
	label: string;
	collapsed: boolean;
	href?: string;
	children?: NavItem[];
	navigateOnToggle?: boolean;
};

const NAVTREE_VERSION = 1;

const initialNavTree: NavItem[] = [
	{ label: "Home", collapsed: false, href: "/" },
	{ label: "Get started", collapsed: false, href: "/get-started/" },
	{
		label: "Foundations",
		collapsed: true,
		children: [
			{
				label: "Tokens",
				collapsed: false,
				href: "/foundations/tokens/"
			},
			{
				label: "Accessibility",
				collapsed: false,
				href: "/foundations/accessibility/"
			},
			{
				label: "Icons",
				collapsed: false,
				href: "/foundations/icons/"
			},
		]
	},
	{
		label: "Components",
		collapsed: true,
		children: [
			{
				label: "Buttons",
				collapsed: true,
				children: [{ label: "Button", collapsed: false, href: "/components/buttons/button/" }]
			},
			{
				label: "Inputs",
				collapsed: true,
				children: [{ label: "Dropdown", collapsed: false, href: "/components/inputs/dropdown/" }]
			}
		]
	}
];

type WithTimestamp<T> = {
	value: T;
	timestamp: number;
	version: number;
};

function persistStore<T>(key: string, initialValue: T, maxAgeMs = 24 * 60 * 60 * 1000, version = 1) {
	let storedValue: T = initialValue;

	if (browser) {
		const raw = localStorage.getItem(key);
		if (raw) {
			try {
				const parsed: WithTimestamp<T> = JSON.parse(raw);
				const age = Date.now() - parsed.timestamp;
				if (age <= maxAgeMs && parsed.version === version) {
					storedValue = parsed.value;
				}
			} catch {
				storedValue = initialValue;
			}
		}
	}

	const store = writable<T>(storedValue);

	if (browser) {
		store.subscribe((val) => {
			try {
				const toSave: WithTimestamp<T> = {
					value: val,
					timestamp: Date.now(),
					version
				};
				localStorage.setItem(key, JSON.stringify(toSave));
			} catch {
				console.error(`Failed to save store ${key} to localStorage`, val);
			}
		});
	}

	return store;
}

export const navTree = persistStore<NavItem[]>("navTree", initialNavTree, undefined, NAVTREE_VERSION);

export const selectedHref = persistStore<string | null>("selectedHref", null);
