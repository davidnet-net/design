import { writable } from "svelte/store";

const initial =
	typeof localStorage !== "undefined" && localStorage.getItem("sidebarOpen") === "true";

export const sidebarOpen = writable<boolean>(initial);

sidebarOpen.subscribe((value: boolean) => {
	if (typeof localStorage !== "undefined") {
		localStorage.setItem("sidebarOpen", value.toString());
	}
});
