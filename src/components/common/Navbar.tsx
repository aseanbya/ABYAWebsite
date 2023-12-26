import Image from 'next/image'
import Link from 'next/link'
import logo from 'src/assets/logo.png'

export default function Navbar() {
    return (

        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-base-300 z-50">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1">
                        <Link className="btn btn-ghost hidden lg:flex" href="/">
                            <Image src={logo} alt={'ABYA Logo'} className='h-[3rem] w-[3rem]' />
                        </Link>
                    </div>
                    <div className="navbar-end lg:hidden">
                        <Link href="/" className='btn btn-ghost'>
                            <Image src={logo} alt={''} className='h-[3rem] w-[3rem]' />
                        </Link>
                    </div>
                    <div className="flex-none  hidden lg:block">
                        <ul className="menu menu-horizontal">
                            <li><Link href="/"> Home </Link></li>
                            <li>
                                <details>
                                    <summary><Link href="/aboutUs"> About Us </Link></summary>
                                    <ul className="bg-base-100 p-2">
                                        <li><Link href="/aboutUs/ABYAHistory">ABYA History</Link></li>
                                        <li><Link href="/aboutUs/ourImpact">Our Impact</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary><Link href="/getInvolved">Get Involved</Link></summary>
                                    <ul className="bg-base-100 p-2">
                                        <li><Link href="/getInvolved/member">As a Member</Link></li>
                                        <li><Link href="/getInvolved/executive">As an Executive</Link></li>
                                        <li><Link href="/getInvolved/partner">As a Partner</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary><Link href="/ourEvent">Our Events</Link></summary>
                                    <ul className="bg-base-100 p-2">
                                        <li><Link href="/ourEvent/ABYALeaps">ABYA Leaps</Link></li>
                                        <li><Link href="/ourEvent/ABYAExplore">ABYA Explore</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li><Link href="/ourSupporters"> Our Supporters </Link></li>
                            <li>
                                <details>
                                    <summary><Link href="/blog">Blog</Link></summary>
                                    <ul className="bg-base-100 p-2">
                                        <li><Link href="/blog/prannouncement">PR Announcement</Link></li>
                                        <li><Link href="/blog/experiences">Experiences</Link></li>
                                        <li><Link href="/blog/futureInAsean">Future in ASEAN Series</Link></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side z-50">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 ">
                    <li><Link className="underline" href="/"> Home </Link></li>

                    <li><Link className="underline" href="/aboutUs"> About Us </Link></li>
                    <li><Link href="/aboutUs/ABYAHistory">ABYA History</Link></li>
                    <li><Link href="/aboutUs/ourImpact">Our Impact</Link></li>

                    <li><Link className="underline" href="/getInvolved"> Get Involved </Link></li>
                    <li><Link href="/getInvolved/member">As a Member</Link></li>
                    <li><Link href="/getInvolved/executive">As an Executive</Link></li>
                    <li><Link href="/getInvolved/partner">As a Partner</Link></li>

                    <li><Link className="underline" href="/event"> Our Events </Link></li>
                    <li><Link href="/ourEvent/ABYALeaps">ABYA Leaps</Link></li>
                    <li><Link href="/ourEvent/ABYAExplore">ABYA Explore</Link></li>

                    <li><Link className="underline" href="/ourSupporters"> Our Supporters </Link></li>

                    <li><Link className="underline" href="/blog"> Blog </Link></li>
                    <li><Link href="/blog/prannouncement">PR Announcement</Link></li>
                    <li><Link href="/blog/experiences">Experiences</Link></li>
                    <li><Link href="/blog/futureInAsean">Future in ASEAN Series</Link></li>
                </ul>
            </div>
        </div>
    )
}