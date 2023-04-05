import DefaultLayout from '@/layouts/DefaultLayout';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import illustration from '../assets/svg/contact-us.svg';
import phone from '../assets/svg/phone.svg';
import home from '../assets/svg/home.svg';

function ContactUs() {
	const [email, setEmail] = useState('');
	const [fullname, setFullname] = useState('');
	const [message, setMessage] = useState('');
	const [isFormFilled, setIsFormFilled] = useState(false);

	useEffect(() => {
		if (
			email.trim() !== '' &&
			fullname.trim() !== '' &&
			message.trim() !== ''
		) {
			setIsFormFilled(true);
		} else {
			setIsFormFilled(false);
		}
	}, [email, fullname, message]);

	function handleInputChange(event: React.FormEvent<HTMLFormElement>) {
		const { id, value } = event.target as HTMLInputElement;

		if (id === 'email') {
			setEmail(value);
		} else if (id === 'fullname') {
			setFullname(value);
		} else if (id === 'message') {
			setMessage(value);
		}
	}

	return (
		<DefaultLayout>
			<div className="mt-28 mb-16 grid items-center gap-y-24 px-[5%] lg:grid-cols-2 lg:justify-between 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-0">
				<div className="mx-auto lg:ml-0 lg:mr-auto">
					<Image src={illustration} alt="illustration" />
				</div>

				<form
					className="mx-auto flex w-full max-w-[470px] flex-col items-center rounded-3xl border border-[#D9D9D9] px-8 pt-14 pb-12 lg:mr-0 lg:ml-auto lg:px-[72px]"
					onChange={handleInputChange}
				>
					<h2 className="mb-10 text-center text-2xl">Leave us a message</h2>

					<div className="w-full">
						<textarea
							name="message"
							id="message"
							className="mb-8 min-h-[186px] w-full rounded-xl border bg-[#CECECE40] py-4 px-3 focus:bg-white"
						></textarea>

						<div>
							<label htmlFor="fullname">Full name</label>
							<input
								className="mb-8 mt-2 w-full rounded-xl border py-4 px-3 leading-tight text-gray-700 focus:shadow"
								id="fullname"
								type="text"
								placeholder="Full name"
							/>
						</div>

						<div>
							<label htmlFor="fullname">Email address</label>
							<input
								className="mb-8 mt-2 w-full rounded-xl border py-4 px-3 leading-tight text-gray-700 focus:shadow"
								id="email"
								type="text"
								placeholder="Email address"
							/>
						</div>

						<button
							className={`w-full rounded-xl  ${
								isFormFilled ? 'bg-[#4C2884]' : 'bg-[#4c28848f]'
							} py-4 px-4 text-lg font-bold text-white`}
							type="button"
						>
							Send
						</button>
					</div>
				</form>

				<div>
					<div className="flex items-center gap-x-6">
						<h2 className="font-sans text-[40px] font-semibold">Address</h2>
						<span aria-hidden="true">
							<Image src={home} alt="home" />
						</span>
					</div>
					<p className="mt-6 text-2xl font-normal sm:max-w-lg">
						Lorem ipsum dolor sit amet consectetur. Iaculis ultrices egestas in
						malesuada at vitae vel iaculis fermentum. Non sempe
					</p>
				</div>

				<div className="lg:ml-auto lg:mr-0">
					<div className="flex items-center gap-x-6">
						<h2 className=" font-sans text-[40px] font-semibold">
							Phone number
						</h2>
						<span aria-hidden="true">
							<Image src={phone} alt="phone" />
						</span>
					</div>

					<p className="mt-6 text-2xl font-normal sm:max-w-md">
						+234 815 2241 538, +234 902 4111 112, +234 803 2222 134
					</p>
				</div>
			</div>
		</DefaultLayout>
	);
}

export default ContactUs;
