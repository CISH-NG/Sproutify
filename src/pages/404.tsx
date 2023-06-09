import Head from 'next/head';
import Image from 'next/image';

import DefaultLayout from '@/layouts/DefaultLayout';
import notFound from '../assets/svg/404.svg';

export default function Custom404() {
	return (
		<>
			<Head>
				<title>Sproutify | Not found</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<DefaultLayout>
				<div className="relative flex w-screen flex-col items-center justify-center pt-20 pb-24">
					<div className="px-6">
						<h2 className="text-center font-sans text-7xl font-semibold lg:text-[120px] lg:leading-[146px]">
							Ooops!
						</h2>

						<div className="relative z-10 mb-20">
							<Image src={notFound} alt="" />
						</div>

						<p className="absolute top-[20rem] text-[150px] font-semibold text-[#F0F0F0] sm:text-[300px] md:text-[350px] lg:text-[400px]">
							404
						</p>
					</div>

					<div className="w-full bg-inky-black py-5 px-[5%] lg:w-[90%] lg:rounded-3xl lg:py-8 2xl:max-w-screen-2xl">
						<p className="text-center text-base text-white lg:text-5xl">
							Over <span className="text-[#FEC431]">50,000</span> businesses
							enjoying tech services
						</p>
					</div>
				</div>
			</DefaultLayout>
		</>
	);
}
