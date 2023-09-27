import { BlogGrid } from "~/components/blog/BlogGrid";
import ContentContainer from "~/components/common/ContentContainer";
import Heading2 from "~/components/common/textStyles/Heading2";
import { BLOG_CONTENT } from "~/components/details/BlogDetails";

export default function ExplorePreviousEventsSection() {
    return (
        <ContentContainer>
            <Heading2 className="pb-8">See the previous events</Heading2>
            <BlogGrid content={BLOG_CONTENT} contentType="explore" length={3} />
        </ContentContainer>
    );
}
