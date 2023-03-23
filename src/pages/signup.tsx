import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';

function SignUp() {
	return (
		<DefaultLayout>
			<div className="flex h-screen flex-col items-center justify-center">
				<h1 className="text-3xl">Sign Up</h1>
				<div className="w-2/3">
					<form className="mb-4 mt-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
						<div className="mb-4 flex flex-row justify-between">
							<div className='w-96'>
								<label
									className="mb-2 block text-sm font-bold text-gray-700"
									htmlFor="fname"
								>
									First Name
								</label>
								<input
									className="focus:shadow-outline w-full appearance-none rounded-xl border py-4 px-3 leading-tight text-gray-700 shadow focus:outline-none"
									id="fname"
									type="text"
									placeholder="First Name"
								/>
							</div>
							<div className='w-96'>
								<label
									className="mb-2 block text-sm font-bold text-gray-700"
									htmlFor="lname"
								>
									Last Name
								</label>
								<input
									className="focus:shadow-outline w-full appearance-none rounded-xl border py-4 px-3 leading-tight text-gray-700 shadow focus:outline-none"
									id="lname"
									type="text"
									placeholder="Last Name"
								/>
							</div>
						</div>
                        <div className="mb-4 flex flex-row justify-between">
							<div className='w-96'>
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
							<div className='w-96'>
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
						<div className="mb-4">
                            <div>
							<label
								className="mb-2 block text-sm font-bold text-gray-700"
								htmlFor="password"
							>
								Password
							</label>
							<input
								className="focus:shadow-outline w-full appearance-none rounded-xl border py-4 px-3 leading-tight text-gray-700 shadow focus:outline-none"
								id="password"
								type="text"
								placeholder="Password"
							/>
                            <p className="text-gray-600 text-xs italic">Password should contain atleast one capital letter</p>
                            <p className="text-gray-600 text-xs italic">Password should contain atleast one number </p>
                            <p className="text-gray-600 text-xs italic">Password should contain atleast one special key</p>
                            </div>
							<div className="mt-4 text-center flex flex-row justify-center space-x-6 ">
								<p className="inline-block align-baseline text-sm font-bold">
									Are you a business owner?
								</p>
                                <div className="text-center flex flex-row justify-center space-x-4">
                                    <div className='space-x-1'>
                                    <label htmlFor="radioDefault01">Yes</label>
                                    <input type="radio"  name="flexRadioDefault" id="radioDefault01"/>
                                    </div>

                                    <div className='space-x-1'>
                                    <label htmlFor="radioDefault02">No</label>
                                    <input type="radio" name="flexRadioDefault" id="radioDefault02"/>
                                    </div>
                                </div>
							</div>
							<div className='flex justify-center'>
								<button
									className="focus:shadow-outline mt-4 w-1/2 rounded-xl bg-[#D9D9D9] py-4 px-4 text-lg font-bold text-white hover:bg-gray-500 focus:outline-none"
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
			</div>
		</DefaultLayout>
	);
}

export default SignUp;
