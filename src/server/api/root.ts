import { blogRouter } from "~/server/api/routers/blogRouter";
import { createTRPCRouter } from "~/server/api/trpc";
import { teamRouter } from "./routers/teamRouter";
import { tagRouter } from "./routers/tagRouter";
import { testimonialRouter } from "./routers/testimonialRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  blog: blogRouter,
  team: teamRouter,
  tag: tagRouter,
  testimonial: testimonialRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
