import { BlogGrid } from "~/components/blog/BlogGrid";
import { BlogSubpageTemplate } from "~/components/blog/BlogSubpageTemplate";
import ImpactReportImg from "src/assets/annualImpactReport.png";
import { BLOG_CONTENT } from "~/components/details/BlogDetails";

export default function futureInAsean() {
    return (
        <BlogSubpageTemplate
            title={"A Future in ASEAN Series"}
            description={"lorem ipsum dolor sit amet"}
            src={ImpactReportImg}
            alt={"Future in ASEAN"}
        >
            <BlogGrid content={BLOG_CONTENT} contentType="aseanSeries" />
        </BlogSubpageTemplate>
    );
}
