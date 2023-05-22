import { NotificationIcon } from '@/assets/svg/red-notification';
import DashboardLayout from '@/layouts/DashboardLayout';
import AccountInfoPage from '@/screens/AccountInfo/AccountInfo';

export default function AccountInfo() {
	return (
		<DashboardLayout>
			<div className="mb-6 flex items-center justify-between">
				<h2 className="text-[32px] font-semibold">Settings</h2>

				<button>
					<NotificationIcon />
				</button>
			</div>

			<AccountInfoPage />
		</DashboardLayout>
	);
}
