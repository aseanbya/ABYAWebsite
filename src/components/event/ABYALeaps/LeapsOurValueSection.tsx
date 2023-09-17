import ContentContainer from "~/components/common/ContentContainer";
import { PageSubSection } from "~/components/common/PageSubSection";
import LeapsValues from "../LeapsValues";

export type ValueContent = {
    title: string;
    content: string;
};

export default function LeapsOurValueSection() {
    return (
        <ContentContainer>
            <PageSubSection title="Our value">
                <LeapsValues />
            </PageSubSection>
        </ContentContainer>
    );
}
