import PocketBase from "pocketbase";

import { PUBLIC_DATABASE } from "$env/static/public";
import type { TypedPocketBase } from "$lib/types/pocketbase-types";

export const pb = new PocketBase(PUBLIC_DATABASE) as TypedPocketBase;
