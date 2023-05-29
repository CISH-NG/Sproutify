// import { useState } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
// import { Drawer } from 'antd';
// import { CloseMobileIcon } from '@/assets/svg/close-mobile';

// import hamburgerIcon from '@/assets/svg/hamburger.svg';

// const MenuItems = [
// 	{
// 		index: 0,
// 		label: 'Home',
// 		url: '/'
// 	},
// 	{
// 		index: 1,
// 		label: 'About Us',
// 		url: '/about-us'
// 	}
// ];

export default function Header() {
	// const [open, setOpen] = useState(false);

	// const showDrawer = () => {
	// 	setOpen(true);
	// };

	// const onClose = () => {
	// 	setOpen(false);
	// };

	return (
		<nav className="bg-[#4C2884] py-8 shadow">
			<div className="flex items-center justify-between px-[5%] lg:mx-auto 2xl:max-w-screen-xl 2xl:px-0">
				<Link
					href="/"
					className="cursor-pointer font-poppins text-3xl text-white"
				>
					Sproutify
				</Link>

				{/* <ul className="hidden gap-x-14 font-sans text-white lg:flex">
					{MenuItems.map((item) => (
						<li key={item.index}>
							<Link
								href={item.url}
								className="transition-all duration-300 ease-in-out"
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul> */}

				{/* <div className="hidden gap-x-12 xl:flex">
					<Link
						href="/signup"
						className="flex h-[47px] cursor-pointer items-center rounded-xl  bg-[#1F1717] px-[60px] text-white"
					>
						Sign Up
					</Link>
				</div> */}

				{/* <button className="xl:hidden" onClick={showDrawer}>
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
					<ul className="font-sans text-xl font-normal text-[#1F1717] hover:text-[#1F1717]">
						{MenuItems.map((item) => (
							<li key={item.index}>
								<Link
									href={item.url}
									className="flex border-b border-[#D9D9D9] pt-8 pb-6"
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>

					<div className="mt-24 flex justify-center gap-x-[10%]">
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
				</Drawer> */}
			</div>
		</nav>
	);
}
