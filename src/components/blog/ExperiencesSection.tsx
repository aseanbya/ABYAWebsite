import React from "react";
import { PageSubSection } from "../common/PageSubSection";
import { type BlogContent } from "~/components/blog/BlogCard";
import { BlogGrid } from "./BlogGrid";

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

export const ExperiencesSection = () => {
    return (
        <PageSubSection title={"Experiences"}>
            <BlogGrid content={TEST_CONTENT} />
        </PageSubSection>
    );
};
