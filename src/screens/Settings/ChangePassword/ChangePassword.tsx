import FormElement from '@/components/FormElement/FormElement';
import Input from '@/components/Input/Input';
import useReactHookForm from '@/hooks/useReactHookForm';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import {
	ChangePasswordProps,
	ChangePasswordSchema
} from './ChangePassword.types';

export default function ChangePasswordPage() {
	const router = useRouter();

	const {
		// watch,
		control,
		formState: { errors }
	} = useReactHookForm<ChangePasswordProps>(ChangePasswordSchema, {});

	const handleGoBack = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		router.back();
	};

	return (
		<div className="min-h-[70vh] rounded-xl bg-white px-5 pt-6 pb-[60px] sm:px-8">
			<Link
				href="#"
				onClick={handleGoBack}
				className="text-base text-[#1929BF]"
			>
				Back
			</Link>

			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
				className="mt-7 sm:px-4"
			>
				<FormElement
					label="Current Password"
					hasError={!!errors.password}
					errorText={errors?.password?.message}
				>
					<Input
						type="password"
						name="password"
						control={control}
						placeholder="************"
					/>
				</FormElement>

				<FormElement
					label="New Password"
					hasError={!!errors.newPassword}
					errorText={errors?.newPassword?.message}
				>
					<Input
						type="password"
						name="newPassword"
						control={control}
						placeholder="************"
					/>
				</FormElement>

				<FormElement
					label="Confirm Password"
					hasError={!!errors.confirmPassword}
					errorText={errors?.confirmPassword?.message}
				>
					<Input
						type="password"
						name="confirmPassword"
						control={control}
						placeholder="************"
					/>
				</FormElement>

				<button
					type="submit"
					className="mx-auto mt-24 flex h-[47px] w-[238px] items-center justify-center rounded-xl bg-[#4C2884] text-white"
				>
					Save
				</button>
			</form>
		</div>
	);
}
