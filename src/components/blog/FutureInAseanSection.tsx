import React from "react";
import { BlogCard } from "~/components/blog/BlogCard";
import { PageSubSection } from "../common/PageSubSection";
import { type BlogContent } from "~/components/blog/BlogCard";

const TEST_CONTENT: BlogContent[] = [
    {
        title: "Title goes here",
        date: new Date(),
    },
    {
        title: "Title goes here",
        date: new Date(),
    },
    {
        title: "Title goes here",
        date: new Date(),
    },
    {
        title: "Title goes here",
        date: new Date(),
    },
    {
        title: "Title goes here",
        date: new Date(),
    },
    {
        title: "Title goes here",
        date: new Date(),
    },
];

export const FutureInAseanSection = () => {
    return (
        <PageSubSection title={"A Future in ASEAN Series"}>
            <div className="grid grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2 md:gap-y-6 lg:grid-cols-3 lg:gap-y-8">
                {TEST_CONTENT.map((content) => (
                    <BlogCard key={content.title} {...content} />
                ))}
            </div>
        </PageSubSection>
    );
};
