// src/lib/stores/sidenavOpen.ts
import { writable } from "svelte/store";
import { browser } from "$app/environment";

function createSidenavOpenStore() {
	let initial = true;

	if (browser) {
		const stored = localStorage.getItem("sidenavOpen");

		if (stored === null) {
			// Default based on screen width
			initial = window.innerWidth >= 750;
			localStorage.setItem("sidenavOpen", JSON.stringify(initial));
		} else {
			initial = JSON.parse(stored);
		}
	}

	const store = writable<boolean>(initial);

	if (browser) {
		store.subscribe((value) => {
			localStorage.setItem("sidenavOpen", JSON.stringify(value));
		});
	}

	return store;
}

export const sidenavOpen = createSidenavOpenStore();
