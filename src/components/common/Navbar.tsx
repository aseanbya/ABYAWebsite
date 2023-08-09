import Image from 'next/image'
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
                        <li><a href="/"> Home </a></li>
                        <li>
                            <a>Get Involved</a>
                            <ul className="p-2">
                                <li><a href="/getInvolved/partner"> Partner </a></li>
                                <li><a href="/getInvolved/executive"> Executive </a></li>
                                <li><a href="/getInvolved/member"> Member </a></li>
                            </ul>
                        </li>
                        <li>
                            <a>Our Events</a>
                            <ul className="p-2">
                                <li><a href="/event/ABYAExplore"> ABYA Explore </a></li>
                                <li><a href="/event/ABYALeaps"> ABYA Leaps </a></li>
                            </ul>
                        </li>
                        <li>
                            <a>About Us</a>
                            <ul className="p-2">
                                <li><a href="/aboutUs/ABYAHistory"> ABYA History </a></li>
                                <li><a href="/aboutUs/ourImpact"> Our Impact </a></li>
                            </ul>
                        </li>
                        <li><a href="/ourSupporters"> Our Supporters </a></li>
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
                    <li><a href="/"> Home </a></li>
                    <li tabIndex={0}>
                        <details>
                            <summary> Get Involved </summary>
                            <ul className="p-2">
                                <li><a href="/getInvolved/partner"> Partner </a></li>
                                <li><a href="/getInvolved/executive"> Executive </a></li>
                                <li><a href="/getInvolved/member"> Member </a></li>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary> Our Events </summary>
                            <ul className="p-2">
                                <li><a href="/event/ABYAExplore"> ABYA Explore </a></li>
                                <li><a href="/event/ABYALeaps"> ABYA Leaps </a></li>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary> About Us </summary>
                            <ul className="p-2">
                                <li><a href="/aboutUs/ABYAHistory"> ABYA History </a></li>
                                <li><a href="/aboutUs/ourImpact"> Our Impact </a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a href="/ourSupporters"> Our Supporters </a></li>
                </ul>
            </div>
        </div>
    )
}
