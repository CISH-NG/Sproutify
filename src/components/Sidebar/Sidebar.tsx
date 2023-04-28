import Link from 'next/link';
import {
	BudgetIcon,
	ChartIcon,
	DashboardIcon,
	SettingsIcon,
	SignoutIcon,
	SocialIcon
} from '@/assets/svg/dasboard-menu';
import { useCallback } from 'react';
import { SidebarMenuItemProps } from './Sidebar.types';
import { useRouter } from 'next/router';

const SidebarMenuItems: SidebarMenuItemProps[] = [
	{
		index: 0,
		label: 'Dashboard',
		url: '/dashboard',
		icon: <DashboardIcon />
	},
	{
		index: 1,
		label: 'Social media',
		url: '/dashboard/social-media',
		icon: <SocialIcon />
	},
	{
		index: 2,
		label: 'Budget',
		url: '/dashboard/budget',
		icon: <BudgetIcon />
	},
	{
		index: 3,
		label: 'Expense tra',
		url: '/dashboard/expenses',
		icon: <ChartIcon />
	},
	{
		index: 4,
		label: 'Invoice',
		url: '/dashboard/invoice',
		icon: <DashboardIcon />
	},
	{
		index: 5,
		label: 'Settings',
		url: '/dashboard/settings',
		icon: <SettingsIcon />
	},
	{
		index: 6,
		label: 'Sign Out',
		url: '#',
		icon: <SignoutIcon />
	}
];

export default function Sidebar() {
	const router = useRouter();
	const isSignout = useCallback((label: string) => label === 'Sign Out', []);

	return (
		<nav className="absolute mt-10 ml-8 hidden min-h-[80vh] w-[20vw] rounded-3xl bg-white py-14 pl-5 lg:block xl:pl-[5%]">
			<ul className="flex flex-col gap-y-8 font-sans text-2xl">
				{SidebarMenuItems.map((item) => (
					<li
						key={item.index}
						className={`  ${isSignout(item.label) && 'mt-[50%]'}`}
					>
						<Link
							href={item.url}
							className={`flex cursor-pointer gap-x-6  ${
								isSignout(item.label) ? 'text-[#DE0000]' : 'text-[#1f1717bf]'
							} ${router.pathname === item.url && 'text-[#9A4CEC]'}`}
						>
							{item.icon}
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
