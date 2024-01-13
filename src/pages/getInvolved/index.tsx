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
                <p>At the ASEAN Business Youth Association, we&apos;re always on the lookout for synergies – whether you&apos;re an undergraduate, young professional, or in senior management, we&apos;ve got a place for you.</p>
            </PageTitleSection>
            <ContentContainer>
                <Statistics />
                <SignUpSection />
            </ContentContainer>
            <OurCommunity />
        </PageLayout>
    );
}