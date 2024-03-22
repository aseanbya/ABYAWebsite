import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { useRouter } from "next/router";
import { collection, getDocs, query, where } from "firebase/firestore";

interface BlogType {
  Title?: string;
  Test?: string;
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
    <div>
      <p>{Blog.Test}</p>
    </div>
  );
}
