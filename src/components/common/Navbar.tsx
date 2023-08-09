import Image from 'next/image'
import Link from 'next/link'
import logo from 'src/assets/logo.png'

export default function Navbar() {
    return (

        <div className="navbar bg-base-100">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/"> Home </Link></li>
                        <li>
                            <a>Get Involved</a>
                            <ul className="p-2">
                                <li><Link href="/getInvolved/partner"> Partner </Link></li>
                                <li><Link href="/getInvolved/executive"> Executive </Link></li>
                                <li><Link href="/getInvolved/member"> Member </Link></li>
                            </ul>
                        </li>
                        <li>
                            <a>Our Events</a>
                            <ul className="p-2">
                                <li><Link href="/event/ABYAExplore"> ABYA Explore </Link></li>
                                <li><Link href="/event/ABYALeaps"> ABYA Leaps </Link></li>
                            </ul>
                        </li>
                        <li>
                            <a>About Us</a>
                            <ul className="p-2">
                                <li><Link href="/aboutUs/ABYAHistory"> ABYA History </Link></li>
                                <li><Link href="/aboutUs/ourImpact"> Our Impact </Link></li>
                            </ul>
                        </li>
                        <li><Link href="/ourSupporters"> Our Supporters </Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl hidden lg:flex">
                    <Image
                        src={logo}
                        alt={''}
                        className='h-[3rem] w-[3rem]'
                    />
                </a>
            </div>

            <div className="navbar-end lg:hidden">
                <Image
                    src={logo}
                    alt={''}
                    className='h-[3rem] w-[3rem]'
                />
            </div>

            <div className="navbar-end hidden lg:flex">

                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/"> Home </Link></li>
                    <li tabIndex={0}>
                        <details>
                            <summary> Get Involved </summary>
                            <ul className="p-2">
                                <li><Link href="/getInvolved/partner"> Partner </Link></li>
                                <li><Link href="/getInvolved/executive"> Executive </Link></li>
                                <li><Link href="/getInvolved/member"> Member </Link></li>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary> Our Events </summary>
                            <ul className="p-2">
                                <li><Link href="/event/ABYAExplore"> ABYA Explore </Link></li>
                                <li><Link href="/event/ABYALeaps"> ABYA Leaps </Link></li>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary> About Us </summary>
                            <ul className="p-2">
                                <li><Link href="/aboutUs/ABYAHistory"> ABYA History </Link></li>
                                <li><Link href="/aboutUs/ourImpact"> Our Impact </Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link href="/ourSupporters"> Our Supporters </Link></li>
                </ul>
            </div>
        </div>
    )
}
