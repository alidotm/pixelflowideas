import { router } from "../trpc";
import { authRouter } from "./auth";
import { photoRouter } from "./photos";

export const appRouter = router({
  photo: photoRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
