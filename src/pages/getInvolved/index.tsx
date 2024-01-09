import PageLayout from "~/components/common/PageLayout";
import OurCommunity from "~/components/common/OurCommunity";
import PageTitleSection from "~/components/common/PageTitleSection";
import ContentContainer from "~/components/common/ContentContainer";
import SignUpSection from "~/components/getInvolved/SignUpSection";
import Statistics from "~/components/getInvolved/Statistics";

export default function GetInvolved() {
    return (
        <PageLayout>
            <PageTitleSection title={"Get Involved"}>
                <p>Pariatur irure consequat consectetur aliquip ad ea laborum exercitation. Cillum nisi aliquip tempor Lorem. Aliquip est ea non minim. Velit occaecat nulla excepteur dolore nisi sit ex incididunt laborum aliquip. Aliquip esse dolore eiusmod velit ipsum eiusmod incididunt id exercitation voluptate duis adipisicing minim occaecat.</p>
            </PageTitleSection>
            <ContentContainer>
                <Statistics />
                <SignUpSection />
            </ContentContainer>
            <OurCommunity />
        </PageLayout>
    );
}