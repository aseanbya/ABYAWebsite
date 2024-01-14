import React from "react";
import dynamic from "next/dynamic";
import PageLayout from "~/components/common/PageLayout";
import Heading2 from "~/components/common/textStyles/Heading2";
import PageTitleSection from "~/components/common/PageTitleSection";
import ContentContainer from "~/components/common/ContentContainer";

import { api } from "~/utils/api";
import { BlogCard } from "~/components/blog/BlogCard";

export default function blog() {
    const { data } = api.blog.getAllTypes.useQuery();
    const PDF = dynamic(() => import("~/components/blog/AnnualImpactReport2022"), {
        ssr: false,
    });

    return (
        <PageLayout>
            <PageTitleSection title={"Blog"}>
                <p>Take a read to find out more about the latest happenings within the ASEAN Business Youth Association! – We've got opinion pieces, event roundups, as well as current affairs news within the ASEAN region.</p>
            </PageTitleSection>
            <ContentContainer>
                <div className="flex flex-col gap-8">
                    <Heading2 className="uppercase">Annual Impact Report</Heading2>
                    <PDF />
                    <Heading2 className="uppercase">Blogs</Heading2>
                    <div className="mb-8 flex flex-col gap-8">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2 md:gap-y-6 lg:grid-cols-3 lg:gap-y-8">
                            {data?.map((blog) => (<BlogCard key={blog.id} date={blog.createdAt} title={blog.title} image={blog.image ?? ""} href={blog.title} imageAlt={blog.title} summary={blog.summary ?? ""} />))}
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </PageLayout>
    );
}