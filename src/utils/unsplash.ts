import { createApi } from "unsplash-js";
import { env } from "../env/client.mjs";

const unsplash = createApi({
  accessKey: env.NEXT_PUBLIC_UNSPLASH_ACCESSKEY,
});

export default unsplash;
