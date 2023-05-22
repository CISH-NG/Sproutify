import FormElement from '@/components/FormElement/FormElement';
import Input from '@/components/Input/Input';
import useReactHookForm from '@/hooks/useReactHookForm';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import { AccountInfoProps, AccountInfoSchema } from './AccountInfo.types';

export default function AccountInfoPage() {
	const router = useRouter();

	const {
		// watch,
		control,
		formState: { errors }
	} = useReactHookForm<AccountInfoProps>(AccountInfoSchema, {});

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
					label="Email address"
					hasError={!!errors.email}
					errorText={errors?.email?.message}
				>
					<Input
						type="email"
						name="email"
						control={control}
						placeholder="chadow@gmail.com"
					/>
				</FormElement>

				<FormElement
					label="Phone number"
					hasError={!!errors.phoneNumber}
					errorText={errors?.phoneNumber?.message}
				>
					<Input
						name="phoneNumber"
						control={control}
						placeholder="+234 813 6177 091"
					/>
				</FormElement>

				<FormElement
					label="Location"
					hasError={!!errors.location}
					errorText={errors?.location?.message}
				>
					<Input
						name="location"
						control={control}
						placeholder="Lagos, Nigeria"
					/>
				</FormElement>

				<FormElement
					label="Industry"
					hasError={!!errors.industry}
					errorText={errors?.industry?.message}
				>
					<Input name="industry" control={control} placeholder="Fashion" />
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
