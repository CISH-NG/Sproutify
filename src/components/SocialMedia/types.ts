import { StaticImageData } from 'next/image';

export type SocialMediaProps = {
	title: string;
	image: StaticImageData;
	alt: string;
	color: string;
    data: any
}