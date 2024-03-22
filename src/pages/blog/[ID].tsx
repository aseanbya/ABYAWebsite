import Image from "next/image";
import { db } from "../../firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import PageTitleSection from "~/components/common/PageTitleSection";
import { collection, getDocs, query, where } from "firebase/firestore";

interface BlogType {
  Title?: string;
  Description?: string;
  BlogContent?: string;
  CoverImage?: string;
}

export default function BlogPost() {
  const router = useRouter();
  const { ID } = router.query;
  const [Blog, setBlog] = useState<BlogType>({});

  useEffect(() => {
    const getBlogList = async () => {
      if (ID) {
        const q = query(collection(db, "Blog"), where("ID", "==", ID));
        const data = await getDocs(q);
        data.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          setBlog(doc.data());
        });
      }
    };
    getBlogList();
  }, [ID]);

  return (
    <PageLayout>
      <PageTitleSection title={Blog.Title ?? ""}>
        {Blog.Description ?? ""}
      </PageTitleSection>
      <ContentContainer>
        <Image
          alt=""
          width={300}
          height={300}
          className="w-full"
          src={Blog.CoverImage ?? ""}
        />
        <p>{Blog.BlogContent}</p>
      </ContentContainer>
    </PageLayout>
  );
}
