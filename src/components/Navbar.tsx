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
                    <li><a>Home</a></li>
                    <li><a>Get Involved</a></li>
                    <li><a>Events</a></li>
                    <li><a>Our Supporters</a></li>
                    <li><a>About Us</a></li>
                </ul>
            </div>
        </div>
    )
}
