import Image from "next/image";
import Link from "next/link";
import logo from "src/assets/logo.png";
import React, { useState } from "react";

export default function Navbar() {
    const [activeTab, setActiveTab] = useState(0);

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
                        <Link href="/getInvolved"> Get Involved </Link>
                    </li>
                    <li>
                        <Link href="/event"> Our Events </Link>
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
                        <Link href="/blog"> Blog </Link>
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
