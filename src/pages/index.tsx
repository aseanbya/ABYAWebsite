import Link from "next/link";
import Image from "next/image";
import React from "react";
import PageLayout from "~/components/common/PageLayout";
import { BackgroundGradientAnimation } from "~/components/ui/background-gradient-animation";
import { Button } from "~/components/ui/button";
import { HoverEffect } from "~/components/ui/card-hover-effect";
import { InfiniteMovingCards } from "~/components/ui/infinite-moving-cards";

export default function Home() {
  return (
    <PageLayout>
      <BackgroundGradientAnimation>
        <div className="pointer-events-none absolute inset-0 z-40 flex flex-col items-center justify-center px-4 text-center ">
          <h1 className="bg-gradient-to-b from-white/80 to-white/20 bg-clip-text text-3xl font-bold text-transparent text-white drop-shadow-2xl md:text-4xl lg:text-7xl">
            SHAPING THE FUTURE
          </h1>
          <p className="text-md font-semi-bold bg-gradient-to-b from-white/80 to-white/20 bg-clip-text text-transparent text-white drop-shadow-2xl md:text-xl">
            We believe in supporting Youths in ASEAN as we navigate through
            diverse cultures and the future of business opportunity
          </p>
        </div>
      </BackgroundGradientAnimation>

      <div className="max-h-fit bg-[url('/WithYourSupport.jpg')] bg-cover bg-fixed  bg-center">
        <div className="z-0 py-16 text-center">
          <div className="flex flex-col gap-5 text-white sm:gap-8">
            <h2 className="text-4xl font-bold">
              With your support,
              <br />
              Here&apos;s what we have achieved!
            </h2>

            <div className="flex justify-center">
              <div className="flex w-fit flex-row items-center gap-3 border-b-2 border-b-white pb-3">
                <p className="text-6xl font-bold">3500+</p>
                <p className="text-md font-bold capitalize">
                  ASEAN Youth
                  <br />
                  Impacted
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="grid w-fit grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex flex-col">
                  <p className="text-6xl font-bold">520</p>
                  <p className="font-semibold capitalize">
                    ABYA
                    <br />
                    Members
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-6xl font-bold">35</p>
                  <p className="font-semibold capitalize">
                    ABYA
                    <br />
                    Executives
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-6xl font-bold">11</p>
                  <p className="font-semibold capitalize">
                    ASEAN member <br />
                    nations covered
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-6xl font-bold">40</p>
                  <p className="font-semibold capitalize">
                    Supporting{" "}
                    <span className="whitespace-nowrap">Organisations</span>
                  </p>
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

      <div className="mx-auto max-w-5xl py-16">
        <div className="flex flex-col gap-4 pb-12 sm:flex-row">
          <Image
            src={"/IndexEstablishedDate.png"}
            width={1600}
            height={1600}
            alt={""}
            className="rounded-md shadow-md"
          />
          <div className="flex flex-col justify-center gap-3">
            <h2 className="text-4xl font-semibold">Established in 2020</h2>
            <p>
              Proident nisi enim aute aliquip ullamco duis eiusmod sunt id et in
              voluptate laborum sint. Minim et nisi eu officia dolor. Fugiat
              exercitation veniam proident ex esse minim reprehenderit ex aute
              nostrud sunt mollit duis. Qui eiusmod exercitation aliquip magna
              aute ex dolor do proident excepteur.
            </p>
            <Link href={""}>
              <Button>About Us</Button>
            </Link>
          </div>
        </div>
        <HoverEffect items={projects} />
      </div>

      <div className="dark:bg-grid-white/[0.05] relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-neutral-600 antialiased dark:bg-black">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </PageLayout>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export const projects = [
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
