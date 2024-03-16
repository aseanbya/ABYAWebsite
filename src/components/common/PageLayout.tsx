"use client";

import Head from "next/head";
import Footer from "./Footer";
import Image from "next/image";
import { cn } from "~/utils/cn";
import logo from "public/logo.png";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../components/ui/drawer";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed inset-x-0 top-10 z-50 mx-auto hidden max-w-2xl sm:block",
        className,
      )}
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

function MobileNavbar() {
  return (
    <div className="w-full sm:hidden">
      <Drawer>
        <div className="fixed top-0 z-50 h-fit w-full bg-neutral-50">
          <div className="flex h-full items-center justify-between p-3">
            <DrawerTrigger className="p-2">
              <Bars3Icon className="w- h-8" />
            </DrawerTrigger>
            <div className="p-2">
              <Image
                src={"/logo.png"}
                alt={""}
                width={100}
                height={100}
                className="h-full w-full"
              ></Image>
            </div>
          </div>
        </div>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>ASEAN Business Youth Association</DrawerTitle>
            <DrawerDescription>Find out more about us!</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col items-center gap-3">
            <Link href="/aboutUs" className="underline">
              About Us
            </Link>
            <Link href="/aboutUs/ourImpact">Out Impact</Link>

            <Link href="/getInvolved" className="underline">
              Get Involved
            </Link>
            <Link href="/getInvolved/member">As A Member</Link>
            <Link href="/getInvolved/executive">As An Executive</Link>
            <Link href="/getInvolved/partner">As A Partner</Link>

            <Link href="/ourEvents" className="underline">
              Our Events
            </Link>
            <Link href="/ourEvents/ABYALeaps">ABYA Leaps</Link>
            <Link href="/ourEvents/ABYAExplore">ABYA Explore</Link>

            <Link href="/ourPartners" className="underline">
              Our Partners
            </Link>

            <Link href="/blog" className="underline">
              Blog
            </Link>
            <Link href="/blog/experiences">Experiences</Link>
            <Link href="/blog/futureInAsean">Future In ASEAN Series</Link>
          </div>
          <DrawerFooter>
            <DrawerClose>Close</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
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
        <MobileNavbar />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
