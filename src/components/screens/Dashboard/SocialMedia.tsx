import React from 'react';

interface SocialMedia {
	title: string;
}

function SocialMedia(props: SocialMedia) {
	return (
		<div className="rounded-3xl border border-[#F0F0F0] bg-[#FFFFFF] p-8 lg:h-[314px] lg:w-[984px]">
			<div className="flex justify-between">
				<div>
					<h1 className=" text-3xl font-semibold text-[#1F1717] lg:h-[39px] lg:w-[132px]">
						{props.title}
					</h1>
				</div>
				<select className="rounded-xl border border-[#A0A0A0] text-center text-2xl lg:h-[56px] lg:w-[264px]">
					<option>Last One Month</option>
					<option>Last Three Months</option>
					<option>Last Six Months</option>
				</select>
			</div>
			<div className="flex justify-between gap-8">
				<div className="flex w-[430px] flex-col">
					<div className="m-2 flex flex-row justify-between lg:h-[29px] lg:w-[290px]">
						<h3 className="text-2xl font-normal ">Posts</h3>
						<h3 className="text-2xl font-normal">4</h3>
					</div>
					<div className="m-2 flex flex-row justify-between lg:h-[29px] lg:w-[290px]">
						<h3 className="text-2xl font-normal">Accounts reached</h3>
						<h3 className="text-2xl font-normal">250</h3>
					</div>
					<div className="m-2 flex flex-row justify-between lg:h-[29px] lg:w-[290px]">
						<h3 className="text-2xl font-normal">Accounts engaged</h3>
						<h3 className="text-2xl font-normal">150</h3>
					</div>
					<div className="m-2 flex flex-row justify-between lg:h-[29px] lg:w-[290px]">
						<h3 className="text-2xl font-normal ">Followers</h3>
						<h3 className="text-2xl font-normal">80</h3>
					</div>
				</div>
				<div className=" h-[180px] border border-[#F0F0F0] "></div>
				<div className="w-[500px]"></div>
			</div>
		</div>
	);
}

export default SocialMedia;
