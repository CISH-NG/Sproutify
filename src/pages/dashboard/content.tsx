import React from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import Head from 'next/head';
import Content from '@/components/Content/Content';

function content() {
	return (
		<DashboardLayout>
			<Head>
				<title>Sproutify | Social Media</title>
				<meta
					name="description"
					content="Sproutify - the platform that empowers businesses to grow and flourish!"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Content />
		</DashboardLayout>
	);
}

export default content;
