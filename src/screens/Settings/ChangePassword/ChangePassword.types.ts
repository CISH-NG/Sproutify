import { object, string, ObjectSchema } from 'yup';

export type ChangePasswordProps = {
	password: string;
	newPassword: string;
	confirmPassword: string;
};

export const ChangePasswordSchema: ObjectSchema<ChangePasswordProps> = object({
	password: string().required('Current password is required'),
	newPassword: string()
		.min(8, 'New password must be at least 8 characters')
		.required('New password is required'),
	confirmPassword: string()
		.test('passwords-match', 'Passwords do not match', function (value) {
			return this.parent.newPassword === value;
		})
		.required('Confirm password is required')
}).required();
