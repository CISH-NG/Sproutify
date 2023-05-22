import {
	FacebookIcon,
	InstagramIcon,
	TwitterIcon
} from '@/assets/svg/dasboard-menu';
import FormElement from '@/components/FormElement/FormElement';
import Input from '@/components/Input/Input';
import useReactHookForm from '@/hooks/useReactHookForm';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import { SocialMediaProps, SocialMediaSchema } from './SocialMedia.types';

export default function SocialMediaSettingsPage() {
	const router = useRouter();

	const {
		// watch,
		control,
		formState: { errors }
	} = useReactHookForm<SocialMediaProps>(SocialMediaSchema, {});

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
				<div className="flex gap-x-8">
					<FacebookIcon width={32} height={32} style={{ marginTop: 30 }} />
					<FormElement
						label="Facebook URL"
						hasError={!!errors.fbURL}
						errorText={errors?.fbURL?.message}
					>
						<Input
							name="fbURL"
							control={control}
							placeholder="Enter your Facebook URL"
						/>
					</FormElement>
				</div>

				<div className="flex gap-x-8">
					<TwitterIcon width={32} height={32} style={{ marginTop: 30 }} />
					<FormElement
						label="Twitter URL"
						hasError={!!errors.twitterURL}
						errorText={errors?.twitterURL?.message}
					>
						<Input
							name="twitterURL"
							control={control}
							placeholder="Enter your Twitter URL"
						/>
					</FormElement>
				</div>

				<div className="flex gap-x-8">
					<InstagramIcon width={32} height={32} style={{ marginTop: 30 }} />
					<FormElement
						label="Facebook URL"
						hasError={!!errors.instagramURL}
						errorText={errors?.instagramURL?.message}
					>
						<Input
							name="instagramURL"
							control={control}
							placeholder="Enter your Instagram URL"
						/>
					</FormElement>
				</div>

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
