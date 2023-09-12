import { BlogGrid } from "~/components/blog/BlogGrid";
import { BlogSubpageTemplate } from "~/components/blog/BlogSubpageTemplate";
import ImpactReportImg from "src/assets/annualImpactReport.png";
import { BLOG_CONTENT } from "~/components/details/BlogDetails";

export default function experiences() {
    return (
        <BlogSubpageTemplate
            title={"Experiences"}
            description="lorem ipsum dolor sit amet"
            src={ImpactReportImg}
            alt={"Experiences"}
        >
            <BlogGrid content={BLOG_CONTENT} contentType="blog" />
        </BlogSubpageTemplate>
    );
}
