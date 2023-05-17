import { SVGProps } from 'react';

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<rect width="24" height="24" rx="12" fill="#BD7100" />
			<path
				d="M14.6667 8.66702C14.6667 8.29883 14.9651 8.00036 15.3333 8.00036C15.7015 8.00036 16 8.29883 16 8.66702C16 9.03521 15.7015 9.33369 15.3333 9.33369C14.9651 9.33369 14.6667 9.03521 14.6667 8.66702Z"
				fill="white"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12 8.83369C10.2511 8.83369 8.83334 10.2515 8.83334 12.0004C8.83334 13.7493 10.2511 15.167 12 15.167C13.7489 15.167 15.1667 13.7493 15.1667 12.0004C15.1667 10.2515 13.7489 8.83369 12 8.83369ZM9.83334 12.0004C9.83334 10.8037 10.8034 9.83369 12 9.83369C13.1966 9.83369 14.1667 10.8037 14.1667 12.0004C14.1667 13.197 13.1966 14.167 12 14.167C10.8034 14.167 9.83334 13.197 9.83334 12.0004Z"
				fill="white"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M15.5055 5.88903C13.1945 5.63074 10.8056 5.63074 8.49452 5.88903C7.15314 6.03895 6.07026 7.09562 5.91255 8.44398C5.63619 10.8068 5.63619 13.1939 5.91255 15.5567C6.07026 16.9051 7.15314 17.9618 8.49452 18.1117C10.8056 18.37 13.1945 18.37 15.5055 18.1117C16.8469 17.9618 17.9298 16.9051 18.0875 15.5567C18.3638 13.1939 18.3638 10.8068 18.0875 8.44398C17.9298 7.09562 16.8469 6.03895 15.5055 5.88903ZM8.60559 6.88285C10.8428 6.6328 13.1572 6.6328 15.3944 6.88285C16.2812 6.98195 16.9915 7.68169 17.0942 8.56014C17.3616 10.8458 17.3616 13.1549 17.0942 15.4406C16.9915 16.319 16.2812 17.0188 15.3944 17.1179C13.1572 17.3679 10.8428 17.3679 8.60559 17.1179C7.71885 17.0188 7.00853 16.319 6.90578 15.4406C6.63845 13.1549 6.63845 10.8458 6.90578 8.56014C7.00853 7.68169 7.71885 6.98195 8.60559 6.88285Z"
				fill="white"
			/>
		</svg>
	);
};

export default InstagramIcon;
