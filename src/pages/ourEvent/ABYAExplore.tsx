import { BlogGrid } from "~/components/blog/BlogGrid";
import { BLOG_CONTENT } from "~/components/details/BlogDetails";
import PageLayout from "~/components/common/PageLayout";
import Heading2 from "~/components/common/textStyles/Heading2";
import ContentContainer from "~/components/common/ContentContainer";
import ExploreTitleSection from "~/components/ourEvent/ABYAExplore/ExploreTitleSection";

export default function ABYAExplore() {
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
                    <Heading2>See the previous events</Heading2>
                    <BlogGrid content={BLOG_CONTENT} contentType="explore" length={3} />
                </div>
            </ContentContainer>
        </PageLayout>
    );
}
