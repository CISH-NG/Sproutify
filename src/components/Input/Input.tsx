import React from 'react';
import { Input as AntdInput } from 'antd';

import { InputProps } from './Input.types';
import { useController } from 'react-hook-form';

const Input: React.FC<InputProps> = ({
	name,
	rules,
	control,
	defaultValue,
	shouldUnregister,
	...rest
}) => {
	const { field } = useController({
		name,
		rules,
		control,
		defaultValue,
		shouldUnregister
	});
	return <AntdInput {...field} {...rest} className="styled-input" />;
};

export default Input;
