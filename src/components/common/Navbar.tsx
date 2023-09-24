import Image from "next/image";
import Link from "next/link";
import logo from "src/assets/logo.png";
import React from "react";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn-ghost btn hidden text-xl normal-case lg:flex">
                    <Image
                        src={logo}
                        alt="ABYAlogo"
                        className="h-[2.5rem] w-[2.5rem]"
                    />
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/"> Home </Link>
                    </li>
                    <li>
                        <details>
                            <summary>
                                <Link href="/getInvolved"> Get Involved </Link>
                            </summary>
                            <ul className="bg-base-100 p-2">
                                <li>
                                    <Link href="/getInvolved/member">
                                        As a Member
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/getInvolved/executive">
                                        As an Executive
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/getInvolved/partner">
                                        As a Partner
                                    </Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>
                                <Link href="/event"> Our Events </Link>
                            </summary>
                            <ul className="bg-base-100 p-2">
                                <li>
                                    <Link href="/event/ABYALeaps">
                                        ABYA Leaps
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/event/ABYAExplore">
                                        ABYA Explore
                                    </Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <Link href="/ourSupporters"> Our Supporters </Link>
                    </li>
                    <li>
                        <details>
                            <summary>
                                <Link href="/aboutUs"> About Us </Link>
                            </summary>
                            <ul className="bg-base-100 p-2">
                                <li>
                                    <Link href="/aboutUs/ourStory">
                                        Our Story
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/aboutUs/meetTheTeam">
                                        Meet The Team
                                    </Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>
                                <Link href="/blog"> Blog </Link>
                            </summary>
                            <ul className="bg-base-100 p-2">
                                <li>
                                    <Link href="/blog/impact">
                                        Impact Report
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/experiences">
                                        Experiences
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/futureInAsean">
                                        Future in ASEAN Series
                                    </Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
}

/*
 <a className="btn btn-ghost normal-case text-xl hidden lg:flex">
                    <Image
                        src={logo}
                        alt={''}
                        className='h-[3rem] w-[3rem]'
                    />
                </a>
                */
