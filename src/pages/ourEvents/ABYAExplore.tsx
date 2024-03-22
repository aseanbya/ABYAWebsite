import Heading2 from "~/components/textStyles/Heading2";
import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import PageTitleSection from "~/components/common/PageTitleSection";
import Paragraph from "~/components/textStyles/Paragraph";

export default function ABYAExplore() {
  return (
    <PageLayout>
      <PageTitleSection title={"ABYA Explore"}>
        At the ASEAN Business Youth Association, we&apos;re always on the
        lookout for synergies – whether you&apos;re an undergraduate, young
        professional, or in senior management, we&apos;ve got a place for you.
      </PageTitleSection>
      <ContentContainer>
        <Heading2 className="pb-9">What is ABYA Explore?</Heading2>
        <Paragraph>
          ABYA Explore provides a series of sharing and networkingsessions that
          enable ASEAN youths to engage with, and be inspired, by industry
          professionals. In line with ABYA's commitment to its vision and
          mission, ABYA Explore was conducted in the form of webinars,
          small-group networking sessions with professionals and business
          leaders in ASEAN. ABYA Explore imparts insights and knowledge to the
          youth on current industry trends across ASEAN. By gaining different
          perspectives on these issues, ABYA hopes to broaden the youths'
          macro-knowledge of business and cultures of the region.
        </Paragraph>
        <Heading2 className="pt-9">See Past Events</Heading2>
      </ContentContainer>
    </PageLayout>
  );
}
