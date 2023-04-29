import Head from 'next/head';
// import Image from 'next/image';

import DashboardLayout from '@/layouts/DashboardLayout';
import DashBoard from '@/screens/Dashboard/Dashboard';

const DashboardPage = () => {
	return (
		<DashboardLayout>
			<Head>
				<title>Sproutify | Dashboard</title>
				<meta
					name="description"
					content="Sproutify - the platform that empowers businesses to grow and flourish!"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<DashBoard />
		</DashboardLayout>
	);
};

export default DashboardPage;
