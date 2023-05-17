import DefaultLayout from '@/layouts/DefaultLayout';
import Head from 'next/head';
import Image from 'next/image';

import heroImage from '../assets/images/hero-image.png';
import retailer from '../assets/images/retailer.png';
import frame7 from '../assets/images/frame-7.png';
import frame8 from '../assets/images/frame-8.png';
import frame9 from '../assets/images/frame-9.png';
import frame10 from '../assets/images/frame-10.png';
import squareImg from '../assets/images/square.png';
import group95 from '../assets/svg/group-95.svg';
import group96 from '../assets/svg/group-96.svg';
import Polygon from '@/assets/svg/polygon';
import mobilepreview1 from '../assets/images/mobile-prev1.png';
import mobilepreview2 from '../assets/images/mobile-prev12.png';

export default function Home() {
	return (
		<>
			<Head>
				<title>Sproutify</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<DefaultLayout>
				<section className="max-width mt-20 flex flex-col-reverse items-center gap-y-10 gap-x-[5%] lg:mt-0 lg:min-h-[calc(100vh-135px)] lg:flex-row lg:py-20">
					<div className="lg:w-1/2">
						<div className="mb-8 lg:mb-20">
							<h1 className="text-center font-sans text-2xl font-semibold text-inky-black lg:text-left lg:text-[56px] lg:leading-[68px]">
								Our <span className="text-electric-purple">Business</span> is to
								help manage your{' '}
								<span className="text-electric-purple">Business</span>
							</h1>

							<p className="text-paragraph mt-6">
								Lorem ipsum dolor sit amet consectetur. Iaculis ultrices egestas
								in malesuada at vitae vel iaculis fermentum. Non semper
								suscipit. Egestas donec suspendisse vitae scelerisque orci enim.
								Non mattis lectus vitae ultrices.
							</p>
						</div>

						<a href="#" className="cta-btn">
							Get started
						</a>
					</div>

					<div className="px-[10%] sm:px-[20%] lg:w-1/2 lg:px-0">
						<Image
							src={heroImage}
							alt="Picture of the author"
							className="mx-auto mt-10 rounded-xl lg:ml-auto lg:mr-0 lg:mt-0"
						/>
					</div>
				</section>

				<section className="mt-14 lg:mx-auto lg:mt-5 lg:px-[5%] 2xl:max-w-screen-2xl">
					<div className="w-full bg-inky-black py-5 px-[5%] lg:rounded-3xl lg:py-8">
						<p className="text-center text-base text-white lg:text-5xl">
							Over <span className="text-[#FEC431]">50,000</span> businesses
							enjoying tech services
						</p>
					</div>
				</section>

				<section className="max-width mt-10 flex flex-col-reverse items-center gap-x-[5%] lg:mt-44 lg:flex-row lg:gap-x-0">
					<div className="mt-10 px-[10%] sm:px-[20%] lg:mt-0 lg:w-1/2 lg:px-0">
						<Image
							src={retailer}
							alt="Picture of a retailer"
							className="mx-auto rounded-xl lg:mr-auto lg:ml-0"
						/>
					</div>

					<div className="lg:w-1/2">
						<div className="mb-8 lg:mb-20">
							<h2 className="text-subtitle">Get a website for your business</h2>

							<p className="text-paragraph mt-6">
								Lorem ipsum dolor sit amet consectetur. Iaculis ultrices egestas
								in malesuada at vitae vel iaculis fermentum. Non semper
								suscipit. Egestas donec suspendisse vitae scelerisque orci enim.
								Non mattis lectus vitae ultrices.
							</p>
						</div>

						<a href="#" className="cta-btn">
							Get started
						</a>
					</div>
				</section>

				<section className="max-width mt-10 flex flex-col items-center gap-x-[5%] lg:mt-44 lg:flex-row lg:gap-x-0">
					<div className="lg:w-1/2">
						<div className="mb-8 lg:mb-20">
							<h2 className="text-subtitle">
								Create quick invoices for your customers
							</h2>

							<p className="text-paragraph mt-6">
								Lorem ipsum dolor sit amet consectetur. Iaculis ultrices egestas
								in malesuada at vitae vel iaculis fermentum. Non semper
								suscipit. Egestas donec suspendisse vitae scelerisque orci enim.
								Non mattis lectus vitae ultrices.
							</p>
						</div>

						<a href="#" className="cta-btn">
							Get started
						</a>
					</div>

					<div className="mt-10 px-[10%] sm:px-[20%] lg:mt-0 lg:w-1/2 lg:px-0">
						<Image
							src={retailer}
							alt="Picture of the retailer"
							className="mx-auto rounded-xl lg:ml-auto lg:mr-0"
						/>
					</div>
				</section>

				<section className="max-width mt-8 lg:mt-40">
					<h2 className="text-center text-2xl font-semibold lg:text-5xl">
						What we do
					</h2>

					<div className="m-auto mt-8 flex max-w-lg flex-col gap-y-8 gap-x-[5%] lg:mt-20 lg:max-w-full lg:flex-row xl:gap-x-20 ">
						<div className="flex flex-col rounded-3xl bg-[#CECECE40] px-7 pt-10 pb-4 lg:w-1/2 lg:px-14 lg:pt-16 lg:pb-12">
							<h3 className="mb-8 max-w-[280px] text-xl font-semibold sm:max-w-md lg:mb-[54px] lg:text-[32px] lg:leading-10">
								Encouraging tech solutions for small and large businesses
							</h3>

							<div>
								<Image src={group95} alt="preview image" className="mx-auto" />
							</div>

							<p className="font-sans text-base text-[#A0A0A0] lg:text-2xl">
								Lorem ipsum dolor sit amet consectetur. Iaculis ultrices Leo
								vitae enim sed morbi. Egestas donec suspendisse vitae
								scelerisque orci enim. Non mattis lectus vitae ultrices.
							</p>
						</div>

						<div className="flex flex-col rounded-3xl bg-[#CECECE40] px-7 pt-10 pb-4 lg:w-1/2 lg:px-14 lg:pt-16 lg:pb-12">
							<h3 className="mb-8 max-w-[280px] text-xl font-semibold sm:max-w-md lg:mb-[54px] lg:text-[32px] lg:leading-10">
								Encouraging tech solutions for small and large businesses
							</h3>

							<div>
								<Image src={group96} alt="preview image" className="mx-auto" />
							</div>

							<p className="font-sans text-base text-[#A0A0A0] lg:text-2xl">
								Lorem ipsum dolor sit amet consectetur. Iaculis ultrices Leo
								vitae enim sed morbi. Egestas donec suspendisse vitae
								scelerisque orci enim. Non mattis lectus vitae ultrices.
							</p>
						</div>
					</div>
				</section>

				<section className=" relative mt-12 flex h-[100px] w-full justify-around gap-5 bg-[#4C2884] lg:mt-52 lg:h-[320px] ">
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

				<section className="max-width mt-16 px-[10%] lg:mt-40 lg:px-[5%]">
					<h2 className="text-center text-2xl font-semibold lg:text-5xl">
						What our clients are saying
					</h2>

					<div className="mt-8 flex flex-wrap gap-y-20 md:mt-20 lg:gap-x-[5%]">
						<div className="flex w-full items-center gap-x-3 md:gap-x-8 lg:w-[47.5%] lg:items-start">
							<Image
								src={frame8}
								alt="Frame 8"
								className="h-[72px] w-[72px] rounded-xl object-cover md:h-[150px] md:w-[150px] md:rounded-3xl lg:h-[280px] lg:w-[280px]"
							/>
							<div>
								<h3 className="font-sans text-base font-semibold text-[#1F1717] md:text-2xl lg:text-[32px]">
									Gabriel Jalingo
								</h3>
								<p className="mt-1 text-sm text-[#A0A0A0] md:mt-4 md:text-lg  lg:mt-8 lg:text-2xl">
									“Lorem ipsum dolor sit amet consectetur. Iaculis ultrices Leo
									vitae enim sed morbi. Egestas donec suspendisse vitae
									scelerisque orci enim. Non mattis lectus vitae ultrices”.
								</p>
							</div>
						</div>

						<div className="flex w-full items-center gap-x-3 md:gap-x-8 lg:w-[47.5%] lg:items-start">
							<Image
								src={frame9}
								alt="Frame 9"
								className="h-[72px] w-[72px] rounded-xl object-cover md:h-[150px] md:w-[150px] md:rounded-3xl lg:h-[280px] lg:w-[280px]"
							/>
							<div>
								<h3 className="font-sans text-base font-semibold text-[#1F1717] md:text-2xl lg:text-[32px]">
									Gabriel Jalingo
								</h3>
								<p className="mt-1 text-sm text-[#A0A0A0] md:mt-4 md:text-lg  lg:mt-8 lg:text-2xl">
									“Lorem ipsum dolor sit amet consectetur. Iaculis ultrices Leo
									vitae enim sed morbi. Egestas donec suspendisse vitae
									scelerisque orci enim. Non mattis lectus vitae ultrices”.
								</p>
							</div>
						</div>

						<div className="flex w-full items-center gap-x-3 md:gap-x-8 lg:w-[47.5%] lg:items-start">
							<Image
								src={frame7}
								alt="Frame 7"
								className="h-[72px] w-[72px] rounded-xl object-cover md:h-[150px] md:w-[150px] md:rounded-3xl lg:h-[280px] lg:w-[280px]"
							/>
							<div>
								<h3 className="font-sans text-base font-semibold text-[#1F1717] md:text-2xl lg:text-[32px]">
									Gabriel Jalingo
								</h3>
								<p className="mt-1 text-sm text-[#A0A0A0] md:mt-4 md:text-lg  lg:mt-8 lg:text-2xl">
									“Lorem ipsum dolor sit amet consectetur. Iaculis ultrices Leo
									vitae enim sed morbi. Egestas donec suspendisse vitae
									scelerisque orci enim. Non mattis lectus vitae ultrices”.
								</p>
							</div>
						</div>

						<div className="flex w-full items-center gap-x-3 md:gap-x-8 lg:w-[47.5%] lg:items-start">
							<Image
								src={frame10}
								alt="Frame 10"
								className="h-[72px] w-[72px] rounded-xl object-cover md:h-[150px] md:w-[150px] md:rounded-3xl lg:h-[280px] lg:w-[280px]"
							/>
							<div>
								<h3 className="font-sans text-base font-semibold text-[#1F1717] md:text-2xl lg:text-[32px]">
									Gabriel Jalingo
								</h3>
								<p className="mt-1 text-sm text-[#A0A0A0] md:mt-4 md:text-lg  lg:mt-8 lg:text-2xl">
									“Lorem ipsum dolor sit amet consectetur. Iaculis ultrices Leo
									vitae enim sed morbi. Egestas donec suspendisse vitae
									scelerisque orci enim. Non mattis lectus vitae ultrices”.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="max-width mt-16 px-[10%] lg:mt-40 lg:px-[5%]">
					<h2 className="text-center text-2xl font-semibold lg:text-5xl">
						Our Partners
					</h2>

					<div className="mt-20 mb-14 flex flex-wrap justify-between gap-y-6 lg:mb-40">
						{new Array(5).fill(0).map((_, i) => (
							<Image src={squareImg} alt="partner" key={i} />
						))}
					</div>
				</section>
			</DefaultLayout>
		</>
	);
}
