import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import OurStory from "~/components/aboutUs/OurStory";

export default function index() {
    return (
        <PageLayout>
            <ContentContainer>
                <OurStory />
            </ContentContainer>
        </PageLayout>
    );
}
