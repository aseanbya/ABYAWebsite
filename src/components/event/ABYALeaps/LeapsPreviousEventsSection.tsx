import { BlogGrid } from "~/components/blog/BlogGrid";
import ContentContainer from "~/components/common/ContentContainer";
import { PageSubSection } from "~/components/common/PageSubSection";
import { LEAPS_CONTENT } from "~/components/details/LeapsEventDetails";

export default function LeapsPreviousEventsSection() {
    return (
        <ContentContainer>
            <PageSubSection title={"See the previous events"}>
                <BlogGrid
                    content={LEAPS_CONTENT}
                    contentType="leaps"
                    length={3}
                />
            </PageSubSection>
        </ContentContainer>
    );
}
