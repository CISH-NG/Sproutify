import DefaultLayout from '@/layouts/DefaultLayout';
import React from 'react';
import Image from 'next/image';
import mobilepreview1 from '../assets/images/mobile-prev1.png';
import mobilepreview2 from '../assets/images/mobile-prev12.png';
import businessmodel from '../assets/images/businessmodel.png';

import Ellipsea from '../assets/images/Ellipsea.png';
import Ellipseb from '../assets/images/Ellipseb.png';
import Ellipsec from '../assets/images/Ellipsec.png';
import Ellipsed from '../assets/images/Ellipsed.png';
import Ellipsee from '../assets/images/Ellipsee.png';
import Ellipsef from '../assets/images/Ellipsef.png';
import Ellipseg from '../assets/images/Ellipseg.png';
import Ellipseh from '../assets/images/Ellipseh.png';
import Polygon from '@/assets/svg/polygon';

const profileData = [
	{ id: 1, name: 'Kola Akindele', position: 'CEO', image: Ellipsea },
	{ id: 2, name: 'Paul Okoye', position: 'CEO', image: Ellipseb },
	{ id: 3, name: 'Kola Akindele', position: 'CEO', image: Ellipsec },
	{ id: 4, name: 'Kola Akindele', position: 'CEO', image: Ellipsed },
	{ id: 5, name: 'Kola Akindele', position: 'CEO', image: Ellipsee },
	{ id: 6, name: 'Paul Okoye', position: 'CEO', image: Ellipsef },
	{ id: 7, name: 'Kola Akindele', position: 'CEO', image: Ellipseg },
	{ id: 8, name: 'Kola Akindele', position: 'CEO', image: Ellipseh }
];

