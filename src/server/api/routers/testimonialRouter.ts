import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const testimonialRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.db.testimonial.findMany();
    }),
});