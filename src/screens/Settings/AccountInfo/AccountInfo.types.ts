import { object, string, ObjectSchema } from 'yup';

export type AccountInfoProps = {
	email: string;
	phoneNumber: string;
	location: string;
	industry: string;
};

export const AccountInfoSchema: ObjectSchema<AccountInfoProps> = object({
	email: string().email('Invalid email format').required('Email is required'),
	phoneNumber: string()
		.matches(/^(0|\+?234)[ -]?\d{10}$/, 'Invalid Phone number format')
		.required('Phone number is required'),
	location: string().required('Location is required'),
	industry: string().required('Industry is required')
}).required();
