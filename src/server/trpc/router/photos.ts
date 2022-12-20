import { TRPCError } from "@trpc/server";
import { z } from "zod";
import pexels from "../../../utils/pexels";
import type { PhotosWithTotalResults, ErrorResponse } from "pexels";
import { router, publicProcedure } from "../trpc";

export const photoRouter = router({
  getPexelPhotos: publicProcedure
    .input(
      z.object({
        search: z.string(),
        page: z.number(),
      })
    )
    .query(async ({ input }) => {
      try {
        const pexelsPhotos: PhotosWithTotalResults | ErrorResponse =
          await pexels.photos.search({
            query: input.search,
            page: input.page,
            per_page: 50,
          });
        return pexelsPhotos as PhotosWithTotalResults;
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong at server level",
          cause: error,
        });
      }
    }),
});
