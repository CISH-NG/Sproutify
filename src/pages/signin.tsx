import DefaultLayout from '@/layouts/DefaultLayout';
import React from 'react';

function Signin() {
	return (
		<DefaultLayout>
			<div className="flex h-screen flex-col items-center justify-center">
				<h1 className="text-3xl">Sign In</h1>
				<div className="w-96">
					<form className="mb-4 mt-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
						<div className="mb-4">
							<label
								className="mb-2 block text-sm font-bold text-gray-700"
								htmlFor="email"
							>
								Email Address
							</label>
							<input
								className="focus:shadow-outline w-full appearance-none rounded-xl border py-4 px-3 leading-tight text-gray-700 shadow focus:outline-none"
								id="email"
								type="text"
								placeholder="Email Address"
							/>
						</div>
						<div className="mb-4">
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
							<div className="mt-4 text-center">
								<a
									className="inline-block align-baseline text-sm font-bold text-[#DE0000] hover:text-red-800"
									href="#"
								>
									Forgot Password
								</a>
							</div>
							<div>
								<button
									className="focus:shadow-outline mt-4 w-full rounded-xl bg-[#D9D9D9] py-4 px-4 text-lg font-bold text-white hover:bg-gray-500 focus:outline-none"
									type="button"
								>
									Sign In
								</button>
							</div>
							<div className="mt-4 flex w-full flex-row justify-evenly">
								<p>You do not have an account?</p>
								<a
									className="inline-block align-baseline text-sm font-bold text-[#00820D] hover:text-green-800"
									href="#"
								>
									Sign Up
								</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</DefaultLayout>
	);
}

export default Signin;
