import AlertCircle from '@/assets/svg/alert-circle';
import { FormElementProps } from './FormElement.types';

const FormElement: React.FC<FormElementProps> = ({
	label,
	children,
	hasError,
	errorText
}) => {
	return (
		<div className="mb-8 flex w-full flex-col gap-y-4">
			{label && <label className="block text-xl text-[#1F1717]">{label}</label>}
			<div className="flex flex-col gap-y-1">
				{children}
				{errorText && hasError && (
					<div className="flex items-center gap-x-2">
						<AlertCircle />
						<span className="text-base text-[#A0A0A0]">{errorText}</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default FormElement;
