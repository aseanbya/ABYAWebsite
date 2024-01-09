import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const hearFromOurCommunityRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.db.hearFromOurCommunity.findMany();
    }),
});