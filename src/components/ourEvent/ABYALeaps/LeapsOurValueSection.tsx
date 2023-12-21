import ContentContainer from "~/components/common/ContentContainer";
import { PageSubSection } from "~/components/common/PageSubSection";

export type ValueContent = {
    title: string;
    content: string;
};

export default function LeapsOurValueSection() {
    return (
        <ContentContainer>
            <PageSubSection title="Our value">
            </PageSubSection>
        </ContentContainer>
    );
}
