import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import Heading2 from "~/components/textStyles/Heading2";
import Heading4 from "~/components/textStyles/Heading4";
import PageLayout from "~/components/common/PageLayout";
import Heading1 from "~/components/textStyles/Heading1";
import Paragraph from "~/components/textStyles/Paragraph";
import { HoverEffect } from "~/components/ui/card-hover-effect";
import ContentContainer from "~/components/common/ContentContainer";
import HearFromOurCommunity from "~/components/HearFromOurCommunity";
import { BackgroundGradientAnimation } from "~/components/ui/background-gradient-animation";

const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
];

export default function Home() {
  return (
    <PageLayout>
      <BackgroundGradientAnimation>
        <div className="pointer-events-none absolute inset-0 z-40 flex flex-col items-center justify-center px-4 text-center ">
          <Heading1 className="bg-gradient-to-b from-white/80 to-white/20 bg-clip-text text-transparent text-white drop-shadow-2xl">
            SHAPING THE FUTURE
          </Heading1>
          <Paragraph className="bg-gradient-to-b from-white/80 to-white/20 bg-clip-text text-transparent text-white drop-shadow-2xl">
            We believe in supporting Youths in ASEAN as we navigate through
            diverse cultures and the future of business opportunity
          </Paragraph>
        </div>
      </BackgroundGradientAnimation>

      <div className="max-h-fit bg-[url('/WithYourSupport.jpg')] bg-cover bg-fixed  bg-center">
        <div className="z-0 py-16 text-center">
          <div className="flex flex-col gap-5 text-white sm:gap-8">
            <Heading2 className="text-4xl font-bold">
              With your support,
              <br />
              Here&apos;s what we have achieved!
            </Heading2>

            <div className="flex justify-center">
              <div className="flex w-fit flex-row items-center gap-3 border-b-2 border-b-white pb-3">
                <Heading2 className="text-6xl font-bold">3500+</Heading2>
                <Heading4 className="text-md font-bold capitalize">
                  ASEAN Youth
                  <br />
                  Impacted
                </Heading4>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="grid w-fit grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex flex-col">
                  <Heading2>520</Heading2>
                  <Paragraph className="font-semibold capitalize">
                    ABYA
                    <br />
                    Members
                  </Paragraph>
                </div>
                <div className="flex flex-col">
                  <Heading2>35</Heading2>
                  <Paragraph className="font-semibold capitalize">
                    ABYA
                    <br />
                    Executives
                  </Paragraph>
                </div>
                <div className="flex flex-col">
                  <Heading2>11</Heading2>
                  <Paragraph className="font-semibold capitalize">
                    ASEAN member <br />
                    nations covered
                  </Paragraph>
                </div>
                <div className="flex flex-col">
                  <Heading2>40</Heading2>
                  <Paragraph className="font-semibold capitalize">
                    Supporting{" "}
                    <span className="whitespace-nowrap">Organisations</span>
                  </Paragraph>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <Link href={""}>
                <Button>Learn More About Our Impact</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ContentContainer>
        <div className="mx-auto max-w-5xl py-16">
          <div className="m-2 rounded-xl border-2 border-brandYellow transition duration-200 hover:cursor-pointer hover:bg-neutral-200">
            <div className="p-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Image
                  src={"/IndexEstablishedDate.png"}
                  width={1600}
                  height={1600}
                  alt={""}
                  className="rounded-md shadow-md"
                />
                <div className="flex flex-col justify-center gap-3">
                  <h2 className="text-4xl font-semibold">
                    Established in 2020
                  </h2>
                  <Paragraph>
                    Proident nisi enim aute aliquip ullamco duis eiusmod sunt id
                    et in voluptate laborum sint. Minim et nisi eu officia
                    dolor. Fugiat exercitation veniam proident ex esse minim
                    reprehenderit ex aute nostrud sunt mollit duis. Qui eiusmod
                    exercitation aliquip magna aute ex dolor do proident
                    excepteur.
                  </Paragraph>
                  <Link href={""}>
                    <Button>About Us</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <HoverEffect items={projects} />
        </div>
      </ContentContainer>
      <HearFromOurCommunity />
    </PageLayout>
  );
}
