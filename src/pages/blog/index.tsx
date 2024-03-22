import React, { useState, useEffect } from "react";
import { db } from "~/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import PageTitleSection from "~/components/common/PageTitleSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";

export default function Blog() {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const getBlogList = async () => {
      try {
        const blogCollectionRef = collection(db, "Blog");
        const querySnapshot = await getDocs(blogCollectionRef);
        const blogs = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBlogList(blogs);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      }
    };
    getBlogList();
  }, []);

  const filterByType = async (type) => {
    try {
      let q;
      const blogCollectionRef = collection(db, "Blog");
      if (type === "noFilter") {
        q = blogCollectionRef;
      } else {
        q = query(blogCollectionRef, where("Type", "array-contains", type));
      }
      const querySnapshot = await getDocs(q);
      const blogs = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBlogList(blogs);
    } catch (error) {
      console.error("Error filtering blogs by type: ", error);
    }
  };

  return (
    <PageLayout>
      <PageTitleSection title={"Blog"}>
        Take a read to find out more about the latest happenings within the
        ASEAN Business Youth Association! – We've got opinion pieces, event
        roundups, as well as current affairs news within the ASEAN region.
      </PageTitleSection>
      <ContentContainer>
        <div className="flex justify-center gap-4 pb-9">
          <Button
            onClick={() => filterByType("Experience")}
            variant="ghost"
            className="rounded-b-none border-b-2 border-brandYellow"
          >
            Experience
          </Button>
          <Button
            onClick={() => filterByType("FutureInASEAN")}
            variant="ghost"
            className="rounded-b-none border-b-2 border-brandYellow"
          >
            Future In ASEAN
          </Button>
          <Button
            onClick={() => filterByType("noFilter")}
            variant="ghost"
            className="rounded-b-none border-b-2 border-brandYellow"
          >
            Show All
          </Button>
        </div>
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
                  <Badge key={idx} className="w-fit bg-brandYellow text-black">
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

function formatDate(date) {
  if (!date) return "";
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Date(date.seconds * 1000).toLocaleDateString("en-US", options);
}
