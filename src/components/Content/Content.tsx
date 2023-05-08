import React from 'react';
import Image from 'next/image';
import notificationIcon from '@/assets/svg/notificationIcon.svg';
import communicationIcon from '@/assets/svg/communicationIcon.svg';
import ContentComponent from './ContentComponent';

function Content() {
	return (
		<div>
			<div className="m-3 flex justify-between">
				<h1 className=" text-3xl font-semibold">Content</h1>
				<div
					className=" flex h-[40px] w-[40px] items-center justify-center rounded-3xl "
					style={{ backgroundColor: '#DE0000' }}
				>
					<Image src={notificationIcon} alt="notification icon" />
				</div>
			</div>
			<div className="m-3 flex justify-between">
				<select className="h-[56px] w-[264px] rounded-xl border border-[#A0A0A0] text-center text-2xl">
					<option>February 2023</option>
				</select>
				<div
					className="flex h-[56px] w-[174px] items-center justify-center gap-6 rounded-2xl"
					style={{ backgroundColor: '#1F1717' }}
				>
					<div
						className="flex h-[24px] w-[24px] justify-center rounded-2xl"
						style={{ backgroundColor: '#404040' }}
					>
						<Image src={communicationIcon} alt="" />
					</div>
					<h2 className=" text-2xl text-white">Support</h2>
				</div>
			</div>
			<ContentComponent />
			<ContentComponent />
			<ContentComponent />
			<ContentComponent />
		</div>
	);
}

export default Content;
