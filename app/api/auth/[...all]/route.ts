import { auth } from "@/lib/auth"; // Adjusted path
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);
