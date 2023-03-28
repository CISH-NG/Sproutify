import DefaultLayout from '@/layouts/DefaultLayout';
import Image from 'next/image';
import React from 'react';

import googleBtn from '../assets/svg/google-btn.svg';
import facebookBtn from '../assets/svg/facebook-btn.svg';

function Signin() {
	return (
		<DefaultLayout>
			<div className="flex h-[calc(100vh-135px)] flex-col items-center justify-center px-[5%]">
				<h1 className="mb-10 text-3xl">Sign In</h1>

				<form className="mb-4 mt-4 flex w-full max-w-[470px] flex-col items-center rounded-3xl border border-[#D9D9D9] px-[72px] pt-12 pb-8">
					<h2 className="mb-10 text-2xl">Input sign in information</h2>
					<div className="w-full">
						<input
							className="mb-8 w-full rounded-xl border py-4 px-3 leading-tight text-gray-700 focus:shadow"
							id="email"
							type="text"
							placeholder="Email Address"
						/>

						<input
							className="mb-6 w-full rounded-xl border py-4 px-3 leading-tight text-gray-700 focus:shadow"
							id="password"
							type="text"
							placeholder="Password"
						/>

						<a
							className="mb-8 block text-center align-baseline text-base text-[#DE0000]"
							href="#"
						>
							Forgot Password
						</a>

						<button
							className="w-full rounded-xl bg-[#4c28848f] py-4 px-4 text-lg font-bold text-white "
							type="button"
						>
							Sign In
						</button>

						<div className="mt-6 flex w-full flex-row justify-evenly">
							<p className="font-sans text-base text-[#1F1717]">
								You do not have an account?{' '}
								<a className="text-[#00820D]" href="#">
									Sign Up
								</a>
							</p>
						</div>

						<div className="mt-8 flex justify-center gap-x-6">
							<button>
								<Image src={googleBtn} alt="Google signin button" />
							</button>
							<button>
								<Image src={facebookBtn} alt="Google signin button" />
							</button>
						</div>
					</div>
				</form>
			</div>
		</DefaultLayout>
	);
}

export default Signin;
