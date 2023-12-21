import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const teamRouter = createTRPCRouter({
    getManagement: publicProcedure.query(async ({ ctx }) => {
        const managementPosts = await ctx.db.team.findMany({
            where: {
                level: {
                    contains: "management",
                },
            },
        });
        return managementPosts;
    }),
});