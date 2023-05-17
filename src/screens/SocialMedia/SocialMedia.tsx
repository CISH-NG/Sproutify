import React from 'react';
import facebookIcon from '@/assets/svg/facebookIcon.svg';
import SocialMediaCard from '@/components/SocialMedia/SocialMediaCard';
import twitter from '@/assets/svg/twitter.svg';
import instagram from '@/assets/svg/instagram.svg';

const socialMediaData = [
	{
		title: 'Facebook',
		alt: 'facebook icon',
		image: facebookIcon,
		color: '#1929BF',
		data: [
			{
				date: '04 Feb 22',
				ar: 120,
				ae: 80
			},
			{
				date: '12 Feb 22',
				ar: 150,
				ae: 150
			},
			{
				date: '20 Feb 22',
				ar: 120,
				ae: 120
			},
			{
				date: '28 Feb 22',
				ar: 180,
				ae: 120
			}
		]
	},
	{
		title: 'Twitter',
		alt: 'twittericon',
		image: twitter,
		color: '#41ABE7',
		data: [
			{
				date: '04 Feb 22',
				ar: 120,
				ae: 80
			},
			{
				date: '12 Feb 22',
				ar: 150,
				ae: 150
			},
			{
				date: '20 Feb 22',
				ar: 120,
				ae: 120
			},
			{
				date: '28 Feb 22',
				ar: 180,
				ae: 120
			}
		]
	},
	{
		title: 'Instagram',
		alt: 'instagram icon',
		image: instagram,
		color: '#BD7100',
		data: [
			{
				date: '04 Feb 22',
				ar: 120,
				ae: 80
			},
			{
				date: '12 Feb 22',
				ar: 150,
				ae: 150
			},
			{
				date: '20 Feb 22',
				ar: 120,
				ae: 120
			},
			{
				date: '28 Feb 22',
				ar: 180,
				ae: 120
			}
		]
	}
];

function SocialMedia() {
	return (
		<>
			<h1 className="h-[39px] w-[176px] text-3xl">Social Media</h1>
			{socialMediaData.map((data) => (
				<SocialMediaCard
					key={data.title}
					title={data.title}
					alt={data.alt}
					image={data.image}
					color={data.color}
					data={data.data}
				/>
			))}
		</>
	);
}

export default SocialMedia;
