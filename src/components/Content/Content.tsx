import React from 'react';
import Image from 'next/image';
import notificationIcon from '@/assets/svg/notificationIcon.svg';
import communicationIcon from '@/assets/svg/communicationIcon.svg';
import Frame43 from '@/assets/images/Frame43.png';
import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';

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
			<div>
				<div className="m-4 flex w-[920px] justify-between">
					<div className="h-[251px] w-[280px]">
						<Image src={Frame43} alt="image" />
					</div>
					<div
						className="h-[251px] w-[280px] rounded-2xl p-8"
						style={{ backgroundColor: '#FFFFFF' }}
					>
						<h1 className=" mb-9 text-xl font-semibold">Caption</h1>
						<p className=" mb-2 text-sm font-normal">
							Make changes to your website to keep your clients up to speed.
						</p>
						<p className=" text-sm font-normal">#Ying #Yang #Yum #Yam</p>
					</div>
					<div className="h-[251px] w-[280px]">
						<Calendar />
					</div>
				</div>
				<div className="m-3 w-[920px] border border-[#D9D9D9]"></div>
			</div>
		</div>
	);
}

export default Content;
