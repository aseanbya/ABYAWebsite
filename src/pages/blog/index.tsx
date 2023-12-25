import React from "react";
import PageLayout from "~/components/common/PageLayout";
import PageTitleSection from "~/components/common/PageTitleSection";
import { ImpactReportSection } from "../../components/blog/ImpactReportSection";
import ContentContainer from "~/components/common/ContentContainer";
import Heading2 from "~/components/common/textStyles/Heading2";
import BlueBorderButton from "~/components/common/buttons/BlueBorderButton";
import { api } from "~/utils/api";
import { BlogCard } from "~/components/blog/BlogCard";

export default function blog() {
    const { data: experiencesData } = api.blog.retrieveThree.useQuery({ tag: "EXPERIENCES" });
    const { data: prannouncementData } = api.blog.retrieveThree.useQuery({ tag: "PR_ANNOUNCEMENT" });
    const { data: futureinaseanData } = api.blog.retrieveThree.useQuery({ tag: "A_FUTURE_IN_ASEAN_SERIES" });
    return (
        <PageLayout>
            <PageTitleSection title={"Blog"}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum mauris, scelerisque sed justo vel, hendrerit sagittis odio. Vestibulum quis convallis augue. Pellentesque vel viverra neque, eget aliquet nunc. Vivamus ornare sit amet ipsum ac consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </PageTitleSection>
            <ContentContainer>
                <div className="mb-8 flex flex-col gap-8">
                    <ImpactReportSection />
                    <Heading2 className="uppercase">Experiences</Heading2>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2 md:gap-y-6 lg:grid-cols-3 lg:gap-y-8">
                        {experiencesData?.map((blog) => (<BlogCard key={blog.id} date={blog.createdAt} title={blog.title} image={blog.image as string} imageAlt={blog.title} />))}
                    </div>
                    <div className="flex w-full justify-center pb-6">
                        <BlueBorderButton type={"button"} href="/blog/experiences">See More</BlueBorderButton>
                    </div>

                    <Heading2 className="uppercase">PR Announcement</Heading2>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2 md:gap-y-6 lg:grid-cols-3 lg:gap-y-8">
                        {prannouncementData?.map((blog) => (<BlogCard key={blog.id} date={blog.createdAt} title={blog.title} image={blog.image as string} imageAlt={blog.title} />))}
                    </div>
                    <div className="flex w-full justify-center pb-6">
                        <BlueBorderButton type={"button"} href="/blog/prannouncement">See More</BlueBorderButton>
                    </div>

                    <Heading2 className="uppercase">A Future in ASEAN Series</Heading2>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2 md:gap-y-6 lg:grid-cols-3 lg:gap-y-8">
                        {futureinaseanData?.map((blog) => (<BlogCard key={blog.id} date={blog.createdAt} title={blog.title} image={blog.image as string} imageAlt={blog.title} />))}
                    </div>
                    <div className="flex w-full justify-center">
                        <BlueBorderButton type={"button"} href="/blog/futureInAsean">See More</BlueBorderButton>
                    </div>
                </div>
            </ContentContainer>
        </PageLayout>
    );
}