import { object, ObjectSchema, string } from 'yup';

export type WaitlistPageProps = {
	email: string;
};

export const WaitlistPageSchema: ObjectSchema<WaitlistPageProps> = object({
	email: string().email('Invalid email format').required('Email is required')
}).required();
