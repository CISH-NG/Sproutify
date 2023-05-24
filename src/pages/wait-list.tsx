import DefaultLayout from '@/layouts/DefaultLayout';
import React from 'react';
import Image from 'next/image';
import waitlista from '../assets/svg/waitlista.svg';
import waitlistb from '../assets/svg/waitlistb.svg';
import waitlistc from '../assets/svg/waitlistc.svg';
import waitlistd from '../assets/svg/waitlistd.svg';
import waitliste from '../assets/svg/waitliste.svg';
import waitlistf from '../assets/svg/waitlistf.svg';

const waitListData = [
	{
		id: 1,
		name: 'Social Media',
		image: waitlista,
		message:
			'Elevate your online presence with specifically crafted social media management strategies, that align with your brands voice and vision.'
	},
	{
		id: 2,
		name: 'Website',
		image: waitlistb,
		message:
			'Say goodbye to complex coding and endless frustration. Sproutify provides you with a hassle-free website creation experience where you can focus on unleashing your creativity while we take care of the technical complexities.'
	},
	{
		id: 3,
		name: ' Digital Marketing',
		image: waitlistc,
		message:
			'Achieve online success with carefully curated digital marketing strategies tailored to your brands needs.'
	},
	{
		id: 4,
		name: ' Subscriptions',
		image: waitlistd,
		message:
			'Experience the full range of Sproutify’s capabilities without compromising your budget. Whether you’re a budding entrepreneur or an established enterprise, our flexible pricing options ensure that you can choose a plan that aligns perfectly with your goals,  providing you with unrivaled value at a price that won\'t leave a dent in your wallet.'
	},
	{
		id: 5,
		name: ' Designs',
		image: waitliste,
		message:
			'Bring your brand to life through our innovative and visually captivating designs that are sure to leave a lasting impression on your audience.'
	},
	{
		id: 6,
		name: ' Analytics',
		image: waitlistf,
		message:
			'Harness the power of comprehensive insights to optimize your operations and make more informed decisions.'
	}
];

function Waitlist() {
	return (
		<DefaultLayout>
			<div className="mx-auto flex h-[747px] w-full flex-col items-center justify-center gap-10 bg-[#4C2884]  text-[#FFFFFF]">
				<h1 className=" mt-[60px] w-[206px] text-4xl font-semibold lg:text-6xl  ">
					<span className=" text-[#FEC431]">Sproutify</span> is coming soon
				</h1>
				<p className="w-[310px] text-center text-base font-normal lg:w-[987px] lg:text-2xl">
					Be the first to harness the transformative power of Sproutify: the
					ultimate digital arsenal that unlocks a universe of possibilities. We
					provide an all-in-one solution where you can effortlessly tap into
					your online potential, from crafting captivating websites to
					generating professional receipts, accessing robust analytics, digital
					marketing tools, and so much more. Get ready to experience
					cutting-edge technology and unparalleled functionality, all seamlessly
					integrated into a single platform! Join us as we redefine the digital
					landscape and embark on an exciting journey together where limitless
					opportunities await - get ready to thrive!
				</p>
				<p className=" text-base font-normal lg:text-2xl">
					Join our waiting list and enjoy launch updates
				</p>
				<form className="relative p-[4]">
					<input
						className="h-[64px] w-[260px] rounded-l bg-[#1F171799] py-2 pl-4 pr-12 lg:w-[420px]"
						id="email"
						type="email"
						placeholder="Email Address"
					/>
					<button className="absolute inset-y-0 right-0 rounded-l bg-[#1F1717] px-4 text-white">
						Subscribe
					</button>
				</form>
			</div>
			<section className="mx-auto mt-[140px] flex flex-col ">
				<div className=" mx-auto text-[18px] lg:text-3xl">
					<h1>We offer digital solutions to your business</h1>
				</div>

				<div className=" flex flex-row flex-wrap items-center justify-center  p-2 lg:gap-10 lg:gap-x-8 lg:gap-y-24 lg:p-10">
					{waitListData.map((waitlist) => (
						<div
							key={waitlist.id}
							className="h-[350px] w-full lg:h-[400px] lg:w-[450px]"
						>
							<div className="mb-[40px] flex h-[50px] items-center justify-center">
								<Image src={waitlist.image} alt="" />
							</div>
							<h1 className=" mb-[20px] text-center text-base font-normal lg:text-2xl">
								{waitlist.name}
							</h1>
							<p className=" text-base text-[#A0A0A0] lg:text-2xl">
								{waitlist.message}
							</p>
						</div>
					))}
				</div>
			</section>

			<section className=" mx-auto my-[160px] flex w-full flex-col items-center justify-center gap-10">
				<p className=" text-base font-normal lg:text-2xl">
					Join our waiting list and enjoy launch updates
				</p>
				<form className="relative p-[4]">
					<input
						className="h-[64px] w-[260px] rounded-l bg-[#1F171799] py-2 pl-4 pr-12 lg:w-[420px]"
						id="email"
						type="email"
						placeholder="Email Address"
					/>
					<button className="absolute inset-y-0 right-0 rounded-l bg-[#1F1717] px-4 text-white">
						Subscribe
					</button>
				</form>
			</section>
		</DefaultLayout>
	);
}

export default Waitlist;
