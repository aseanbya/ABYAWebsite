import Heading2 from "~/components/textStyles/Heading2";
import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import PageTitleSection from "~/components/common/PageTitleSection";

export default function ABYALeaps() {
  return (
    <PageLayout>
      <PageTitleSection title={"ABYA Leaps"}>
        Discover connections with every new LEAP. Discover connections with
        every new LEAP. Discover connections with every new LEAP. Discover
        connections with every new LEAP.
      </PageTitleSection>
      <ContentContainer>
        <p>
          LEAPS (Leadership, Exploration and Progress) is an ASEAN-focused
          industry immersion programme, designed to equip and groom students to
          become industry-relevant future ASEAN- savvy talents.
          <br />
          <br />
          Powered by Young NTUC and the National Youth Council, ABYA LEAPS aims
          to provide a platform for ASEAN youths to deepen their interest in the
          ASEAN market and sharpen their technical & soft skills that would be
          relevant in ASEAN.
          <br />
          <br />
          Any tertiary student/ institute of higher learning from all majors who
          was a citizen of the ASEAN member countries (includes Brunei,
          Cambodia, Laos, Malaysia, Myanmar, Philippines, Singapore, Thailand,
          Indonesia and Vietnam) are invited to the challenge!
        </p>
        <Heading2 className="pt-9">Our Values</Heading2>
        <Heading2 className="pt-9">See the Previous Events</Heading2>
      </ContentContainer>
    </PageLayout>
  );
}
