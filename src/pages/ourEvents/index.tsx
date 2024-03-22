import Image from "next/image";
import { Button } from "~/components/ui/button";
import PageLayout from "~/components/common/PageLayout";
import Heading2 from "~/components/textStyles/Heading2";
import Heading3 from "~/components/textStyles/Heading3";
import ContentContainer from "~/components/common/ContentContainer";
import PageTitleSection from "~/components/common/PageTitleSection";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

export default function OurEvents() {
  return (
    <PageLayout>
      <PageTitleSection title={"Our Events"}>
        Discover connections with every new LEAP. Discover connections with
        every new LEAP. Discover connections with every new LEAP. Discover
        connections with every new LEAP. Discover connections with every new
        LEAP.
      </PageTitleSection>
      <ContentContainer>
        <div className="flex h-screen max-h-[36rem] min-h-96 justify-center rounded-xl bg-[url('/HaveAnyQuestion.jpg')] bg-cover bg-fixed bg-center">
          <div className="grid w-full grid-cols-2">
            <a
              href="#ABYALEAP"
              className="flex items-center justify-center rounded-xl text-white duration-200 hover:bg-brandRed hover:bg-opacity-20"
            >
              <Heading2>ABYA Leaps</Heading2>
            </a>
            <a
              href="#ABYAEXPLORE"
              className="flex items-center justify-center rounded-xl text-white duration-200 hover:bg-brandYellow hover:bg-opacity-20"
            >
              <Heading2>ABYA Explore</Heading2>
            </a>
          </div>
        </div>
        <Heading2 className="pt-9 uppercase">
          <span id="ABYALEAP">ABYA Leaps</span>
        </Heading2>
        <Paragraph>
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
        </Paragraph>

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="w-full sm:w-1/3">
            <div className="flex flex-col gap-2">
              <Heading3>See how the programs go each year</Heading3>
              <Button className="w-fit">Upcoming Leaps</Button>
            </div>
          </div>
          <div className="w-2/3 px-9">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <div className="card grid grid-cols-1 items-center gap-5 rounded-xl border-2 border-brandBlue-50 p-4 sm:grid-cols-2">
                    <Image
                      src={"/HaveAnyQuestion.jpg"}
                      alt={""}
                      width={800}
                      height={800}
                      className="rounded-lg"
                    />
                    <div className="flex flex-col justify-center gap-4">
                      <Heading3 className="uppercase">Test</Heading3>
                      <Button className="w-fit">Learn More</Button>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  {" "}
                  <div className="card grid grid-cols-1 items-center gap-5 rounded-xl border-2 border-brandBlue-50 p-4 sm:grid-cols-2">
                    <Image
                      src={"/HaveAnyQuestion.jpg"}
                      alt={""}
                      width={800}
                      height={800}
                      className="rounded-lg"
                    />
                    <div className="flex flex-col justify-center gap-4">
                      <Heading3 className="uppercase">Test</Heading3>
                      <Button className="w-fit">Learn More</Button>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  {" "}
                  <div className="card grid grid-cols-1 items-center gap-5 rounded-xl border-2 border-brandBlue-50 p-4 sm:grid-cols-2">
                    <Image
                      src={"/HaveAnyQuestion.jpg"}
                      alt={""}
                      width={800}
                      height={800}
                      className="rounded-lg"
                    />
                    <div className="flex flex-col justify-center gap-4">
                      <Heading3 className="uppercase">Test</Heading3>
                      <Button className="w-fit">Learn More</Button>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <hr className="mt-8 border-neutral-950 py-4" />

        <Heading2 className="uppercase">
          <span id="ABYAEXPLORE">ABYA Explore</span>
        </Heading2>
        <div className="py-6">
          <Paragraph>
            ABYA Explore provides a series of sharing and networking sessions
            that enable ASEAN youths to engage with, and be inspired, by
            industry professionals.
            <br />
            <br />
            In line with ABYA’s commitment to its vision and mission, ABYA
            Explore was conducted in the form of webinars, small-group
            networking sessions with professionals and business leaders in
            ASEAN. ABYA Explore imparts insights and knowledge to the youth on
            current industry trends across ASEAN. By gaining different
            perspectives on these issues, ABYA hopes to broaden the youths’
            macro-knowledge of business and cultures of the region.
          </Paragraph>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="w-full sm:w-1/3">
            <Heading3>
              Interested in finding out how the previous ABYA Explore Series
              went?
            </Heading3>
          </div>
          <div className="w-2/3 px-9">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <div className="card grid grid-cols-1 items-center gap-5 rounded-xl border-2 border-brandBlue-50 p-4 sm:grid-cols-2">
                    <Image
                      src={"/HaveAnyQuestion.jpg"}
                      alt={""}
                      width={800}
                      height={800}
                      className="rounded-lg"
                    />
                    <div className="flex flex-col justify-center gap-4">
                      <Heading3 className="uppercase">Test</Heading3>
                      <Button className="w-fit">Learn More</Button>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  {" "}
                  <div className="card grid grid-cols-1 items-center gap-5 rounded-xl border-2 border-brandBlue-50 p-4 sm:grid-cols-2">
                    <Image
                      src={"/HaveAnyQuestion.jpg"}
                      alt={""}
                      width={800}
                      height={800}
                      className="rounded-lg"
                    />
                    <div className="flex flex-col justify-center gap-4">
                      <Heading3 className="uppercase">Test</Heading3>
                      <Button className="w-fit">Learn More</Button>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  {" "}
                  <div className="card grid grid-cols-1 items-center gap-5 rounded-xl border-2 border-brandBlue-50 p-4 sm:grid-cols-2">
                    <Image
                      src={"/HaveAnyQuestion.jpg"}
                      alt={""}
                      width={800}
                      height={800}
                      className="rounded-lg"
                    />
                    <div className="flex flex-col justify-center gap-4">
                      <Heading3 className="uppercase">Test</Heading3>
                      <Button className="w-fit">Learn More</Button>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </ContentContainer>
    </PageLayout>
  );
}
