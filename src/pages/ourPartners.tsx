import Image from "next/image";
import Testimonials from "~/components/Testomonials";
import PageLayout from "~/components/common/PageLayout";
import Heading2 from "~/components/textStyles/Heading2";
import Paragraph from "~/components/textStyles/Paragraph";
import ContentContainer from "~/components/common/ContentContainer";
import PageTitleSection from "~/components/common/PageTitleSection";

export default function OurPartners() {
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
        <Heading2>sadas</Heading2>
        <Paragraph>
          Labore sit ad dolore ea in ad.Qui laborum, culpa voluptate. Voluptate
          amet dolor in mollit, est. In mollit est, est officia. Est officia ex
          commodo incididunt anim quis. Ex commodo, incididunt anim quis sit
          reprehenderit eiusmod. Anim, quis sit reprehenderit eiusmod.
          Reprehenderit eiusmod amet pariatur, nostrud. Pariatur nostrud sit,
          quis lorem dolor.
        </Paragraph>
        <div>
          <Image src="" alt="" />
        </div>
      </ContentContainer>
      <Testimonials />
    </PageLayout>
  );
}
