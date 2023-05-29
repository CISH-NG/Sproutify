export type FormElementProps = {
	label?: string;
	hasError: boolean;
	errorText?: string;
	children: JSX.Element | JSX.Element[];
	noErrorSpace?: boolean;
};

export type FormElementLabelProps = FormElementProps;
