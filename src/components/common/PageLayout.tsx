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
            <HoveredLink href="/AboutUs">About Us</HoveredLink>
            <HoveredLink href="/AboutUs/OurImpact">Out Impact</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Get Involved">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/GetInvolved">Get Involved</HoveredLink>
            <HoveredLink href="/GetInvolved/Member">As A Member</HoveredLink>
            <HoveredLink href="/GetInvolved/Executive">
              As An Executive
            </HoveredLink>
            <HoveredLink href="/GetInvolved/Partner">As A Partner</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our Events">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/OurEvents">Our Events</HoveredLink>
            <HoveredLink href="/OurEvents/ABYALeaps">ABYA Leaps</HoveredLink>
            <HoveredLink href="/OurEvents/ABYAExplore">
              ABYA Explore
            </HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href="/OurSupporters">Our Supporters</HoveredLink>

        <MenuItem setActive={setActive} active={active} item="Blog">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Blog">Blog</HoveredLink>
            <HoveredLink href="/Blog/Experiences">Experiences</HoveredLink>
            <HoveredLink href="/Blog/FutureInAsean">
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
