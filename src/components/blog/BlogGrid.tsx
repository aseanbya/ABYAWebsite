import { BlogCard, type BlogContent } from "./BlogCard";

type BlogGrid = {
    content: BlogContent[];
};

// Represents the grid of blog cards on blog pages
export const BlogGrid: React.FC<BlogGrid> = ({ content }) => {
    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2 md:gap-y-6 lg:grid-cols-3 lg:gap-y-8">
            {content.map((content) => (
                <BlogCard key={content.title} {...content} />
            ))}
        </div>
    );
};
