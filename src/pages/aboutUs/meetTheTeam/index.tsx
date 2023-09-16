import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import MeetTheTeam from "~/components/aboutUs/MeetTheTeam";

export default function index() {
    return (
        <PageLayout>
            <ContentContainer>
                <MeetTheTeam />
            </ContentContainer>
        </PageLayout>
    );
}
