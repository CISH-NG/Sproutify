import Image from 'next/image';

import { NotificationIcon } from '@/assets/svg/red-notification';

export default function Settings() {
	return (
		<>
			<div className="mb-6 flex items-center justify-between">
				<h2 className="text-[32px] font-semibold">Settings</h2>

				<button>
					<NotificationIcon />
				</button>
			</div>

			<div className="mb-8 flex items-center gap-x-6 rounded-xl bg-white py-[33px] px-10">
				<Image
					src="https://images.unsplash.com/photo-1526253038957-bce54e05968e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
					alt="profile image"
					className="h-[100px] w-[100px] rounded-full object-cover"
					width={100}
					height={100}
				/>

				<div>
					<p className="text-2xl">Alfred Chadow</p>
					<span className="text-2xl text-[#A0A0A0]">Business Owner</span>
				</div>
			</div>

			<div className="mb-8 rounded-xl bg-white p-10">
				<h3 className="mb-10 text-[32px] font-normal">User Info</h3>

				<div className="grid gap-y-8 gap-x-[60px] md:grid-cols-2">
					<div className="flex flex-col gap-y-4">
						<label htmlFor="username" className="text-2xl">
							User Name
						</label>
						<input
							name="username"
							className="rounded-xl border border-[#CECECE40] bg-[#F0F0F026] py-5 px-10 text-2xl"
							placeholder="alfredchadow@gmail.com"
							disabled
						/>
					</div>

					<div className="flex flex-col gap-y-4">
						<label htmlFor="username" className="text-2xl">
							Phone number
						</label>
						<input
							name="username"
							className="rounded-xl border border-[#CECECE40] bg-[#F0F0F026] py-5 px-10 text-2xl"
							placeholder="alfredchadow@gmail.com"
							disabled
						/>
					</div>

					<div className="flex flex-col gap-y-4">
						<label htmlFor="username" className="text-2xl">
							Address
						</label>
						<input
							name="username"
							className="rounded-xl border border-[#CECECE40] bg-[#F0F0F026] py-5 px-10 text-2xl"
							placeholder="alfredchadow@gmail.com"
							disabled
						/>
					</div>

					<div className="flex flex-col gap-y-4">
						<label htmlFor="username" className="text-2xl">
							Email address
						</label>
						<input
							name="username"
							className="rounded-xl border border-[#CECECE40] bg-[#F0F0F026] py-5 px-10 text-2xl"
							placeholder="alfredchadow@gmail.com"
							disabled
						/>
					</div>
				</div>
			</div>

			<div className="mb-8 rounded-xl bg-white p-10">
				<h3 className="mb-10 text-[32px] font-normal">Change Password</h3>

				<div className="grid gap-y-8 gap-x-[60px] md:grid-cols-2">
					<div className="flex flex-col gap-y-4">
						<label htmlFor="username" className="text-2xl">
							Current Password
						</label>
						<input
							type="password"
							name="username"
							className="rounded-xl border border-[#CECECE40] bg-[#F0F0F026] py-5 px-10 text-2xl"
							placeholder="*************"
							disabled
						/>
					</div>

					<div className="flex flex-col gap-y-4">
						<label htmlFor="username" className="text-2xl">
							New Password
						</label>
						<input
							name="username"
							className="rounded-xl border border-[#CECECE40] bg-[#F0F0F026] py-5 px-10 text-2xl"
							placeholder="*************"
							disabled
						/>
					</div>

					<div className="flex flex-col gap-y-4">
						<label htmlFor="username" className="text-2xl">
							Phone number
						</label>
						<input
							name="username"
							className="rounded-xl border border-[#CECECE40] bg-[#F0F0F026] py-5 px-10 text-2xl"
							placeholder="alfredchadow@gmail.com"
							disabled
						/>
					</div>

					<div className="flex flex-col gap-y-4">
						<label htmlFor="username" className="text-2xl">
							Email address
						</label>
						<input
							name="username"
							className="rounded-xl border border-[#CECECE40] bg-[#F0F0F026] py-5 px-10 text-2xl"
							placeholder="alfredchadow@gmail.com"
							disabled
						/>
					</div>
				</div>
			</div>
		</>
	);
}
