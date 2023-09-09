import React from "react";
import { PageSubSection } from "../common/PageSubSection";
import { BlogGrid } from "./BlogGrid";
import { BLOG_CONTENT } from "../details/BlogDetails";

export const FutureInAseanSection = () => {
    return (
        <PageSubSection
            title={"A Future in ASEAN Series"}
            titleLink="/blog/futureInAsean"
        >
            <BlogGrid content={BLOG_CONTENT} contentType="aseanSeries" />
        </PageSubSection>
    );
};
