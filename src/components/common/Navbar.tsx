import Image from 'next/image'
import logo from 'src/assets/logo.png'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">
                    <Image
                        src={logo}
                        alt={''}
                        className='h-[3rem] w-[3rem]'
                    />
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a href="/home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="getInvolved">
                            Get Involved
                        </a>
                    </li>
                    <li>
                        <a href="events">
                            Events
                        </a>
                    </li>
                    <li>
                        <a href="ourSupporters">
                            Our Supporters
                        </a>
                    </li>
                    <li>
                        <a href="aboutUs">
                            About Us
                        </a>
                    </li>
                </ul>
            </div>
        </div >
    )
}
