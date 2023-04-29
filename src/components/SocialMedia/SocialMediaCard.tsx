import Image from 'next/image';
import React from 'react';
import Increase from '@/assets/svg/Increase.svg';
import Decrease from '@/assets/svg/Decrease.svg';
import { SocialMediaProps } from './types';
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts';

function SocialMediaCard(props: SocialMediaProps) {
	return (
		<div className="my-6 h-[370px] w-[370px] rounded-3xl border border-[#F0F0F0] bg-[#FFFFFF] p-8 md:h-[314px] md:w-[984px]">
			<div className="flex justify-between">
				<div className="flex flex-row gap-2">
					<h1 className=" text-base font-bold text-[#1F1717] md:text-3xl md:font-semibold">
						{props.title}
					</h1>
					<div
						className="flex h-[24px] w-[24px] justify-center rounded-3xl md:h-[32px] md:w-[32px]"
						style={{ backgroundColor: props.color }}
					>
						<Image src={props.image} alt={props.alt} className="" />
					</div>
				</div>
				<select className="h-[32px] w-[159px] rounded-xl border border-[#A0A0A0] text-center text-base md:h-[56px] md:w-[264px] md:text-2xl">
					<option>Last One Month</option>
					<option>Last Three Months</option>
					<option>Last Six Months</option>
				</select>
			</div>

			<div className="flex flex-col justify-between md:gap-6 lg:flex-row">
				<div className="flex w-[430px] flex-col gap-2">
					<div className="flex w-[226px] flex-row justify-between md:m-2 md:w-[310px]">
						<h3 className="text-base font-normal md:text-2xl ">Posts</h3>
						<h3 className="text-base font-normal md:text-2xl">4</h3>
					</div>
					<div className="flex w-[280px] flex-row gap-4 md:w-[410px] lg:m-2">
						<div className="flex w-[310px] flex-row justify-between ">
							<h3 className="text-base font-normal md:text-2xl">
								Accounts reached
							</h3>
							<h3 className="text-base font-normal md:text-2xl">250</h3>
						</div>
						<div className="flex w-14 flex-row justify-between">
							<Image src={Increase} alt="increase" />
							<p className="mt-1 text-[#A0A0A0]">40%</p>
						</div>
					</div>
					<div className="flex w-[280px] flex-row gap-4 md:m-2 md:w-[410px]">
						<div className="flex w-[310px] flex-row items-center justify-between">
							<h3 className="text-base font-normal md:text-2xl">
								Accounts engaged
							</h3>
							<h3 className="text-base font-normal md:text-2xl">150</h3>
						</div>
						<div className="flex w-14 flex-row justify-between">
							<Image src={Decrease} alt="increase" />
							<p className="mt-1 text-[#A0A0A0]">5%</p>
						</div>
					</div>
					<div className="flex w-[226px] flex-row justify-between md:m-2  md:w-[310px]">
						<h3 className="text-base font-normal md:text-2xl ">Followers</h3>
						<h3 className="text-base font-normal md:text-2xl">80</h3>
					</div>
				</div>

				<div className=" w:[180px] m-2 border border-[#F0F0F0] lg:h-[180px] "></div>

				<div className="mt-6 h-[150px] w-[320px] lg:w-[500px]">
					<ResponsiveContainer width="100%" height="100%">
						<LineChart
							width={500}
							height={200}
							margin={{
								top: 5,
								right: 30,
								bottom: 5
							}}
							data={props.data}
						>
							<XAxis dataKey="date" />
							<YAxis />
							<Tooltip />
							<CartesianGrid stroke="#1F1717" strokeDasharray="3 3" />
							<Line
								type="monotone"
								dataKey="ar"
								stroke="#FEC431"
								activeDot={{ r: 8 }}
								strokeWidth="0.2rem"
							/>
							<Line
								type="monotone"
								dataKey="ae"
								stroke="#2F2181"
								strokeWidth="0.2rem"
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	);
}

export default SocialMediaCard;
