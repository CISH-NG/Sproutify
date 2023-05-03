import Image from 'next/image';

import { NotificationIcon } from '@/assets/svg/red-notification';
import unsplash from '../../assets/images/unsplash.jpg';
import ArrowRightIcon from '@/assets/svg/arrow-right';
import Link from 'next/link';
import {
	KeyIcon,
	UserIcon,
	NotificationIcon as NotifyIcon,
	CardIcon,
	PhoneIcon,
	UserPlusIcon
} from '@/assets/svg/settings-link-icon';

const settingsData = [
	{
		icon: <UserIcon />,
		category: 'User Info',
		description:
			'All your account information such as email address, location and phone number',
		link: '#'
	},
	{
		icon: <KeyIcon />,
		category: 'Change Password',
		description: 'Make changes to your password anytime',
		link: '#'
	},
	{
		icon: <NotifyIcon />,
		category: 'Notifications',
		description: 'Turn on/off email notifications anytime',
		link: '#'
	},
	{
		icon: <CardIcon />,
		category: 'Payment',
		description: 'Update subscription payment info anytime',
		link: '#'
	},
	{
		icon: <PhoneIcon />,
		category: 'Social Media',
		description: 'Update URl to social media accounts',
		link: '#'
	},
	{
		icon: <UserPlusIcon />,
		category: 'Account Management',
		description: 'Update subscription payment info anytime',
		link: '#'
	}
];

export default function Settings() {
	return (
		<>
			<div className="mb-6 flex items-center justify-between">
				<h2 className="text-[32px] font-semibold">Settings</h2>

				<button>
					<NotificationIcon />
				</button>
			</div>

			<div className="mb-8 flex items-center gap-x-6 rounded-xl bg-white p-5 md:p-10">
				<Image
					src={unsplash}
					alt="profile image"
					className="h-[100px] w-[100px] rounded-full object-cover"
				/>

				<div>
					<p className="text-2xl">Alfred Chadow</p>
					<span className="text-2xl text-[#A0A0A0]">Business Owner</span>
				</div>
			</div>

			{settingsData.map((data) => (
				<div
					key={data.category}
					className="mb-6 flex items-center justify-between gap-x-3 rounded-xl bg-white p-5 md:p-10"
				>
					<div className="flex flex-col gap-6 md:flex-row md:items-center ">
						{data.icon}
						<div className="flex flex-col gap-y-2">
							<h3 className="text-2xl font-normal">{data.category}</h3>
							<p className="text-xl text-[#A0A0A0]">{data.description}</p>
						</div>
					</div>

					<Link href={data.link}>
						<ArrowRightIcon />
					</Link>
				</div>
			))}
		</>
	);
}
