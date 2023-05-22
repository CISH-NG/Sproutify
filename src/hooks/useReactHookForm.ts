import { ObjectSchema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, DeepPartial, UseFormReturn } from 'react-hook-form';

const useReactHookForm = <T>(
	schema: ObjectSchema<any, any, any, any>,
	defaultValues?: DeepPartial<T>
): UseFormReturn<T> =>
	useForm<T>({
		mode: 'onBlur',
		defaultValues: defaultValues,
		resolver: yupResolver(schema)
	});

export default useReactHookForm;
