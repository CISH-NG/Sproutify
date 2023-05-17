import AddIcon from '@/assets/svg/addIcon';
import { BudgetIcon, SocialIcon, EditIcon } from '@/assets/svg/dasboard-menu';
import FacebookIcon from '@/assets/svg/FacebookIcon';
import InstagramIcon from '@/assets/svg/InstagramIcon';
import TwitterIcon from '@/assets/svg/TwitterIcon';
import WhatsAppIcon from '@/assets/svg/WhatsAppIcon';
import DashboardColumnChart from '@/components/DashboardColumnChart/DashboardColumnChart';
import DashboardContentCard from '@/components/DashboardContentCard/DashboardContentCard';
import DashboardInvoiceCard from '@/components/DashboardInvoiceCard/DashboardInvoiceCard';
import HorizontalDashboardColumnChart from '@/components/HorizontalDashboardColumnChart/HorizontalDashboardColumnChart';

export default function DashBoard() {
	return (
		<>
			<h2 className="text-[32px] font-semibold">Dashboard</h2>

			<div className="mt-4 flex flex-col gap-y-6 sm:grid sm:grid-cols-3 sm:gap-x-4">
				<DashboardContentCard
					name="Social media"
					content="Social media analysis regarding brand engagement and content."
					icon={<SocialIcon />}
					CTA={[
						{ url: '#', content: <FacebookIcon /> },
						{ url: '#', content: <InstagramIcon /> },
						{ url: '#', content: <TwitterIcon /> },
						{ url: '#', content: <WhatsAppIcon /> }
					]}
				/>

				<DashboardContentCard
					name="Content"
					content="	All your digital content scheduled for the month."
					icon={<BudgetIcon />}
					CTA={[
						{ url: '#', content: <FacebookIcon /> },
						{ url: '#', content: <InstagramIcon /> },
						{ url: '#', content: <TwitterIcon /> },
						{ url: '#', content: <WhatsAppIcon /> }
					]}
				/>

				<DashboardContentCard
					name="Your website"
					content="Make changes to your website to keep your clients up to speed."
					icon={<EditIcon />}
					CTA={[
						{ url: '#', content: <FacebookIcon /> },
						{ url: '#', content: <InstagramIcon /> },
						{ url: '#', content: <TwitterIcon /> },
						{ url: '#', content: <WhatsAppIcon /> }
					]}
				/>
			</div>

			{/* Chart Section */}
			<div className="mt-6 flex flex-col gap-y-6 sm:gap-x-4 md:flex-row">
				<div className="h-[226px] rounded-3xl bg-white p-8 pb-3 pl-10 pr-[77px] md:w-5/12">
					<DashboardColumnChart />
				</div>

				<div className="h-[226px] rounded-3xl bg-white p-8 pl-10 pb-3 md:w-7/12">
					<HorizontalDashboardColumnChart />
				</div>
			</div>

			<hr className="mt-8 mb-10 border-t-[1px] border-[#D9D9D9] " />

			{/* Invoice Section */}
			<div className="flex justify-between">
				<h2 className="text-[32px] font-semibold">Invoice</h2>

				<button className="flex items-center gap-x-6 text-2xl">
					<AddIcon /> <span className="hidden sm:block">New Invoice</span>
				</button>
			</div>

			<div className="mt-4 mb-8 flex gap-x-8 overflow-scroll">
				<DashboardInvoiceCard
					purchase={['3 Plain tees', '1 Pierre Cardon sardine']}
					date="Tuesday, 4th January"
					amount="N 24,000"
				/>
				<DashboardInvoiceCard
					purchase={['3 Plain tees', '1 Pierre Cardon sardine']}
					date="Tuesday, 4th January"
					amount="N 24,000"
				/>
				<DashboardInvoiceCard
					purchase={['3 Plain tees', '1 Pierre Cardon sardine']}
					date="Tuesday, 4th January"
					amount="N 24,000"
				/>
				<DashboardInvoiceCard
					purchase={['3 Plain tees', '1 Pierre Cardon sardine']}
					date="Tuesday, 4th January"
					amount="N 24,000"
				/>
			</div>
		</>
	);
}
