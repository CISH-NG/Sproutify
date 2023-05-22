import { object, string, ObjectSchema } from 'yup';

export type SocialMediaProps = {
	fbURL: string;
	twitterURL: string;
	instagramURL: string;
};

export const SocialMediaSchema: ObjectSchema<SocialMediaProps> = object({
	fbURL: string()
		.url('Invalid URL format')
		.required('Facebook URL is required'),
	twitterURL: string()
		.url('Invalid URL format')
		.required('Twitter URL is required'),
	instagramURL: string()
		.url('Invalid URL format')
		.required('Instagram URL is required')
}).required();