function AboutUsPage() {
	return (
		<DefaultLayout>
			<div className="mx-auto flex w-full flex-col">
				<div className="mx-auto w-full lg:max-w-7xl">
					<section className="mt-20 mb-10 px-10 lg:mb-28 lg:mt-36">
						<h1 className="mt-16 mb-5 text-center text-xl font-bold lg:text-4xl">
							About Us
						</h1>
						<p className="mx-auto mt-5 text-center text-lg  text-[#aaa5a5] lg:max-w-2xl lg:text-2xl">
							Empower your business with Sproutify- the ultimate
							transformational tool for businesses of all sizes.
						</p>

						<p className="mx-auto mt-10 text-center text-lg font-normal  lg:max-w-5xl lg:text-left lg:text-xl">
							Sproutify is committed to supporting your business every step of
							the way. From managing sales to -tracking expenses, our
							comprehensive app offers a wealth of features and resources
							designed specifically to help business owners like you achieve
							success. With Sproutify, you will have access to a supportive
							community and expert guidance that will help you reach your goals
							and maximize your growth potential.
						</p>
					</section>
				</div>

				<section className=" relative mt-7 flex h-[100px] w-full justify-around gap-5 bg-[#4C2884] lg:h-[320px] ">
					<div
						className="absolute top-0 left-0 z-0 rotate-0"
						aria-hidden="true"
					>
						<Polygon />
					</div>

					<div className="flex justify-between gap-x-3 px-10 lg:max-w-7xl">
						<div className="relative z-10 flex w-1/2 items-center">
							<p className="max-w-lg text-left text-base text-white lg:text-5xl ">
								Over <span className="text-[#FEC431]">50,000</span> businesses
								enjoying tech services
							</p>
						</div>
						<div className="relative flex w-1/2 overflow-hidden">
							<div className="flex items-end">
								<Image src={mobilepreview1} alt="" className=" object-cover" />
							</div>

							<div className="flex items-start">
								<Image src={mobilepreview2} alt="" className=" object-cover " />
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="mx-auto mt-14 flex w-full flex-col items-center justify-center lg:max-w-5xl">
						<h1 className=" mb-8 font-semibold lg:text-3xl">
							Why Choose Sproutify?
						</h1>
						<div className="mx-auto text-2xl text-[#5a5656] lg:max-w-5xl">
							<h3 className=" mb-8">
								&#x2022; Sproutify offers an all-in-one solution for
								streamlining your business operations and elevating your
								professionalism.
							</h3>
							<h3 className=" mb-8">
								&#x2022; With Sproutify, you can optimize your workflow to save
								time and increase efficiency, all while taking your business to
								the next level.
							</h3>
							<h3 className=" mb-8">
								&#x2022; Grow your business the smart way; Our advanced features
								and resources are designed to help you work smarter, not harder
								so you can focus on what you do best - growing your business.
							</h3>
							<h3>
								&#x2022; Join our community today and take advantage of all the
								resources and tools we have to offer.
							</h3>
						</div>
					</div>
				</section>

				<section className="mx-auto flex flex-col-reverse gap-12 p-10 lg:mt-20 lg:max-w-7xl lg:flex-row lg:gap-36">
					<div className="lg:w-3/5">
						<h2 className="text-center text-xl font-bold lg:text-left lg:text-4xl">
							Our Vision
						</h2>
						<p className="mt-10 text-lg text-[#A0A0A0] lg:text-2xl">
							Our vision is to revolutionize the way businesses operate by
							providing cutting-edge solutions that drive growth, profitability
							and success.
							{/* <br /> <br />
							Lorem ipsum dolor sit amet consectetur. Nisl morbi tellus diam
							mauris. Ipsum diam cras magnis ac. Consequat feugiat egestas
							rhoncus est magna euismod in dolor risus. Morbi nulla feugiat sit
							orci. Ac et velit sed phasellus mattis. Mauris imperdiet aenean
							convallis aliquet. Nunc vestibulum accumsan suspendisse dignissim
							magna. Sit cursus augue tortor mattis. Nullam sed ac tincidunt
							cras non */}
						</p>
					</div>

					<div className="m-auto mt-7 lg:w-2/5">
						<Image src={businessmodel} alt="" className="w-full object-cover" />
					</div>
				</section>

				<section className="mx-auto mt-44 max-w-7xl px-10">
					<h2 className="mx-auto mb-4 max-w-sm text-center text-xl font-bold lg:text-4xl">
						Meet Our Team
					</h2>
					<div className="flex flex-row flex-wrap items-center justify-center gap-4 p-2 lg:gap-x-8 lg:gap-y-24 lg:p-10">
						{profileData.map((profile) => (
							<div key={profile.id}>
								<div className=" h-24 w-24 md:h-36 md:w-36 lg:h-64 lg:w-64">
									<Image
										src={profile.image}
										alt={profile.name}
										className="h-full w-full rounded-full"
									/>
								</div>
								<div className="my-2 text-center">
									<h2 className="font-bold">{profile.name}</h2>
									<h3>{profile.position}</h3>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* <section className="my-10 mx-auto mt-24 px-10 lg:max-w-7xl">
					<h2 className="mx-auto max-w-sm text-center text-xl font-bold lg:text-4xl">
						Our Portfolio
					</h2>
					<p className="mx-auto mt-10 p-2 text-center text-lg font-normal  lg:max-w-7xl lg:text-left lg:text-xl">
						Lorem ipsum dolor sit amet consectetur. Nisl morbi tellus diam
						mauris. Ipsum diam cras magnis ac. Consequat feugiat egestas rhoncus
						est magna euismod in dolor risus. Morbi nulla feugiat sit orci. Ac
						et velit sed phasellus mattis. Mauris imperdiet aenean convallis
						aliquet. Nunc vestibulum accumsan suspendisse dignissim magna. Sit
						cursus augue tortor mattis. Nullam sed ac tincidunt cras non
					</p>

					<div className="m-3 mx-auto mt-36 flex flex-col items-center justify-center gap-24 p-3  lg:grid lg:grid-cols-3">
						{Array.from({ length: 3 }, (_, i) => (
							<div
								key={i}
								className="h-[248px] w-[272px] rounded-lg border border-[#A0A0A0] bg-[#F5F5F5] lg:max-h-[363px] lg:max-w-[404px]"
							/>
						))}
					</div>
				</section> */}
			</div>
		</DefaultLayout>
	);
}

export default AboutUsPage;
