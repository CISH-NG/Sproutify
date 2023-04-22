import SocialMedia from '@/screens/SocialMedia/SocialMedia';
import DashboardLayout from '@/layouts/DashboardLayout';
import React from 'react';
import Head from 'next/head';

function social_media() {
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
			<SocialMedia />
		</DashboardLayout>
	);
}

export default social_media;
