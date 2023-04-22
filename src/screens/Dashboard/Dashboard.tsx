import AddIcon from '@/assets/svg/addIcon';
import { BudgetIcon, SocialIcon, EditIcon } from '@/assets/svg/dasboard-menu';
import DownloadIcon from '@/assets/svg/dowonloadIcon';

export default function DashBoard() {
	return (
		<>
			<h2 className="text-[32px] font-semibold">Dashboard</h2>

			<div className="mt-4 flex flex-col gap-y-6 sm:grid sm:grid-cols-3 sm:gap-x-4">
				<div className="rounded-3xl bg-white p-8 pl-10">
					<div className="mb-5 flex justify-between">
						<h3 className="text-2xl font-semibold text-[#1F1717]">
							Social media
						</h3>
						<span className="text-[#9A4CEC]">
							<SocialIcon />
						</span>
					</div>
					<p className="text-base font-normal text-[#1f1717bf]">
						Social media analysis regarding brand engagement and content.
					</p>

					<div className="h-20" />
					<hr className="border-t-[1px] border-[#cecece40]" />
				</div>

				<div className="rounded-3xl bg-white p-8 pl-10">
					<div className="mb-5 flex justify-between">
						<h3 className="text-2xl font-semibold text-[#1F1717]">Content</h3>
						<span className="text-[#9A4CEC]">
							<BudgetIcon />
						</span>
					</div>
					<p className="text-base font-normal text-[#1f1717bf]">
						All your digital content scheduled for the month
					</p>

					<div className="h-20" />
					<hr className="border-t-[1px] border-[#cecece40]" />
				</div>

				<div className="rounded-3xl bg-white p-8 pl-10">
					<div className="mb-5 flex justify-between">
						<h3 className="text-2xl font-semibold text-[#1F1717]">
							Social media
						</h3>
						<span className="text-[#9A4CEC]">
							<EditIcon />
						</span>
					</div>
					<p className="text-base font-normal text-[#1f1717bf]">
						Make changes to your website to keep your clients up to speed.
					</p>

					<div className="h-20" />
					<hr className="border-t-[1px] border-[#cecece40]" />
				</div>
			</div>

			<hr className="mt-8 mb-10 border-t-[1px] border-[#D9D9D9] " />

			<div className="flex justify-between">
				<h2 className="text-[32px] font-semibold">Invoice</h2>

				<button className="flex items-center gap-x-6 text-2xl">
					<AddIcon /> <span className="hidden sm:block">New Invoice</span>
				</button>
			</div>

			<div className="mt-4 mb-8 flex gap-x-8 overflow-scroll">
				<div className="invoice-item">
					<div className="flex flex-col gap-y-1">
						<span className="text-2xl font-semibold text-[#1F1717]">
							3 Plain tees
						</span>
						<span className="ellipsis text-2xl font-semibold text-[#1F1717]">
							1 Pierre Cardon sardine
						</span>
					</div>

					<p className="ellipsis text-2xl font-normal text-[#9A4CEC]">
						Tuesday, 4th January
					</p>

					<hr className="border-t-[1px] border-[#cecece40]" />

					<div className="flex justify-between">
						<span>N 24,000</span>
						<button>
							<DownloadIcon />
						</button>
					</div>
				</div>

				<div className="invoice-item">
					<div className="flex flex-col gap-y-1">
						<span className="text-2xl font-semibold text-[#1F1717]">
							3 Plain tees
						</span>
						<span className="ellipsis text-2xl font-semibold text-[#1F1717]">
							1 Pierre Cardon sardine
						</span>
					</div>

					<p className="ellipsis text-2xl font-normal text-[#9A4CEC]">
						Tuesday, 4th January
					</p>

					<hr className="border-t-[1px] border-[#cecece40]" />

					<div className="flex justify-between">
						<span>N 24,000</span>
						<button>
							<DownloadIcon />
						</button>
					</div>
				</div>

				<div className="invoice-item">
					<div className="flex flex-col gap-y-1">
						<span className="text-2xl font-semibold text-[#1F1717]">
							3 Plain tees
						</span>
						<span className="ellipsis text-2xl font-semibold text-[#1F1717]">
							1 Pierre Cardon sardine
						</span>
					</div>

					<p className="ellipsis text-2xl font-normal text-[#9A4CEC]">
						Tuesday, 4th January
					</p>

					<hr className="border-t-[1px] border-[#cecece40]" />

					<div className="flex justify-between">
						<span>N 24,000</span>
						<button>
							<DownloadIcon />
						</button>
					</div>
				</div>

				<div className="invoice-item">
					<div className="flex flex-col gap-y-1">
						<span className="text-2xl font-semibold text-[#1F1717]">
							3 Plain tees
						</span>
						<span className="ellipsis text-2xl font-semibold text-[#1F1717]">
							1 Pierre Cardon sardine
						</span>
					</div>

					<p className="ellipsis text-2xl font-normal text-[#9A4CEC]">
						Tuesday, 4th January
					</p>

					<hr className="border-t-[1px] border-[#cecece40]" />

					<div className="flex justify-between">
						<span>N 24,000</span>
						<button>
							<DownloadIcon />
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
