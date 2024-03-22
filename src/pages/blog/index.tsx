import { db } from "~/firebase";
import Image from "next/image";
import { useState, useEffect } from "react";
import PageLayout from "~/components/common/PageLayout";
import { collection, getDocs } from "firebase/firestore";
import PageTitleSection from "~/components/common/PageTitleSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import ContentContainer from "~/components/common/ContentContainer";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";

export default function Blog() {
  const [blogList, setBlogList] = useState([]);

  const blogCollectionRef = collection(db, "Blog");
  useEffect(() => {
    const getBlogList = async () => {
      try {
        const data = await getDocs(blogCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBlogList(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getBlogList();
  }, []);

  return (
    <PageLayout>
      <PageTitleSection title={"Blog"}>
        Take a read to find out more about the latest happenings within the
        ASEAN Business Youth Association! – We've got opinion pieces, event
        roundups, as well as current affairs news within the ASEAN region.
      </PageTitleSection>
      <ContentContainer>
        <div className="flex flex-wrap">
          {blogList.map((blog, idx) => (
            <Card
              className="group w-full max-w-xs border-2 border-brandRed duration-200 hover:bg-brandBlue-10"
              key={idx}
            >
              <CardHeader>
                <CardTitle>{blog.Title ?? ""}</CardTitle>
                <CardDescription className="pb-2">
                  <span>Date Published: {formatDate(blog.DatePublished)}</span>
                  <hr className="my-2 border-brandBlue" />
                  <span className="line-clamp-2">{blog.Description ?? ""}</span>
                </CardDescription>
                {blog.Type.map((tag, idx) => (
                  <Badge className="w-fit bg-brandYellow text-black">
                    {tag}
                  </Badge>
                ))}
              </CardHeader>
              <CardContent>
                <div className="aspect-square overflow-hidden rounded-md shadow-md">
                  <Image
                    src={blog.CoverImage ?? ""}
                    alt={""}
                    width={300}
                    height={300}
                    className="duration-200 group-hover:scale-110 "
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href={`/blog/${blog.ID}` ?? ""}>
                  <Button className="bg-brandBlue">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ContentContainer>
    </PageLayout>
  );
}

function formatDate(date: { seconds: number }) {
  if (!date) return "";
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Date(date.seconds * 1000).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
