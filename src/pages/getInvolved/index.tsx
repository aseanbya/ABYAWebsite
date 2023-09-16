import PageLayout from "~/components/common/PageLayout";
import OurCommunity from "~/components/common/OurCommunity";
import PageTitleSection from "~/components/common/PageTitleSection";
import ContentContainer from "~/components/common/ContentContainer";
import SignUpSection from "~/components/getInvolved/SignUpSection";
import Statistics from "~/components/getInvolved/Statistics";

export default function getInvolved() {
    return (
        <PageLayout>
            <PageTitleSection title={"Get Involved"}>
                <h2>
                    Amet ex ipsum adipisicing. Consectetur veniam officia
                    pariatur officia in et dolor ex sint consectetur. Dolor
                    aliqua ipsum et labore est. Enim ea tempor quis sint eu non
                    commodo non id anim id non laborum labore. Veniam consequat
                    pariatur duis. Dolor ut laborum in et esse anim commodo eu
                    minim pariatur officia pariatur sit non. Sit aliquip anim
                    sunt eiusmod proident labore Lorem est sit aliqua sunt minim
                    minim occaecat ut.
                </h2>
            </PageTitleSection>
            <ContentContainer>
                <Statistics />
                <SignUpSection />
            </ContentContainer>
            <OurCommunity />
        </PageLayout>
    );
}
