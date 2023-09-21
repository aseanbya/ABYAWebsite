import ContentContainer from "~/components/common/ContentContainer";
import PageLayout from "~/components/common/PageLayout";
import { ApplicationForm } from "~/components/getInvolved/ApplicationForm";

export default function Home() {
    return (
        <PageLayout>
            <ContentContainer>
                <ApplicationForm />
            </ContentContainer>
        </PageLayout>
    );
}
