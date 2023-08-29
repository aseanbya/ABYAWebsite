import IndividualBlogImageBody from "~/components/blog/IndividualBlogPage/IndividualBlogImageBody";
import BlogTemplate from "../../components/blog/IndividualBlogPage/BlogTemplate";
import imag2e from "src/assets/annualImpactReport.png"

export default function TestBlog() {
    return (
        <BlogTemplate>
            <IndividualBlogImageBody image={imag2e} location="right" />
        </BlogTemplate>
    )
}