import Head from 'next/head';
// import Image from 'next/image';

import DashboardLayout from '@/layouts/DashboardLayout';
import Settings from '@/screens/Settings/Settings';

const SettingsPage = () => {
	return (
		<DashboardLayout>
			<Head>
				<title>Sproutify | Settings</title>
				<meta
					name="description"
					content="Sproutify - the platform that empowers businesses to grow and flourish!"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Settings />
		</DashboardLayout>
	);
};

export default SettingsPage;
