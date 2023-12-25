import PageLayout from "~/components/common/PageLayout";
import Heading2 from "~/components/common/textStyles/Heading2";
import ContentContainer from "~/components/common/ContentContainer";
import ExploreTitleSection from "~/components/ourEvent/ABYAExplore/ExploreTitleSection";
import { api } from "~/utils/api";
import { BlogCard } from "~/components/blog/BlogCard";

export default function ABYAExplore() {
    const { data: abyaexploreData } = api.blog.retrieveThree.useQuery({ tag: "ABYA_EXPLORE" });
    return (
        <PageLayout>
            <ExploreTitleSection />
            <ContentContainer>
                <div className="flex flex-col gap-8">
                    <Heading2>What is ABYA Explore?</Heading2>
                    <p>
                        ABYA Explore provides a series of sharing and networking
                        sessions that enable ASEAN youths to engage with, and be
                        inspired, by industry professionals. In line with ABYA’s
                        commitment to its vision and mission, ABYA Explore was conducted
                        in the form of webinars, small-group networking sessions with
                        professionals and business leaders in ASEAN. ABYA Explore
                        imparts insights and knowledge to the youth on current industry
                        trends across ASEAN. By gaining different perspectives on these
                        issues, ABYA hopes to broaden the youths’ macro-knowledge of
                        business and cultures of the region.
                    </p>
                    <Heading2 className="capitalize">
                        See the previous events
                    </Heading2>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2 md:gap-y-6 lg:grid-cols-3 lg:gap-y-8">
                        {abyaexploreData?.map((blog) => (<BlogCard key={blog.id} date={blog.createdAt} title={blog.title} href={blog.title} image={blog.image ?? ""} imageAlt={blog.title} />))}
                    </div>
                </div>
            </ContentContainer>
        </PageLayout>
    );
}