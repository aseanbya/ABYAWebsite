import type { TagTag } from "@prisma/client";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const blogRouter = createTRPCRouter({
    retrieveThree: publicProcedure
        .input(
            z.object({
                tag: z.string(),
            }),
        )
        .query(async ({ ctx, input }) => {
            const { tag } = input;
            const post = await ctx.db.blog.findMany({
                where: {
                    tags: {
                        some: {
                            tag: {
                                equals: tag as TagTag,
                            },
                        },
                    },
                },
                take: 3,
            });
            if (!post || post.length === 0) {
                throw new Error("Posts not found for this tag");
            }
            return post;  // No need for await here
        }),
    getAll: publicProcedure
        .input(
            z.object({
                tag: z.string(),
            }),
        )
        .query(async ({ ctx, input }) => {
            const { tag } = input;
            const post = await ctx.db.blog.findMany({
                where: {
                    tags: {
                        some: {
                            tag: {
                                equals: tag as TagTag,
                            },
                        },
                    },
                },
            });
            if (!post || post.length === 0) {
                throw new Error("Posts not found for this tag");
            }
            return post;  // No need for await here
        }),
    readByTitle: publicProcedure
        .input(
            z.object({
                title: z.string(),
            }),
        )
        .query(async ({ ctx, input }) => {
            // const { title } = input;
            const post = await ctx.db.blog.findUnique({
                where: { title: input.title, },
            });
            if (!post) {
                throw new Error("Post not found");
            }
            return post;
        }),
    getAllTypes: publicProcedure
        .query(async ({ ctx, input }) => {
            const post = await ctx.db.blog.findMany(
                {
                    include: {
                        tags: true,
                    },
                }
            );
            if (!post || post.length === 0) {
                throw new Error("Posts not found for this tag");
            }
            return post;  // No need for await here
        }),
});


