"use client";

import Head from "next/head";
import Footer from "./Footer";
import Image from "next/image";
import { cn } from "~/utils/cn";
import logo from "public/logo.png";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">
          <Image src={logo} alt={"ABYA Logo"} className="h-[2rem] w-[2rem]" />
        </HoveredLink>
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/aboutUs">About Us</HoveredLink>
            <HoveredLink href="/aboutUs/ourImpact">Out Impact</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Get Involved">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/getInvolved">Get Involved</HoveredLink>
            <HoveredLink href="/getInvolved/member">As A Member</HoveredLink>
            <HoveredLink href="/getInvolved/executive">
              As An Executive
            </HoveredLink>
            <HoveredLink href="/getInvolved/partner">As A Partner</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our Events">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/ourEvents">Our Events</HoveredLink>
            <HoveredLink href="/ourEvents/ABYALeaps">ABYA Leaps</HoveredLink>
            <HoveredLink href="/ourEvents/ABYAExplore">
              ABYA Explore
            </HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href="/ourPartners">Our Partners</HoveredLink>

        <MenuItem setActive={setActive} active={active} item="Blog">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/blog">Blog</HoveredLink>
            <HoveredLink href="/blog/experiences">Experiences</HoveredLink>
            <HoveredLink href="/blog/futureInAsean">
              Future In ASEAN Series
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

type PageLayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
};

const PageLayout = (props: PageLayoutProps) => {
  const {
    children,
    title = "ASEAN Business Youth Association",
    description = "Fostering a community of like-minded youths to be business savvy in the ASEAN region.",
    className = "text-black bg-neutral-50",
  } = props;

  return (
    <div className={className}>
      <Head>
        <title>{title}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={description} name="description" />
      </Head>
      <div className="relative flex w-full items-center justify-center">
        <Navbar className="top-2" />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
