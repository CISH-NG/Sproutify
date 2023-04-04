import React, { useEffect, useState } from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';

function SignUp() {
	const [firstName, setFirstName] = useState(' ');
	const [lastName, setLastName] = useState(' ');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');
	const [isFormFilled, setIsFormFilled] = useState(false);

	useEffect(() => {
		if (
			firstName.trim() !== '' &&
			lastName.trim() !== '' &&
			email.trim() !== '' &&
			phoneNumber.trim() !== '' &&
			password.trim() !== ''
		) {
			setIsFormFilled(true);
		} else {
			setIsFormFilled(false);
		}
	}, [firstName, lastName, email, phoneNumber, password]);

	function handleInputChange(event: React.FormEvent<HTMLFormElement>) {
		const { id, value } = event.target as HTMLInputElement;

		if (id === 'firstname') {
			setFirstName(value);
		} else if (id === 'lastname') {
			setLastName(value);
		} else if (id === 'email') {
			setEmail(value);
		} else if (id === 'phonenumber') {
			setPhoneNumber(value);
		} else if (id === 'password') {
			setPassword(value);
		}
	}

	return (
		<DefaultLayout>
			<div className="flex h-[calc(100vh-135px)] flex-col items-center justify-center">
				<h1 className="mb-10 text-3xl">Sign Up</h1>
				<form
					className="mx-auto mb-4 mt-4 w-full max-w-5xl rounded bg-white px-8 pt-6 pb-8 sm:w-[650px]"
					onChange={handleInputChange}
				>
					<div className="my-2 flex  flex-col justify-between sm:flex-row">
						<div className="w-96">
							<label
								className="mb-2 block text-sm font-bold text-gray-700"
								htmlFor="firstname"
							>
								First Name
							</label>
							<input
								className=" w-full appearance-none rounded-xl border py-4 px-3 leading-tight text-gray-700 shadow focus:outline-none"
								id="firstname"
								type="text"
								placeholder="First Name"
							/>
						</div>
						<div className="w-96">
							<label
								className="mb-2 block text-sm font-bold text-gray-700"
								htmlFor="lastname"
							>
								Last Name
							</label>
							<input
								className=" w-full appearance-none rounded-xl border py-4 px-3 leading-tight text-gray-700 shadow focus:outline-none"
								id="lastname"
								type="text"
								placeholder="Last Name"
							/>
						</div>
					</div>
					<div className="my-2 flex  flex-col justify-between sm:flex-row">
						<div className="w-96">
							<label
								className="mb-2 block text-sm font-bold text-gray-700"
								htmlFor="email"
							>
								Email Address
							</label>
							<input
								className="focus:shadow-outline w-full appearance-none rounded-xl border py-4 px-3 leading-tight text-gray-700 shadow focus:outline-none"
								id="email"
								type="email"
								placeholder="Email Address"
							/>
						</div>
						<div className="w-96 ">
							<label
								className="mb-2 block text-sm font-bold text-gray-700"
								htmlFor="phonenumber"
							>
								Phone Number
							</label>
							<input
								className="focus:shadow-outline w-full appearance-none rounded-xl border py-4 px-3 leading-tight text-gray-700 shadow focus:outline-none"
								id="phonenumber"
								type="tel"
								placeholder="+234"
							/>
						</div>
					</div>
					<div className="my-2">
						<div className="w-96">
							<label
								className="mb-2 block text-sm font-bold text-gray-700"
								htmlFor="password"
							>
								Password
							</label>
							<input
								className="w-full appearance-none rounded-xl border py-4 px-3 leading-tight text-gray-700 shadow focus:outline-none"
								id="password"
								type="text"
								placeholder="Password"
							/>
							<p className="text-xs  text-gray-600">
								Password should contain atleast one capital letter
							</p>
							<p className="text-xs  text-gray-600">
								Password should contain atleast one number{' '}
							</p>
							<p className="text-xs  text-gray-600">
								Password should contain atleast one special key
							</p>
						</div>
						<div className="mt-4 flex flex-row justify-center space-x-6 text-center ">
							<p className="inline-block align-baseline text-sm font-bold">
								Are you a business owner?
							</p>
							<div className="flex flex-row justify-center space-x-4 text-center">
								<div className="space-x-1">
									<label htmlFor="radioDefault01">Yes</label>
									<input
										type="radio"
										name="flexRadioDefault"
										id="radioDefault01"
									/>
								</div>

								<div className="space-x-1">
									<label htmlFor="radioDefault02">No</label>
									<input
										type="radio"
										name="flexRadioDefault"
										id="radioDefault02"
									/>
								</div>
							</div>
						</div>
						<div className="flex justify-center">
							<button
								className={`w-full rounded-xl  ${
									isFormFilled ? 'bg-[#4C2884]' : 'bg-[#4c28848f]'
								} py-4 px-4 text-lg font-bold text-white`}
								type="button"
							>
								Get Started
							</button>
						</div>
						<div className="mt-4 flex w-full flex-row justify-center">
							<a
								className="inline-block align-baseline text-sm font-bold text-[#DE0000] hover:text-red-800"
								href="#"
							>
								Read terms and conditions
							</a>
						</div>
					</div>
				</form>
			</div>
		</DefaultLayout>
	);
}

export default SignUp;
