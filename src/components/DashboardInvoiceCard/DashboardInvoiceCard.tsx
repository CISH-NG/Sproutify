import DownloadIcon from '@/assets/svg/dowonloadIcon';
import React from 'react';
import { DashboardInvoiceCardProps } from './DashboardInvoiceCard.types';

function DashboardInvoiceCard({
	purchase,
	date,
	amount
}: DashboardInvoiceCardProps) {
	return (
		<div className="invoice-item">
			<div className="flex flex-col gap-y-1">
				{purchase.map((item, idx) => (
					<span
						key={idx}
						className="ellipsis text-2xl font-semibold text-[#1F1717]"
					>
						{item}
					</span>
				))}
			</div>

			<p className="ellipsis text-2xl font-normal text-[#9A4CEC]">{date}</p>

			<hr className="border-t-[1px] border-[#cecece40]" />

			<div className="flex justify-between">
				<span>{amount}</span>
				<button>
					<DownloadIcon />
				</button>
			</div>
		</div>
	);
}

export default DashboardInvoiceCard;
