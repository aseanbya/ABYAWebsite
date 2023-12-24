import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const teamRouter = createTRPCRouter({
    getManagement: publicProcedure.query(async ({ ctx }) => {
        return await ctx.db.team.findMany({
            where: {
                level: {
                    equals: "MANAGEMENT",
                },
            },
        });
    }),
    getExecutives: publicProcedure.query(async ({ ctx }) => {
        return await ctx.db.team.findMany({
            where: {
                level: {
                    equals: "EXECUTIVES",
                },
            },
        });
    }),
    getAdvisoryBoard: publicProcedure.query(async ({ ctx }) => {
        return await ctx.db.team.findMany({
            where: {
                level: {
                    equals: "ADVISORYBOARD",
                },
            },
        });
    }),
});