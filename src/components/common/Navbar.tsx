import Image from 'next/image'
import Link from 'next/link'
import logo from 'src/assets/logo.png'

export default function Navbar() {
    return (
        <div className="navbar bg-neutral-50 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-white rounded-box w-52">
                        <li><Link href="/"> Home </Link></li>
                        <li><Link href="/getInvolved"> Get Involved </Link></li>
                        <li><Link href="/event"> Our Events </Link></li>
                        <li><Link href="/ourSupporters"> Our Supporters </Link></li>
                        <li><Link href="/aboutUs"> About Us </Link></li>
                        <li><Link href="/blog"> Blog </Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost hidden lg:flex" href="/">
                    <Image src={logo} alt={'ABYA Logo'} className='h-[3rem] w-[3rem]' />
                </Link>
            </div>
            <div className="navbar-end lg:hidden">
                <Link href="/" className='btn btn-ghost'>
                    <Image src={logo} alt={''} className='h-[3rem] w-[3rem]' />
                </Link>
            </div>
            <div className="navbar-end w-full hidden lg:flex">
                <ul className="menu menu-horizontal">
                    <li><Link href="/"> Home </Link></li>
                    <li><Link href="/getInvolved"> Get Involved </Link></li>
                    <li><Link href="/event"> Our Events </Link></li>
                    <li><Link href="/ourSupporters"> Our Supporters </Link></li>
                    <li><Link href="/aboutUs"> About Us </Link></li>
                    <li><Link href="/blog"> Blog </Link></li>
                </ul>
            </div>
        </div>
    )
}
