import React, { useState } from 'react';

import waitlista from '@/assets/svg/waitlista.svg';
import waitlistb from '@/assets/svg/waitlistb.svg';
import waitlistc from '@/assets/svg/waitlistc.svg';
import waitlistd from '@/assets/svg/waitlistd.svg';
import waitliste from '@/assets/svg/waitliste.svg';
import waitlistf from '@/assets/svg/waitlistf.svg';
import TopCurlyArrow from '@/components/Waitlist/TopCurlyArrow';
import BottomCurlyArrow from '@/components/Waitlist/BottomCurlyArrow';
import Header from '@/components/Waitlist/Header';
import CountdownTimer from '@/components/Waitlist/CountdownTimer';
import Image from 'next/image';
import Link from 'next/link';
import Facebook from '@/assets/svg/facebook-link';
import Instagram from '@/assets/svg/instagram-link';
import Twitter from '@/assets/svg/twitter-link';
import Whatsapp from '@/assets/svg/whatsapp-link';
import useReactHookForm from '@/hooks/useReactHookForm';
import { WaitlistPageProps, WaitlistPageSchema } from './WaitlistPage.types';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';

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
		name: 'Digital Marketing',
		image: waitlistc,
		message:
			'Achieve online success with carefully curated digital marketing strategies tailored to your brands needs.'
	},
	{
		id: 4,
		name: ' Subscriptions',
		image: waitlistd,
		message:
			'Experience a range of Sproutify’s capabilities without compromising your budget. Whether you’re a budding entrepreneur or an established enterprise, our flexible pricing options ensure that you can choose a plan that aligns perfectly with your goals.'
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

const antIcon = (
	<LoadingOutlined style={{ fontSize: 24, color: '#FEC431' }} spin />
);

function WaitlistPage() {
	const [loading, setLoading] = useState(false);

	const {
		// watch,
		register,
		handleSubmit
	} = useReactHookForm<WaitlistPageProps>(WaitlistPageSchema, {});

	const onWaitlistSubmit = (data: WaitlistPageProps) => {
		console.log(data);
		setLoading(true);

		try {
			const response = axios.post(
				'https://script.google.com/macros/s/AKfycbzVQ1ihAKhS5XmUqQ7WrRWzEXRqz7Yi20ruzcrpIt6mOWRnF7dospytWVdDVyRBOEuvpw/exec',
				data
			);

			console.log(response);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Header />
			<div className="relative min-h-[calc(100vh-100px)] bg-[#4C2884] px-[5%] pt-[20vh]">
				<div className="relative">
					<div className="absolute -top-20 left-[10%] lg:left-[15%]">
						<TopCurlyArrow />
					</div>
					<div>
						<h2 className="text-center text-[32px] font-semibold text-white lg:text-[56px]">
							<span className="text-[#FEC431]">Sproutify</span> is Coming Soon
						</h2>

						<p className="mx-auto mt-8 max-w-3xl text-center text-base text-[#FFFFFFBF] lg:mt-10 lg:text-xl">
							Be the first to harness the transformative power of Sproutify: the
							ultimate digital arsenal that unlocks a universe of possibilities.
							Get ready to experience cutting-edge technology and unparalleled
							functionality, all seamlessly integrated into a single platform!
							Join us as we redefine the digital landscape - get ready to
							thrive!
						</p>
					</div>

					<div className="absolute -bottom-10 right-[10%] md:-bottom-36 lg:right-[15%]">
						<BottomCurlyArrow />
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onWaitlistSubmit)}
					className="mt-20 flex flex-col items-center justify-center md:mt-10"
				>
					<label
						htmlFor="email"
						className="text-center text-base font-semibold text-white lg:text-2xl"
					>
						Join our waitlist and enjoy launch updates!
					</label>

					<div className="relative mt-6 h-16 w-full max-w-[420px] rounded-lg bg-[#1f171799]">
						<input
							type="email"
							{...register('email')} // Register the input field
							className="h-full w-full rounded-lg bg-transparent py-5 pl-8 pr-[126px] text-white"
							placeholder="Email address"
						/>

						<button
							type="submit"
							className="absolute top-1/2 right-4 w-[120px] -translate-y-1/2 transform rounded-lg bg-[#1F1717] px-4 py-2 text-xl text-white"
							disabled={loading}
						>
							{!loading ? 'Join' : <Spin indicator={antIcon} />}
						</button>
					</div>
				</form>

				<CountdownTimer />
			</div>

			<div className="px-[5%] pt-20 pb-14 lg:pt-40">
				<h3 className="text-center text-[32px]">
					We offer digital solutions to your business
				</h3>

				<div className="mt-10 grid gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20">
					{waitListData.map((item) => (
						<div key={item.id} className="flex flex-col items-center">
							<Image src={item.image} alt="waitlista" />
							<h4 className="text-xl text-[#1F1717]">{item.name}</h4>
							<p className="mt-4 max-w-[339px] text-center text-xl text-[#A0A0A0]">
								{item.message}
							</p>
						</div>
					))}
				</div>

				<form
					onSubmit={handleSubmit(onWaitlistSubmit)}
					className="mt-20 flex flex-col items-center justify-center md:mt-10"
				>
					<label
						htmlFor="email"
						className="text-center text-base font-semibold text-white lg:text-2xl"
					>
						Join our waitlist and enjoy launch updates!
					</label>

					<div className="relative mt-6 h-16 w-full max-w-[420px] rounded-lg bg-[#4c288480]">
						<input
							type="email"
							{...register('email')} // Register the input field
							className="h-full w-full rounded-lg bg-transparent py-5 pl-8 pr-[126px] text-white"
							placeholder="Email address"
						/>

						<button
							type="submit"
							className="absolute top-1/2 right-4 w-[120px] -translate-y-1/2 transform rounded-lg bg-[#4C2884] px-4 py-2 text-xl text-white"
						>
							Join
						</button>
					</div>
				</form>

				<div className="mt-52 text-center">
					<h2 className="cursor-pointer  font-poppins text-4xl">Sproutify</h2>

					<hr className="my-6" />

					<div className="mb-10 flex justify-center gap-x-10">
						<Link href="#">
							<Facebook width={32} color="#4C2884" />
						</Link>

						<Link href="#">
							<Instagram width={32} color="#4C2884" />
						</Link>

						<Link href="#">
							<Twitter width={32} color="#4C2884" />
						</Link>

						<Link href="#">
							<Whatsapp width={32} color="#4C2884" />
						</Link>
					</div>

					<span className="text-xl"> &copy; 2023</span>
				</div>
			</div>
		</>
	);
}

export default WaitlistPage;
