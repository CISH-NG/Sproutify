import { SVGProps } from 'react';

const Instagram = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<rect width="48" height="48" rx="24" fill={props.color ?? '#1F1717'} />
			<path
				d="M29.3333 17.334C29.3333 16.5977 29.9303 16.0007 30.6667 16.0007C31.403 16.0007 32 16.5977 32 17.334C32 18.0704 31.403 18.6674 30.6667 18.6674C29.9303 18.6674 29.3333 18.0704 29.3333 17.334Z"
				fill="white"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M24 17.6674C20.5022 17.6674 17.6667 20.5029 17.6667 24.0007C17.6667 27.4985 20.5022 30.334 24 30.334C27.4978 30.334 30.3333 27.4985 30.3333 24.0007C30.3333 20.5029 27.4978 17.6674 24 17.6674ZM19.6667 24.0007C19.6667 21.6075 21.6068 19.6674 24 19.6674C26.3932 19.6674 28.3333 21.6075 28.3333 24.0007C28.3333 26.3939 26.3932 28.334 24 28.334C21.6068 28.334 19.6667 26.3939 19.6667 24.0007Z"
				fill="white"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M31.011 11.7781C26.3889 11.2615 21.6111 11.2615 16.989 11.7781C14.3063 12.0779 12.1405 14.1912 11.8251 16.888C11.2724 21.6137 11.2724 26.3877 11.8251 31.1135C12.1405 33.8102 14.3063 35.9235 16.989 36.2234C21.6111 36.7399 26.3889 36.7399 31.011 36.2234C33.6937 35.9235 35.8595 33.8102 36.1749 31.1135C36.7276 26.3877 36.7276 21.6137 36.1749 16.888C35.8595 14.1912 33.6937 12.0779 31.011 11.7781ZM17.2112 13.7657C21.6856 13.2656 26.3144 13.2656 30.7889 13.7657C32.5623 13.9639 33.983 15.3634 34.1885 17.1203C34.7231 21.6917 34.7231 26.3098 34.1885 30.8811C33.983 32.638 32.5623 34.0375 30.7889 34.2357C26.3144 34.7358 21.6856 34.7358 17.2112 34.2357C15.4377 34.0375 14.017 32.638 13.8116 30.8811C13.2769 26.3098 13.2769 21.6917 13.8116 17.1203C14.017 15.3634 15.4377 13.9639 17.2112 13.7657Z"
				fill="white"
			/>
		</svg>
	);
};

export default Instagram;
