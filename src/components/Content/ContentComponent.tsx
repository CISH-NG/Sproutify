import React, { useState } from 'react';
import Frame43 from '@/assets/images/Frame43.png';
import Calendar from 'react-calendar';
import Image from 'next/image';
import { ContentProps } from './types';

function ContentComponent() {
	const [value, onChange] = useState(new Date());

	const tileClassName = (props: ContentProps) => {
		// Add purple background to the current date
		if (
			props.view === 'month' &&
			props.date.getDate() === new Date().getDate()
		) {
			return 'text-white bg-[#9A4CEC] rounded-3xl font-bold';
		}

		// Bold and no underline for the day names
		if (
			props.view === 'month' &&
			props.date.getDay() >= 0 &&
			props.date.getDay() <= 6
		) {
			return 'font-semibold underline-none';
		}

		if (
			props.view === 'month' &&
			props.date.getDay() === 0 &&
			props.date.getMonth() === new Date().getMonth()
		) {
			return 'text-red-500 font-semibold';
		}

		return '';
	};

	return (
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

				<div className="flex h-[251px] w-[280px] flex-col rounded-2xl bg-[#FFFFFF] p-6">
					<div className="mb-3 flex">
						<p className="w-[58px] rounded-lg bg-[#1F1717] text-center text-sm text-white">
							12:00
						</p>
						<p className="w-[34px] rounded-lg bg-[#CECECE] text-center text-sm text-white">
							PM
						</p>
					</div>
					<Calendar
						className="w-[250px]"
						onChange={onChange}
						value={value}
						tileClassName={tileClassName}
						prev2Label={null}
						next2Label={null}
						formatMonthYear={(locale, date) =>
							`${date.toLocaleDateString(locale, {
								month: 'long'
							})} ${date.getFullYear()}`
						}
					/>
				</div>
			</div>
			<div className="m-3 w-[920px] border border-[#D9D9D9]"></div>
		</div>
	);
}

export default ContentComponent;
