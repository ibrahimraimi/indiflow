import { writable, type Writable } from "svelte/store";
import type { UserAuthModel } from "../../app";

export const userStore: Writable<UserAuthModel | undefined> = writable(undefined);
