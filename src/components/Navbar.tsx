import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import hamburgerIcon from '../assets/svg/hamburger.svg';

const MenuItems = [
	{
		index: 0,
		label: 'Home',
		url: '/'
	},
	{
		index: 1,
		label: 'About Us',
		url: '/aboutUs'
	},
	{
		index: 2,
		label: 'Features',
		url: '/features'
	},
	{
		index: 3,
		label: 'FAQ',
		url: '/faq'
	}
];

export default function Navbar() {
	const router = useRouter();
	return (
		<nav className="bg-white py-8 shadow">
			<div className="flex max-w-screen-2xl items-center justify-between px-[5%] lg:mx-auto">
				<Link href="/" className="cursor-pointer font-poppins text-3xl">
					Sproutify
				</Link>

				<ul className="hidden gap-x-14 font-sans text-[#A0A0A0] lg:flex">
					{MenuItems.map((item) => (
						<li key={item.index}>
							<Link
								href="/"
								className={`transition-all duration-300 ease-in-out hover:text-[#1F1717] ${
									router.pathname === item.url && 'text-[#1F1717]'
								}`}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>

				<div className="hidden gap-x-12 xl:flex">
					<Link
						href="/login"
						className="flex h-[60px] cursor-pointer items-center rounded-xl border border-purple px-[60px] text-purple"
					>
						Sign In
					</Link>
					<Link
						href="/login"
						className="flex h-[60px] cursor-pointer items-center rounded-xl border border-purple bg-purple px-[60px] text-white"
					>
						Sign Up
					</Link>
				</div>

				<button className="xl:hidden ">
					<Image src={hamburgerIcon} alt="hamburger menu icon" />
				</button>
			</div>
		</nav>
	);
}
