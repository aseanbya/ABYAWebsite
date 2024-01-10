import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { db } from "../../../server/db";
import Markdown from "react-markdown";
import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import Heading2 from "~/components/common/textStyles/Heading2";
import Image from "next/image";

// Omits excess fields from the blog post data
type Blog = {
  id: number;
  title: string;
  content: string;
  image: string | null;
};

export const getStaticPaths = (async () => {
  // NOTE: The schema should be updated to include a `slug` field
  // It's best not to use the database ID as the slug for blog posts (SEO)
  const blogIds = await db.blog.findMany({
    select: {
      id: true,
    },
  });

  const paths = blogIds.map((blog) => ({
    params: { slug: blog.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  if (!params?.slug || typeof params.slug !== "string") {
    return {
      notFound: true,
    };
  }

  const id = parseInt(params.slug);

  const blog = await db.blog.findUnique({
    where: { id },
  });

  if (!blog) {
    return {
      notFound: true,
    };
  }

  // If the blog post data was found, return it as a prop
  return {
    props: {
      blog: {
        id: blog.id,
        title: blog.title,
        content: blog.content ?? "",
        image: blog.image,
      },
    },
  };
}) satisfies GetStaticProps<{
  blog: Blog;
}>;

export default function Page({
  blog,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageLayout>
      <ContentContainer>
        <div className="flex flex-col pb-12 sm:flex-row">
          <Heading2 className="flex items-center sm:w-[50%]">
            {blog.title}
          </Heading2>
          <Image
            className="sm:w-[50%]"
            src={blog?.image ?? ""}
            width={1600}
            height={1600}
            alt={blog?.title ?? ""}
          />
        </div>
        <article className="prose">
          <Markdown>{blog.content}</Markdown>
        </article>
      </ContentContainer>
    </PageLayout>
  );
}
