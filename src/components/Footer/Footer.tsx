import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import polygon from '@/assets/svg/footer-polygon.svg';
import Facebook from '@/assets/svg/facebook-link';
import Twitter from '@/assets/svg/twitter-link';
import Instagram from '@/assets/svg/instagram-link';
import Whatsapp from '@/assets/svg/whatsapp-link';

export default function Footer() {
	const [email, setEmail] = useState('');

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	return (
		<footer className="relative bg-purple px-[5%] py-8 lg:py-12">
			<div className="ft-container relative z-10 2xl:mx-auto 2xl:max-w-screen-2xl">
				<div className="ft-logo">
					<Link
						href="/"
						className="font-poppins text-3xl text-white lg:text-[64px] lg:leading-[96px]"
					>
						Sproutify
					</Link>

					<div className="mt-4 mb-8 flex w-2/4 gap-x-4 lg:mt-6 lg:w-full lg:gap-x-6">
						<Link href="#">
							<Facebook />
						</Link>

						<Link href="#">
							<Instagram />
						</Link>

						<Link href="#">
							<Twitter />
						</Link>

						<Link href="#">
							<Whatsapp />
						</Link>
					</div>
				</div>

				<div className="ft-form lg:flex lg:flex-col lg:justify-end">
					<p className="mb-4 text-base font-semibold text-white lg:text-2xl">
						Subscribe to our get our latest information
					</p>

					<form
						onSubmit={(e) => {
							e.preventDefault();
						}}
						className="mb-10 flex lg:mb-0"
					>
						<label
							htmlFor="email"
							className="flex items-center rounded-l-xl bg-[#1F1717] px-6 text-white"
						>
							Subscribe
						</label>

						<input
							name="email"
							placeholder="Email address"
							value={email}
							onChange={handleInputChange}
							className="h-12 w-2/3 max-w-xs rounded-r-xl bg-white px-5 lg:h-16"
						/>
					</form>
				</div>

				<div className="ft-link flex gap-x-[5%] text-white lg:mb-8 xl:gap-x-[10%]">
					<div>
						<h4 className="mb-4 font-sans font-bold lg:text-2xl">Home</h4>
						<div className="flex flex-col gap-y-2 font-sans leading-[15px]">
							<Link href="#" className="text-xs lg:text-base">
								About Us
							</Link>
							<Link href="#" className="text-xs lg:text-base">
								Features
							</Link>
						</div>
					</div>

					<div>
						<h4 className="mb-4 font-sans font-bold lg:text-2xl">Services</h4>
						<div className="flex flex-col gap-y-2 font-sans leading-[15px]">
							<Link href="#" className="text-xs lg:text-base">
								Digital marketing
							</Link>
							<Link href="#" className="text-xs lg:text-base">
								Social media
							</Link>
							<Link href="#" className="text-xs lg:text-base">
								Websites
							</Link>
						</div>
					</div>

					<div>
						<h4 className="mb-4 font-sans font-bold lg:text-2xl">FAQ</h4>
						<div className="flex flex-col gap-y-2 font-sans leading-[15px]">
							<Link href="#" className="text-xs lg:text-base">
								Who we are
							</Link>
							<Link href="#" className="text-xs lg:text-base">
								What we do
							</Link>
							<Link href="#" className="text-xs lg:text-base">
								Where we are
							</Link>
						</div>
					</div>

					<div>
						<h4 className="mb-4 font-sans font-bold lg:text-2xl">Contact Us</h4>
						<div className="flex flex-col gap-y-2 font-sans leading-[15px]">
							<Link href="/contact-us" className="text-xs lg:text-base">
								Send an email
							</Link>
							<Link href="/contact-us" className="text-xs lg:text-base">
								Call
							</Link>
						</div>
					</div>
				</div>

				<p className="ft-copyright mt-12 text-center text-white lg:mt-0 lg:self-end lg:text-left lg:text-2xl">
					&copy; Copyright {new Date().getFullYear()}
				</p>
			</div>

			<div className="ft-pattern" aria-hidden="true">
				<Image src={polygon} alt="pattern" />
			</div>
		</footer>
	);
}
