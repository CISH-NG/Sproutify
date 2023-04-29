import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Drawer } from 'antd';
import hamburgerIcon from '../../assets/svg/hamburger.svg';
import { useState } from 'react';
import { CloseMobileIcon } from '@/assets/svg/close-mobile';
import { NavbarProps } from './Navbar.types';
import frame8 from '../../assets/images/frame-8.png';

const MenuItems = [
	{
		index: 0,
		label: 'Home',
		url: '/'
	},
	{
		index: 1,
		label: 'About Us',
		url: '/about-us'
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

export default function Navbar({ loggedin = false }: NavbarProps) {
	const router = useRouter();
	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};
	return (
		<nav className="bg-white py-8 shadow">
			<div className="flex items-center justify-between px-[5%] lg:mx-auto 2xl:max-w-screen-2xl 2xl:px-0">
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

				{!loggedin && (
					<div className="hidden gap-x-12 xl:flex">
						<Link
							href="/signin"
							className="flex h-[60px] cursor-pointer items-center rounded-xl border border-purple px-[60px] text-purple"
						>
							Sign In
						</Link>
						<Link
							href="/signup"
							className="flex h-[60px] cursor-pointer items-center rounded-xl border border-purple bg-purple px-[60px] text-white"
						>
							Sign Up
						</Link>
					</div>
				)}

				{loggedin && (
					<div className="hidden gap-x-12 xl:flex">
						<Image src={frame8} alt="Profile Image" />

						<span>Gabriel Ogbeche</span>
					</div>
				)}

				<button className="xl:hidden" onClick={showDrawer}>
					<Image src={hamburgerIcon} alt="hamburger menu icon" />
				</button>

				<Drawer
					title="Basic Drawer"
					placement="left"
					headerStyle={{ display: 'none' }}
					className="px-2"
					onClose={onClose}
					closeIcon={<CloseMobileIcon />}
					open={open}
					width={'80vw'}
				>
					<div className="mb-4 flex">
						<button className="ml-auto" onClick={onClose}>
							<CloseMobileIcon />
						</button>
					</div>
					<ul className="font-sans text-2xl font-normal text-[#1F1717]">
						{MenuItems.map((item) => (
							<li key={item.index}>
								<Link
									href={item.url}
									className="flex border-b border-[#D9D9D9] pt-9 pb-7"
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>

					<div className="mt-28 flex justify-center gap-x-[10%]">
						<Link
							href="/signup"
							className="flex h-12 cursor-pointer items-center rounded-xl border border-purple px-[7%] text-base text-purple"
						>
							Sign Up
						</Link>
						<Link
							href="/signin"
							className="flex h-12 cursor-pointer items-center rounded-xl border border-purple bg-purple px-[7%] text-base text-white"
						>
							Sign In
						</Link>
					</div>
				</Drawer>
			</div>
		</nav>
	);
}
