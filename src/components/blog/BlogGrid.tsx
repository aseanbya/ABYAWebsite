import { BlogCard, type BlogType, type BlogContent } from "./BlogCard";

type BlogGrid = {
    content: BlogContent[];
    contentType: BlogType;
};

// Represents the grid of blog cards on blog pages
export const BlogGrid: React.FC<BlogGrid> = ({ content, contentType }) => {
    // Filter content based on the specified contentType
    const filteredContent = content.filter(
        (content) => content.tag === contentType
    );

    // Slice the filteredContent to display a maximum of 6 items
    const slicedContent = filteredContent.slice(0, 6);

    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2 md:gap-y-6 lg:grid-cols-3 lg:gap-y-8">
            {slicedContent.map((content) => (
                <BlogCard key={content.title} {...content} />
            ))}
        </div>
    );
};
