import React from 'react';
import { DashboardContentCardProps } from './DashboardContentCard.types';

function DashboardContentCard({
	name,
	icon,
	content,
	CTA
}: DashboardContentCardProps) {
	return (
		<div className="rounded-3xl bg-white p-8 pl-10 pb-4">
			<div className="mb-5 flex justify-between">
				<h3 className="text-2xl font-semibold text-[#1F1717]">{name}</h3>
				<span className="text-[#9A4CEC]">{icon}</span>
			</div>
			<p className="text-base font-normal text-[#1f1717bf]">{content}</p>

			<hr className="mt-3 border-t-[1px] border-[#cecece40]" />

			<div className="mt-6 flex justify-center gap-x-4">
				{CTA.map((item) => (
					<>{item.content}</>
				))}
			</div>
		</div>
	);
}

export default DashboardContentCard;
