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
		<div className="my-6 rounded-3xl border border-[#F0F0F0] bg-[#FFFFFF] p-8 lg:h-[314px] lg:w-[984px]">
			<div className="flex justify-between">
				<div className="flex flex-row gap-2">
					<h1 className=" text-3xl font-semibold text-[#1F1717]">
						{props.title}
					</h1>
					<div
						className="flex h-[32px] w-[32px] justify-center rounded-3xl"
						style={{ backgroundColor: props.color }}
					>
						<Image src={props.image} alt={props.alt} className="" />
					</div>
				</div>
				<select className="rounded-xl border border-[#A0A0A0] text-center text-2xl lg:h-[56px] lg:w-[264px]">
					<option>Last One Month</option>
					<option>Last Three Months</option>
					<option>Last Six Months</option>
				</select>
			</div>

			<div className="flex justify-between gap-8">
				<div className="flex w-[430px] flex-col">
					<div className="m-2 flex flex-row justify-between lg:w-[310px]">
						<h3 className="text-2xl font-normal ">Posts</h3>
						<h3 className="text-2xl font-normal">4</h3>
					</div>
					<div className="m-2 flex flex-row gap-4 ">
						<div className="flex w-[310px] flex-row justify-between ">
							<h3 className="text-2xl font-normal">Accounts reached</h3>
							<h3 className="text-2xl font-normal">250</h3>
						</div>
						<div className="flex w-14 flex-row justify-between">
							<Image src={Increase} alt="increase" />
							<p className="mt-1 text-[#A0A0A0]">40%</p>
						</div>
					</div>
					<div className="m-2 flex flex-row gap-4">
						<div className="flex w-[310px] flex-row items-center justify-between">
							<h3 className="text-2xl font-normal">Accounts engaged</h3>
							<h3 className="text-2xl font-normal">150</h3>
						</div>
						<div className="flex w-14 flex-row justify-between">
							<Image src={Decrease} alt="increase" />
							<p className="mt-1 text-[#A0A0A0]">5%</p>
						</div>
					</div>
					<div className="m-2 flex flex-row justify-between  lg:w-[310px]">
						<h3 className="text-2xl font-normal ">Followers</h3>
						<h3 className="text-2xl font-normal">80</h3>
					</div>
				</div>
				<div className=" h-[180px] border border-[#F0F0F0] "></div>
				<div className="w-[500px]">
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
