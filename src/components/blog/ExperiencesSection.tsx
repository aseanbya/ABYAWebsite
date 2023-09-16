import React from "react";
import { PageSubSection } from "../common/PageSubSection";
import { BlogGrid } from "./BlogGrid";
import { BLOG_CONTENT } from "../details/BlogDetails";

export const ExperiencesSection = () => {
    return (
        <PageSubSection title={"Experiences"} titleLink="/blog/experiences">
            <BlogGrid content={BLOG_CONTENT} contentType="blog" length={6} />
        </PageSubSection>
    );
};
