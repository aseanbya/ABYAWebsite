import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import MeetTheTeam from "~/components/aboutUs/MeetTheTeam";
import PageTitleSection from "~/components/common/PageTitleSection";

export default function index() {
    return (
        <PageLayout>
            <PageTitleSection title="Meet The Team">
                <h2>
                    Aliquip tempor culpa nulla aliqua ut in commodo non esse
                    mollit quis adipisicing. Ipsum dolor duis pariatur ad Lorem
                    aliquip ex minim aliquip do pariatur ut. Ad sint minim duis
                    mollit culpa. Ea deserunt id ex esse veniam anim et deserunt
                    commodo consectetur laborum id. Reprehenderit exercitation
                    qui dolor magna consectetur proident aliqua nostrud eu
                    aliquip. In consequat amet et deserunt do irure velit tempor
                    ipsum occaecat.
                </h2>
            </PageTitleSection>
            <ContentContainer>
                <MeetTheTeam />
            </ContentContainer>
        </PageLayout>
    );
}
