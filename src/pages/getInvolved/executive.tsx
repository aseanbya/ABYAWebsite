import ContentContainer from "~/components/common/ContentContainer";
import PageLayout from "~/components/common/PageLayout";
import PageTitleSection from "~/components/common/PageTitleSection";
import Heading3 from "~/components/common/textStyles/Heading3";
import { ApplicationForm } from "~/components/getInvolved/ApplicationForm";
import ExecutiveRoles from "~/components/getInvolved/executive/ExecutiveRoles";
import ExecutiveStatistics from "~/components/getInvolved/executive/ExecutiveStatistics";

export default function Home() {
    return (
        <PageLayout>
            <PageTitleSection title={"Join ABYA Executive"}>
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
                <ExecutiveStatistics />
                <Heading3 className="">Get to know each role</Heading3>
                <ExecutiveRoles />
                <ApplicationForm />
            </ContentContainer>
        </PageLayout>
    );
}
