import { createClient } from "pexels";
import { env } from "../env/client.mjs";

const pexels = createClient(env.NEXT_PUBLIC_PEXELS_API_KEY);

export default pexels;
