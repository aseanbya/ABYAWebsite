import { type BlogContent } from "~/components/blog/BlogCard";
import { BlogGrid } from "~/components/blog/BlogGrid";
import { BlogSubpageTemplate } from "~/components/blog/BlogSubpageTemplate";
import ImpactReportImg from "src/assets/annualImpactReport.png";

const TEST_CONTENT: BlogContent[] = [
    {
        title: "Title goes here",
        date: new Date(),
    },
    {
        title: "Title goes here",
        date: new Date(),
    },
    {
        title: "Title goes here",
        date: new Date(),
    },
    {
        title: "Title goes here",
        date: new Date(),
    },
    {
        title: "Title goes here",
        date: new Date(),
    },
    {
        title: "Title goes here",
        date: new Date(),
    },
];

export default function experiences() {
    return (
        <BlogSubpageTemplate
            title={"Experiences"}
            description="lorem ipsum dolor sit amet"
            src={ImpactReportImg}
            alt={"Experiences"}
        >
            <BlogGrid content={TEST_CONTENT} />
        </BlogSubpageTemplate>
    );
}
