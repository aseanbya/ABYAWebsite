import Image from "next/image";
import { Button } from "~/components/ui/button";
import Heading1 from "~/components/textStyles/Heading1";
import PageLayout from "~/components/common/PageLayout";
import Paragraph from "~/components/textStyles/Paragraph";
import PageTitleSection from "~/components/common/PageTitleSection";
import ContentContainer from "~/components/common/ContentContainer";
import HearFromOurCommunity from "~/components/HearFromOurCommunity";
import { CardContainer, CardBody, CardItem } from "~/components/ui/3d-card";
import { BentoGrid, BentoGridItem } from "~/components/ui/bento-grid";

export default function AboutUs() {
  return (
    <PageLayout>
      <PageTitleSection title={"About Us"}>
        Excepteur id cupidatat esse adipisicing reprehenderit veniam occaecat
        amet fugiat id sit fugiat. Est elit excepteur commodo magna deserunt
        anim nisi irure. Elit magna non quis ipsum adipisicing consectetur et
        excepteur. Nulla in elit amet exercitation officia ea fugiat sint.
        Incididunt dolore irure consequat consequat amet minim aliqua excepteur.
        Deserunt deserunt proident ipsum non cupidatat ex et laborum laboris
        dolor id excepteur ea tempor nulla. Ullamco magna laborum labore aliqua
        incididunt cillum.
      </PageTitleSection>
      <div className="max-h-fit bg-[url('/VisionMissionBackground.png')] bg-cover bg-fixed bg-center py-9">
        <ContentContainer>
          <div className="flex h-full flex-row flex-wrap items-center justify-center gap-4">
            <CardContainer className="w-full">
              <CardBody className="group/card relative h-60 w-auto rounded-xl border-2 border-white p-6 sm:w-[30rem]">
                <CardItem translateZ="50">
                  <Heading1 className="text-white">Vision</Heading1>
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="mt-2 max-w-sm text-white"
                >
                  To be the leading youth organisation that nurtures future
                  ASEAN business leaders
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer className="w-full">
              <CardBody className="group/card relative h-60 w-auto rounded-xl border-2 border-white p-6 sm:w-[30rem]">
                <CardItem translateZ="50" className="text-white">
                  <Heading1>Mission</Heading1>
                </CardItem>
                <CardItem as="p" translateZ="60" className="mt-2 text-white">
                  Empower a community of ASEAN youth to work and communicate
                  effectively with people regionally, through cross-cultural
                  training, exposure, application and networking.
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </ContentContainer>
      </div>

      <ContentContainer>
        <div className="grid items-center gap-3 py-9 sm:grid-cols-2">
          <Image src={"/OurStory.png"} width={1600} height={1600} alt={""} />
          <div className="flex flex-col  justify-center gap-2">
            <Heading1 className="py-4 text-5xl font-bold uppercase text-black sm:py-0 sm:text-7xl">
              Our Story
            </Heading1>
            <Paragraph>
              Founded in 2020 by a group of seven enthusiastic youth, the ASEAN
              Business Youth Association (ABYA) aims to be the bridge for youths
              to increase their knowledge and gain a foothold in ASEAN through
              participating in our programmes. Officially legalised as a society
              in 2021, ABYA has a burgeoning network of aspiring entrepreneurs
              and is focused on fostering sustainable businesses.
            </Paragraph>
          </div>
        </div>
        <div>
          <p>
            Birthed in the inaugural Spark The Next&apos;s Youth Action
            Challenge, ABYA emerged as the runner-up team and was awarded with a
            seed grant to develop and run this initiative. Since then, the
            network has exponentially expanded to a vibrant community of 500
            youth members. As of 2023, the organisation has impacted over 3500
            youth in 11 ASEAN member nations. ABYA&apos;s successes in
            marketing, partnerships, and programmes is credited to the member
            executives&apos; hard work on initiatives such as ABYA Explore and
            ABYA Leadership, Exploration, and Progress (LEAPS).
            <br />
            <br />
            In support of the United Nations Sustainable Development Goals
            (SDGs), ABYA works towards three SDGs, namely decent work and
            economic growth, sustainable cities and communities, and
            partnerships for the goals. This helps to achieve higher economic
            productivity through business collaborations, supports positive
            economic, social, and environmental links between different regions
            through national and regional development plnpmanning, as well as
            encourages and promotes effective partnerships between public,
            private, and civil societies.
            <br />
            <br />
            Based on our Focus Group Discussions (FGDs) and survey, we have
            gained insights into the youths&apos; needs and identified the
            underlying gaps in the market. With the volatile coronavirus
            pandemic, many youths were left struggling to cope with a rapidly
            changing and increasingly challenging work environment. ABYA was
            born in the midst of the coronavirus pandemic and discovered the
            importance of youths upskilling themselves in these trying times.
            Our programmes started off to focus on three main pillars —
            Political, Economic, and Culture (PEC) — of the region.
          </p>
        </div>
      </ContentContainer>
      <HearFromOurCommunity />
      <ContentContainer>
        <Heading1 className="pb-8">Meet the team</Heading1>
        <BentoGrid className="mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.name}
              description={item.position}
              header={item.image}
            />
          ))}
        </BentoGrid>
      </ContentContainer>
      <div className="max-h-fit bg-[url('/HaveAnyQuestion.jpg')] bg-cover bg-fixed  bg-center">
        <ContentContainer className="h-[32rem]">
          <div className="flex h-full flex-col items-center justify-center gap-5">
            <Heading1 className="text-brandYellow">
              Have any questions?
            </Heading1>
            <Button className="border-2 border-white bg-transparent text-white">
              Contact Us
            </Button>
          </div>
        </ContentContainer>
      </div>
    </PageLayout>
  );
}

const items = [
  {
    image: "/OurStory.png",
    name: "name",
    position: "string",
  },
  {
    image: "/OurStory.png",
    name: "name",
    position: "string",
  },
  {
    image: "/OurStory.png",
    name: "name",
    position: "string",
  },
  {
    image: "/OurStory.png",
    name: "name",
    position: "string",
  },
  {
    image: "/OurStory.png",
    name: "name",
    position: "string",
  },
  {
    image: "/OurStory.png",
    name: "name",
    position: "string",
  },
  {
    image: "/OurStory.png",
    name: "name",
    position: "string",
  },
  {
    image: "/OurStory.png",
    name: "name",
    position: "string",
  },
  {
    image: "/OurStory.png",
    name: "name",
    position: "string",
  },
  {
    image: "/OurStory.png",
    name: "name",
    position: "string",
  },
  {
    image: "/OurStory.png",
    name: "name",
    position: "string",
  },
  {
    image: "/OurStory.png",
    name: "name",
    position: "string",
  },
  {
    image: "/OurStory.png",
    name: "name",
    position: "string",
  },
  {
    image: "/OurStory.png",
    name: "name",
    position: "string",
  },
];
