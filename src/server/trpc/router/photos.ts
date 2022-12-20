import { TRPCError } from "@trpc/server";
import { z } from "zod";
import pexels from "../../../utils/pexels";
import type { PhotosWithTotalResults, ErrorResponse } from "pexels";
import { router, publicProcedure } from "../trpc";
import unsplash from "../../../utils/unsplash";

export const photoRouter = router({
  getPexelPhotos: publicProcedure
    .input(
      z.object({
        search: z.string(),
        page: z.number(),
      })
    )
    .query(async ({ input }) => {
      if (input?.search === "") return;

      try {
        const pexelsPhotos: PhotosWithTotalResults | ErrorResponse =
          await pexels.photos.search({
            query: input.search,
            page: input.page,
            per_page: 15,
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

  getUnsplashPhotos: publicProcedure
    .input(
      z.object({
        search: z.string(),
        page: z.number(),
      })
    )
    .query(async ({ input }) => {
      if (input?.search === "") return;

      try {
        const unsplashPhotos = await unsplash.search.getPhotos({
          page: input.page,
          perPage: 15,
          query: input.search,
        });

        return unsplashPhotos;
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong at server level",
          cause: error,
        });
      }
    }),
});
