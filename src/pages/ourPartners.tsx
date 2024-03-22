import Image from "next/image";
import { db } from "~/firebase";
import { useState, useEffect } from "react";
import Testimonials from "~/components/Testomonials";
import PageLayout from "~/components/common/PageLayout";
import Heading2 from "~/components/textStyles/Heading2";
import { collection, getDocs } from "firebase/firestore";
import Paragraph from "~/components/textStyles/Paragraph";
import ContentContainer from "~/components/common/ContentContainer";
import PageTitleSection from "~/components/common/PageTitleSection";

export default function OurPartners() {
  const [partnersList, setPartnersList] = useState([]);
  const partnersColletionRef = collection(db, "Partners");
  useEffect(() => {
    const getPartnersList = async () => {
      try {
        const data = await getDocs(partnersColletionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPartnersList(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getPartnersList();
  }, []);

  return (
    <PageLayout>
      <PageTitleSection title={"Our Partners"}>
        Excepteur id cupidatat esse adipisicing reprehenderit veniam occaecat
        amet fugiat id sit fugiat. Est elit excepteur commodo magna deserunt
        anim nisi irure. Elit magna non quis ipsum adipisicing consectetur et
        excepteur. Nulla in elit amet exercitation officia ea fugiat sint.
        Incididunt dolore irure consequat consequat amet minim aliqua excepteur.
        Deserunt deserunt proident ipsum non cupidatat ex et laborum laboris
        dolor id excepteur ea tempor nulla. Ullamco magna laborum labore aliqua
        incididunt cillum.
      </PageTitleSection>
      <ContentContainer>
        <div className="flex flex-col gap-3">
          {partnersList.map((partners, idx) => (
            <div className="flex flex-col gap-3" key={idx}>
              <Heading2>{partners.Title}</Heading2>
              <Paragraph>{partners.Description}</Paragraph>
              <div className="flex flex-wrap">
                {partners.Images.map((image, idx) => (
                  <div className="h-36 w-fit overflow-hidden">
                    <Image
                      src={image}
                      alt={""}
                      width={100}
                      height={100}
                      key={idx}
                      className="h-full w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContentContainer>
      <Testimonials />
    </PageLayout>
  );
}
